import { lazy, Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { Header } from '../../components/layout';
import { ErrorBoundary } from '../../components';
import { StyledContainer } from './styled';

const PersonalInfoForm = lazy(() => import('./steps/PersonalInfoForm'));
const PlansSection = lazy(() => import('./steps/PlansSection'));
const AddOns = lazy(() => import('./steps/AddOns'));
const Summary = lazy(() => import('./steps/Summary'));
const ThankYouPage = lazy(() => import('./steps/ThankYouPage'));

const LoadingSpinner = () => (
  <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    minHeight='200px'
  >
    <CircularProgress />
  </Box>
);

interface MultiStepFormProps {
  activeStep: number;
  isConfirmed: boolean;
  navigateTo: (step: number) => void;
}

const MultiStepForm = ({
  activeStep,
  isConfirmed,
  navigateTo,
}: MultiStepFormProps) => {
  if (isConfirmed) {
    return (
      <StyledContainer>
        <Suspense fallback={<LoadingSpinner />}>
          <ThankYouPage />
        </Suspense>
      </StyledContainer>
    );
  }
  return (
    <StyledContainer>
      <Header activeStep={activeStep} />

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          {activeStep === 1 && <PersonalInfoForm />}
          {activeStep === 2 && <PlansSection />}
          {activeStep === 3 && <AddOns />}
          {activeStep === 4 && <Summary navigateTo={navigateTo} />}
        </Suspense>
      </ErrorBoundary>
    </StyledContainer>
  );
};

export default MultiStepForm;
