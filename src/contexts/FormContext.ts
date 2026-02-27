import { createContext } from 'react';
import type { IFormContext } from '../types/types';

export const FormContext = createContext<IFormContext | undefined>(undefined);
