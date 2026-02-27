import { useState } from 'react';
import { stepsData } from '../data/stepsData';

interface UseMultiStepFormProps {
  initialStep?: number;
}
const TOTAL_STEPS = stepsData.length;

export const useMultiStepForm = ({
  initialStep = 1,
}: UseMultiStepFormProps = {}) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const nextStep = () => {
    setActiveStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev));
  };

  const prevStep = () => {
    setActiveStep(prev => (prev > 1 ? prev - 1 : prev));
  };

  const navigateTo = (step: number) => {
    if (step >= 1 && step <= TOTAL_STEPS) {
      setActiveStep(step);
    }
  };

  return {
    activeStep,
    nextStep,
    prevStep,
    navigateTo,
    isFirstStep: activeStep === 1,
    isLastStep: activeStep === TOTAL_STEPS,
  };
};
