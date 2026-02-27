import { Button } from '@mui/material';
import { FooterContainer } from './styled';

interface FooterProps {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
  handleConfirm: () => void;
}

const Footer = ({
  activeStep,
  nextStep,
  prevStep,
  handleConfirm,
}: FooterProps) => {
  return (
    <FooterContainer>
      {activeStep !== 1 && (
        <Button variant='text' onClick={prevStep}>
          Go Back
        </Button>
      )}
      {activeStep !== 4 ? (
        <Button
          variant='primaryButton'
          onClick={nextStep}
          size='large'
          sx={{ marginLeft: 'auto' }}
        >
          Next Step
        </Button>
      ) : (
        <Button
          variant='secondaryButton'
          onClick={handleConfirm}
          size='large'
          sx={{ marginLeft: 'auto' }}
        >
          Confirm
        </Button>
      )}
    </FooterContainer>
  );
};

export default Footer;
