import mobileImage from '../../../../assets/images/bg-sidebar-mobile.svg';
import StepList from '../StepList';
import { NavbarContainer } from './styled';

interface PropsType {
  activeStep: number;
}

const MobileNavbar = ({ activeStep }: PropsType) => {
  return (
    <NavbarContainer id='mobile-Navbar'>
      <img
        src={mobileImage}
        alt='Navbar Background'
        width='100%'
        height='100%'
      />
      <StepList activeStep={activeStep} />
    </NavbarContainer>
  );
};

export default MobileNavbar;
