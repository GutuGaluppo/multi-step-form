import { useForm } from '../../../hooks';
import ActionButton from './ActionButton';
import { ActionsContainer } from './styled';

const Actions = () => {
  const {
    validateForm,
    isConfirmed,
    setIsConfirmed,
    activeStep,
    nextStep,
    prevStep,
    resetFormAndSteps,
  } = useForm();

  const handleNextStepClick = () => {
    if (validateForm(activeStep)) {
      nextStep();
    }
  };

  const handleConfirm = () => {
    if (validateForm(activeStep)) {
      setIsConfirmed(true);
    }
  };

  if (isConfirmed) {
    return (
      <ActionsContainer>
        <ActionButton
          onClick={resetFormAndSteps}
          text='Start Over'
          variant='primaryButton'
          isFullWidth
        />
      </ActionsContainer>
    );
  }

  return (
    <ActionsContainer>
      {activeStep !== 1 && (
        <ActionButton onClick={prevStep} text='Go Back' variant='text' />
      )}
      {activeStep !== 4 ? (
        <ActionButton
          onClick={handleNextStepClick}
          text='Next Step'
          variant='primaryButton'
        />
      ) : (
        <ActionButton
          onClick={handleConfirm}
          text='Confirm'
          variant='secondaryButton'
        />
      )}
    </ActionsContainer>
  );
};

export default Actions;
