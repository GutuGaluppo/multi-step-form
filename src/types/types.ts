import type { Dispatch, SetStateAction } from "react";

export interface StepItemType {
	index: number;
	step: string;
	label: string;
	title: string;
	subTitle: string;
}

export interface FormDataInterface {
	name: string;
	email: string;
	phone: string;
}

export interface AddOn {
	name: string;
	title: string;
	description: string;
	price: string;
}

export type BillingPeriod = "monthly" | "yearly";

export interface SelectedPlan {
	title: string;
	price: string;
	discount: string;
	billingPeriod: BillingPeriod;
}

export interface FormData {
	name: string;
	email: string;
	phone: string;
	selectedPlan: SelectedPlan | null;
	selectedAddOns: AddOn[];
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export interface FormContextType {
	formData: FormData;
	setFormData: Dispatch<SetStateAction<FormData>>;
	errors: FormErrors;
	setErrors: Dispatch<SetStateAction<FormErrors>>;
	isConfirmed: boolean;
	setIsConfirmed: Dispatch<SetStateAction<boolean>>;
	updateFormData: (data: Partial<FormData>) => void;
	updatePlan: (plan: SelectedPlan | null) => void;
	updateAddOns: (addOns: AddOn[]) => void;
	validateForm: (step?: number) => boolean;
	resetForm: () => void;
}
