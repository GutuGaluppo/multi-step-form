import type { Dispatch, SetStateAction } from 'react';

export interface IStepItem {
  index: number;
  step: string;
  label: string;
  title: string;
  subTitle: string;
}

export interface IAddOn {
  name: string;
  title: string;
  description: string;
  price: string;
}

export type BillingPeriod = 'monthly' | 'yearly';

export interface ISelectedPlan {
  title: string;
  price: string;
  discount: string;
  billingPeriod: BillingPeriod;
}

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  selectedPlan: ISelectedPlan | null;
  selectedAddOns: IAddOn[];
}

export type FormErrors = Partial<Record<keyof IFormData, string>>;

export interface IMultiStepFormContext {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
  navigateTo: (step: number) => void;
  resetFormAndSteps: () => void;
}

export interface IFormContext extends IMultiStepFormContext {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  errors: FormErrors;
  setErrors: Dispatch<SetStateAction<FormErrors>>;
  isConfirmed: boolean;
  setIsConfirmed: Dispatch<SetStateAction<boolean>>;
  updateFormData: (data: Partial<IFormData>) => void;
  updatePlan: (plan: ISelectedPlan | null) => void;
  updateAddOns: (addOns: IAddOn[]) => void;
  validateForm: (step?: number) => boolean;
  resetForm: () => void;
}
