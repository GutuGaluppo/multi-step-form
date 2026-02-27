import bgImage from '../../../assets/images/bg-sidebar-desktop.svg';
import StepList from './StepList';
import { NavbarContainer } from './styled';

interface SidePropsType {
  activeStep: number;
}

const Navbar = ({ activeStep }: SidePropsType) => {
  return (
    <NavbarContainer>
      <img src={bgImage} alt='Navbar Background' width='100%' height='100%' />
      <StepList activeStep={activeStep} />
    </NavbarContainer>
  );
};

export default Navbar;
