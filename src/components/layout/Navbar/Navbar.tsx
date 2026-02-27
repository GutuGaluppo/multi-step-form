import bgImage from '../../../assets/images/bg-sidebar-desktop.svg';
import { useForm } from '../../../hooks';
import StepList from './StepList';
import { NavbarContainer } from './styled';

export default function Navbar() {
  const { activeStep } = useForm();

  return (
    <NavbarContainer>
      <img src={bgImage} alt='Navbar Background' width='100%' height='100%' />
      <StepList activeStep={activeStep} />
    </NavbarContainer>
  );
}
