// import MobileNavbar from "../components/layout/Navbar/MobileNavbar";
import { useForm, useIsMobile } from "../hooks";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import MobileForm from "../pages/MultiStepForm/MobileForm";
import WebForm from "../pages/MultiStepForm/WebForm";
import { StyledMainContainer } from "./styled";

const MainContainer = () => {
	const isMobile = useIsMobile();
	const { formData, isConfirmed, validateForm, setIsConfirmed } = useForm();
	const { activeStep, nextStep, prevStep, navigateTo } = useMultiStepForm();

	const handleNextStepClick = () => {
		if (validateForm(activeStep)) {
			nextStep();
		}
	};

	const handleConfirm = () => {
		if (validateForm(activeStep)) {
			console.log("Formulário Confirmado!", formData);
			setIsConfirmed(true);
		}
	};

	return (
		<StyledMainContainer>
			{isMobile ? (
				<MobileForm
					activeStep={activeStep}
					isConfirmed={isConfirmed}
					navigateTo={navigateTo}
					nextStep={handleNextStepClick}
					handleConfirm={handleConfirm}
					prevStep={prevStep}
				/>
			) : (
				<WebForm
					activeStep={activeStep}
					isConfirmed={isConfirmed}
					navigateTo={navigateTo}
					nextStep={handleNextStepClick}
					prevStep={prevStep}
					handleConfirm={handleConfirm}
				/>
			)}
		</StyledMainContainer>
	);
};

export default MainContainer;
