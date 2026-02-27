import { stepsData } from '../../../data/stepsData';
import { StyledSubtitle, StyledTitle } from './styled';

interface StepInfoProps {
  activeStep: number;
}

/**
 * StepInfo component displays the title and subtitle for the current step
 * Shows context-specific information to guide the user through the form
 */
const StepInfo = ({ activeStep }: StepInfoProps) => {
  const currentStepData = stepsData[activeStep - 1];

  if (!currentStepData) {
    return null;
  }

  const { title, subTitle } = currentStepData;

  return (
    <header>
      <StyledTitle variant='h4' component='h1'>
        {title}
      </StyledTitle>
      <StyledSubtitle variant='subtitle1'>{subTitle}</StyledSubtitle>
    </header>
  );
};

export default StepInfo;
