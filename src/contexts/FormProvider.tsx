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

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const initialSelectedPlan = useMemo(() => {
    // Encontra o plano "Arcade" para ser o valor inicial
    const defaultPlan = plansData.find(plan => plan.title === 'Arcade');
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
  console.log(' formData:', formData);

  const [isConfirmed, setIsConfirmed] = useState(false);
  console.log(' isConfirmed:', isConfirmed);

  const [errors, setErrors] = useState<FormErrors>({});

  // Função de validação movida para o Provider
  const validateForm = (step?: number): boolean => {
    console.log(' step:', step);
    const newErrors: FormErrors = {};
    const requiredMsg = 'This field is required';
    const invalidMsg = 'Invalid Input';

    // Validação da Etapa 1: Personal Info
    if (!step || step === 1) {
      // Usando o operador de asserção non-null (!)
      if (!formData.name!.trim()) {
        newErrors.name = requiredMsg;
      }
      if (!formData.email!.trim()) {
        newErrors.email = requiredMsg;
      } else if (!formData.email!.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        newErrors.email = invalidMsg;
      }
      if (!formData.phone!.trim()) {
        newErrors.phone = requiredMsg;
      } else if (!formData.phone!.match(/^\+?\d{9,15}$/)) {
        newErrors.phone = invalidMsg;
      }
    }

    // Validação da Etapa 2: Select Plan (Exemplo: garantir que um plano foi selecionado)
    if (!step || step === 2) {
      if (!formData.selectedPlan) {
        newErrors.selectedPlan = 'Please select a plan';
      }
    }

    // Validação da Etapa 3: Add-ons (Exemplo: talvez nenhum add-on seja obrigatório)
    // if (!step || step === 3) {
    //   if (formData.selectedAddOns.length === 0) {
    //     newErrors.selectedAddOns = "Please select at least one add-on";
    //   }
    // }

    setErrors(newErrors); // Atualiza o estado de erros
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
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
