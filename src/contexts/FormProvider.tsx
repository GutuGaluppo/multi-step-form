// FormContext.tsx
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

interface FormProviderProps {
  children: ReactNode;
}

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

  // Função de validação usando utilitários separados
  const validateForm = (step?: number): boolean => {
    let newErrors: FormErrors = {};

    if (step) {
      // Valida apenas o step específico
      newErrors = validateStep(step, formData);
    } else {
      // Valida todos os steps se nenhum step for especificado
      for (let i = 1; i <= 4; i++) {
        const stepErrors = validateStep(i, formData);
        newErrors = { ...newErrors, ...stepErrors };
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Funções de atualização de dados
  const updateFormData = (data: Partial<IFormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...data,
    }));
  };

  // Função para atualizar o plano selecionado
  const updatePlan = (plan: ISelectedPlan | null) => {
    setFormData(prevData => ({
      ...prevData,
      selectedPlan: plan,
    }));
  };

  // Função para atualizar os add-ons selecionados
  const updateAddOns = (addOns: IAddOn[]) => {
    setFormData(prevData => ({
      ...prevData,
      selectedAddOns: addOns,
    }));
  };

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

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        updateFormData,
        updatePlan,
        updateAddOns,
        errors,
        setErrors,
        validateForm,
        isConfirmed,
        setIsConfirmed,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
