import mobileImage from '../../../../assets/images/bg-sidebar-mobile.svg';
import { useForm } from '../../../../hooks';
import StepList from '../StepList';
import { NavbarContainer } from './styled';

export default function MobileNavbar() {
  const { activeStep } = useForm();

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
}
