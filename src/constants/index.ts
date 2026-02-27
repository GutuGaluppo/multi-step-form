/**
 * Application-wide constants
 * Centralizes magic strings and numbers for better maintainability
 */

// Form Steps
export const STEPS = {
  PERSONAL_INFO: 1,
  SELECT_PLAN: 2,
  ADD_ONS: 3,
  SUMMARY: 4,
  THANK_YOU: 5,
} as const;

export const TOTAL_STEPS = 4; // Total navigable steps (excluding thank you page)

// Billing Periods
export const BILLING_PERIODS = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
} as const;

export type BillingPeriodType =
  (typeof BILLING_PERIODS)[keyof typeof BILLING_PERIODS];

// Validation Messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Invalid email format',
  INVALID_PHONE: 'Invalid phone number',
  SELECT_PLAN: 'Please select a plan',
} as const;

// Regular Expression Patterns
export const REGEX_PATTERNS = {
  EMAIL: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
  PHONE: /^\+?\d{9,15}$/,
} as const;

// Form Field Names
export const FORM_FIELDS = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  SELECTED_PLAN: 'selectedPlan',
  SELECTED_ADD_ONS: 'selectedAddOns',
} as const;

export type FormFieldName = (typeof FORM_FIELDS)[keyof typeof FORM_FIELDS];

// Default Plan
export const DEFAULT_PLAN_TITLE = 'Arcade';
