import type { ReactNode } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import type {
  IAddOn,
  BillingPeriod,
  IFormData,
  FormErrors,
  ISelectedPlan,
} from '../types/types';
import { FormContext } from './FormContext';
import { plansData } from '../data/plansData';
import { validateStep } from '../utils/validation';
import { DEFAULT_PLAN_TITLE } from '../constants';
import { stepsData } from '../data/stepsData';

interface FormProviderProps {
  children: ReactNode;
}

const TOTAL_STEPS = stepsData.length;

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const initialSelectedPlan = useMemo(() => {
    // Encontra o plano padrão usando a constante
    const defaultPlan = plansData.find(
      plan => plan.title === DEFAULT_PLAN_TITLE
    );
    // Se não encontrar, retorna null
    if (!defaultPlan) {
      return null;
    }

    // O preço inicial será o monthlyPrice, pois o switch começa desativado (monthly)
    return {
      title: defaultPlan.title,
      price: defaultPlan.monthlyPrice,
      discount: defaultPlan.discount,
      billingPeriod: 'monthly' as BillingPeriod,
    };
  }, []);

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    phone: '',
    selectedPlan: initialSelectedPlan,
    selectedAddOns: [],
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  const [activeStep, setActiveStep] = useState(1);

  // Função de validação usando utilitários separados
  const validateForm = useCallback(
    (step?: number): boolean => {
      let newErrors: FormErrors = {};

      if (step !== undefined) {
        // Valida apenas o step específico
        newErrors = validateStep(step, formData);
      } else {
        // Valida todos os steps se nenhum step for especificado
        for (let i = 1; i <= TOTAL_STEPS; i++) {
          const stepErrors = validateStep(i, formData);
          newErrors = { ...newErrors, ...stepErrors };
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [formData]
  );

  // Funções de atualização de dados
  const updateFormData = useCallback((data: Partial<IFormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...data,
    }));
  }, []);

  // Função para atualizar o plano selecionado
  const updatePlan = useCallback((plan: ISelectedPlan | null) => {
    setFormData(prevData => ({
      ...prevData,
      selectedPlan: plan,
    }));
  }, []);

  // Função para atualizar os add-ons selecionados
  const updateAddOns = useCallback((addOns: IAddOn[]) => {
    setFormData(prevData => ({
      ...prevData,
      selectedAddOns: addOns,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      selectedPlan: initialSelectedPlan,
      selectedAddOns: [],
    });
    setErrors({});
    setIsConfirmed(false);
  }, [initialSelectedPlan]);

  const nextStep = useCallback(() => {
    setActiveStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev));
  }, []);

  const prevStep = useCallback(() => {
    setActiveStep(prev => (prev > 1 ? prev - 1 : prev));
  }, []);

  const navigateTo = useCallback((step: number) => {
    if (step >= 1 && step <= TOTAL_STEPS) {
      setActiveStep(step);
    }
  }, []);

  const resetFormAndSteps = useCallback(() => {
    resetForm();
    setActiveStep(1);
  }, [resetForm]);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        updateFormData,
        updatePlan,
        updateAddOns,
        activeStep,
        nextStep,
        prevStep,
        navigateTo,
        errors,
        setErrors,
        validateForm,
        isConfirmed,
        setIsConfirmed,
        resetForm,
        resetFormAndSteps,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
