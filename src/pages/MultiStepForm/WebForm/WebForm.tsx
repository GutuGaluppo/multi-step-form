import { Navbar } from '../../../components';
import { Actions } from '../../../components/layout';
import MultiStepForm from '../MultiStepForm';
import { StyledFormContainer, StyledStack } from './styled';

export default function WebForm() {
  return (
    <StyledFormContainer id='multi-step-form-container'>
      <Navbar />
      <StyledStack>
        <MultiStepForm />
        <Actions />
      </StyledStack>
    </StyledFormContainer>
  );
}
