import { createContext } from "react";
import type { FormContextType } from "../types/types";

export const FormContext = createContext<FormContextType | undefined>(
	undefined
);
