/**
 * Reusable validation functions
 * Each validator returns null if valid, or an error message string if invalid
 */

import { VALIDATION_MESSAGES, REGEX_PATTERNS } from '../../constants';

/**
 * Validates that a field is not empty
 */
export const required = (
  value: string,
  message = VALIDATION_MESSAGES.REQUIRED
): string | null => {
  return !value.trim() ? message : null;
};

/**
 * Validates email format
 */
export const email = (value: string): string | null => {
  if (!value.trim()) {
    return VALIDATION_MESSAGES.REQUIRED;
  }

  if (!REGEX_PATTERNS.EMAIL.test(value)) {
    return VALIDATION_MESSAGES.INVALID_EMAIL;
  }

  return null;
};

/**
 * Validates phone number format
 * Accepts numbers with optional + prefix and 9-15 digits
 */
export const phone = (value: string): string | null => {
  if (!value.trim()) {
    return VALIDATION_MESSAGES.REQUIRED;
  }

  if (!REGEX_PATTERNS.PHONE.test(value)) {
    return VALIDATION_MESSAGES.INVALID_PHONE;
  }

  return null;
};

/**
 * Validates that a value is not null or undefined
 */
export const requiredSelection = <T>(
  value: T | null | undefined,
  message = VALIDATION_MESSAGES.SELECT_PLAN
): string | null => {
  return value == null ? message : null;
};
