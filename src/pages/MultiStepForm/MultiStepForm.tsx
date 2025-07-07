import { Header } from "../../components/layout";
import AddOns from "./steps/AddOns";
import PersonalInfoForm from "./steps/PersonalInfoForm";
import PlansSection from "./steps/PlansSection";
import Summary from "./steps/Summary";
import ThankYouPage from "./steps/ThankYouPage";
import { StyledContainer } from "./styled";

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
				<ThankYouPage />
			</StyledContainer>
		);
	}
	return (
		<StyledContainer>
			<Header activeStep={activeStep} />

			{activeStep === 1 && <PersonalInfoForm />}
			{activeStep === 2 && <PlansSection />}
			{activeStep === 3 && <AddOns />}
			{activeStep === 4 && <Summary navigateTo={navigateTo} />}
		</StyledContainer>
	);
};

export default MultiStepForm;
