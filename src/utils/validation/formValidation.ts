/**
 * Form validation logic organized by step
 */

import type { IFormData, FormErrors } from '../../types/types';
import { STEPS } from '../../constants';
import * as validators from './validators';

/**
 * Validates form data for a specific step
 * @param step - The step number to validate (1-4)
 * @param formData - The current form data
 * @returns Object containing field errors, empty if no errors
 */
export const validateStep = (step: number, formData: IFormData): FormErrors => {
  const errors: FormErrors = {};

  switch (step) {
    case STEPS.PERSONAL_INFO:
      // Validate name
      const nameError = validators.required(formData.name);
      if (nameError) errors.name = nameError;

      // Validate email
      const emailError = validators.email(formData.email);
      if (emailError) errors.email = emailError;

      // Validate phone
      const phoneError = validators.phone(formData.phone);
      if (phoneError) errors.phone = phoneError;
      break;

    case STEPS.SELECT_PLAN:
      // Validate plan selection
      const planError = validators.requiredSelection(formData.selectedPlan);
      if (planError) errors.selectedPlan = planError;
      break;

    case STEPS.ADD_ONS:
      // Add-ons are optional, no validation needed
      break;

    case STEPS.SUMMARY:
      // Summary just displays data, no validation needed
      break;

    default:
      break;
  }

  return errors;
};

/**
 * Validates all form steps
 * Useful for final submission validation
 */
export const validateAllSteps = (formData: IFormData): FormErrors => {
  const allErrors: FormErrors = {};

  // Validate each step and merge errors
  for (let step = 1; step <= 4; step++) {
    const stepErrors = validateStep(step, formData);
    Object.assign(allErrors, stepErrors);
  }

  return allErrors;
};
