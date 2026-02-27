import { Navbar } from '../../../components';
import { Footer } from '../../../components/layout';
import MultiStepForm from '../MultiStepForm';
import { StyledFormContainer, StyledStack } from './styled';

interface WebFormProps {
  activeStep: number;
  isConfirmed: boolean;
  prevStep: () => void;
  nextStep: () => void;
  navigateTo: (step: number) => void;
  handleConfirm: () => void;
}

const WebForm = ({
  activeStep,
  isConfirmed,
  navigateTo,
  nextStep,
  handleConfirm,
  prevStep,
}: WebFormProps) => {
  return (
    <StyledFormContainer id='multi-step-form-container'>
      <Navbar activeStep={activeStep} />
      <StyledStack>
        <MultiStepForm
          activeStep={activeStep}
          isConfirmed={isConfirmed}
          navigateTo={navigateTo}
        />

        <Footer
          activeStep={activeStep}
          nextStep={nextStep}
          prevStep={prevStep}
          handleConfirm={handleConfirm}
        />
      </StyledStack>
    </StyledFormContainer>
  );
};

export default WebForm;
