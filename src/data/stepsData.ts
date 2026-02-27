import type { IStepItem } from "../types";

export const stepsData: IStepItem[] = [
	{
		index: 1,
		step: "1 Step",
		label: "YOUR INFO", // Renomeado de 'title' para 'label' para evitar confusão
		title: "Personal info",
		subTitle: "Please provide your name, email address, and phone number.",
	},
	{
		index: 2,
		step: "2 Step",
		label: "SELECT PLAN",
		title: "Select your plan",
		subTitle: "You have the option of monthly or yearly billing.",
	},
	{
		index: 3,
		step: "3 Step",
		label: "ADD-ONS",
		title: "Pick add-ons",
		subTitle: "Add-ons help enhance your gaming experience.",
	},
	{
		index: 4,
		step: "4 Step",
		label: "SUMMARY",
		title: "Finishing up",
		subTitle: "Double-check everything looks OK before confirming.",
	},
];
