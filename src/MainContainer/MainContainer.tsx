import { useIsMobile } from '../hooks';
import MobileForm from '../pages/MultiStepForm/MobileForm';
import WebForm from '../pages/MultiStepForm/WebForm';
import { StyledMainContainer } from './styled';

const MainContainer = () => {
  const isMobile = useIsMobile();
  return (
    <StyledMainContainer>
      {isMobile ? <MobileForm /> : <WebForm />}
    </StyledMainContainer>
  );
};

export default MainContainer;
