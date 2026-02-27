# Refactoring Notes

Documents the key architectural decisions made during the refactoring of this project.

---

## 1. Context consolidation — eliminating prop drilling

**Problem:** `activeStep`, `nextStep`, `prevStep`, `navigateTo` and `resetFormAndSteps` lived in
a separate `useMultiStepForm` hook and were threaded as props through `MainContainer →
WebForm/MobileForm → MultiStepForm → Actions → Navbar`. Every intermediary component was
forced to declare and forward props it didn't use.

**Decision:** Move all navigation state and functions into `FormContext` alongside the form data
they are already coupled with. Every consumer calls `useForm()` directly.

**Result:** `MainContainer` went from 49 to 13 lines. `WebForm`, `MobileForm`, `Navbar` and
`MobileNavbar` became zero-prop components.

---

## 2. PlansSection — derived state over local state

**Problem:** `PlansSection` maintained local `useState` for `isChecked` and `selectedPlanTitle`,
both of which mirrored data that already existed in `FormContext`. A `useEffect` was required to
keep them in sync with `formData.selectedPlan`, creating a fragile feedback loop and risk of
infinite re-renders.

**Decision:** Remove both `useState` and the `useEffect`. Derive the values inline instead:

```ts
const selectedPlanTitle = formData.selectedPlan?.title ?? plansData[0].title;
const isYearly = formData.selectedPlan?.billingPeriod === 'yearly';
```

**Result:** A single source of truth (`formData`), no synchronisation code, no risk of loops.
Handlers call `updatePlan` directly and the component always reflects the context state.

**Rule applied:** _If you can compute it, don't store it._

---

## 3. Validation extraction

**Problem:** All validation logic was embedded in `FormProvider`, making it impossible to test
in isolation and coupling validation rules to state management.

**Decision:** Extract into `src/utils/validation/`:
- `validators.ts` — pure field-level validators (required, email, phone, requiredSelection)
- `formValidation.ts` — step-level composition using those validators
- `index.ts` — barrel export

`FormProvider` now only calls `validateStep(step, formData)` and stores the result.

---

## 4. Memoisation strategy

All functions exposed through `FormContext` are wrapped in `useCallback`. Functions that depend
only on stable `setState` references use `[]` as the dependency array. `validateForm` depends on
`formData` and is declared accordingly.

This ensures that consumers who list context functions as `useEffect` / `useCallback` dependencies
do not re-run unnecessarily on every provider render.

---

## 5. ActionButton — props over context

An `ActionButton` component was extracted from `Actions`. The initial implementation called
`useForm()` to read `isConfirmed` and conditionally apply `fullWidth`. This was removed: a
presentational button component should not know about form state. The `isFullWidth` prop is
passed by `Actions`, which already has `isConfirmed` in scope.
