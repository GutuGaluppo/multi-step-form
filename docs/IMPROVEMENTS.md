# Improvement Backlog

Proposed improvements not yet implemented, ordered by priority.

---

## High priority

### Accessibility
- Add `aria-label` to the step navigation (`<nav aria-label="Form progress">`)
- Set `aria-current="step"` on the active step indicator
- Add `aria-invalid` and `aria-describedby` to form fields that display errors
- Add a visually-hidden live region to announce step changes to screen readers

### Testing
- Add integration tests covering the full form flow (fill → confirm → start over)
- Add unit tests for `validators.ts` (each validator in isolation)
- Add unit tests for `validateStep` (per-step scenarios)

### Keyboard navigation
- Ensure plan and add-on cards are reachable and activatable via keyboard (`role="button"`, `tabIndex={0}`, Enter/Space handler)

---

## Medium priority

### Type safety
- Enable stricter TypeScript compiler options: `noUncheckedIndexedAccess`, `noImplicitReturns`, `noFallthroughCasesInSwitch`
- Consider a `FORM_FIELDS` const object to replace plain string field names in `handleChange` handlers

### Error handling
- Improve the `ErrorBoundary` fallback UI: expose a "Try again" button that calls `resetErrorBoundary`

### Performance
- Wrap the total price calculation in `SummarySection` with `useMemo` if it involves non-trivial iteration

---

## Low priority

### UX polish
- Add step-transition animation (opacity + translate) using CSS transitions or Framer Motion
- Add skeleton loaders as an alternative to the `CircularProgress` spinner while lazy chunks load

### Project structure
- Move `FormContext.tsx` and `FormProvider.tsx` into a `src/contexts/FormContext/` directory alongside a `types.ts` for context-specific types

### Bundle
- Configure Vite `manualChunks` to split `@mui/material` and `@mui/icons-material` into separate chunks
