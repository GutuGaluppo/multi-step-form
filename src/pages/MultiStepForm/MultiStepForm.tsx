import { Box, CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '../../components';
import { StepInfo } from '../../components/layout';
import { useForm } from '../../hooks';
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

export default function MultiStepForm() {
  const { activeStep, isConfirmed, navigateTo } = useForm();

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
      <StepInfo activeStep={activeStep} />

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
}
