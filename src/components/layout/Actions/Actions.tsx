import { Button } from '@mui/material';
import { ActionsContainer } from './styled';

interface ActionsProps {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
  handleConfirm: () => void;
}

const Actions = ({
  activeStep,
  nextStep,
  prevStep,
  handleConfirm,
}: ActionsProps) => {
  return (
    <ActionsContainer>
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
    </ActionsContainer>
  );
};

export default Actions;
