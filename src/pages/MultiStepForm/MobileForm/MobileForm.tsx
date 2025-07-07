import { MobileNavbar } from "../../../components";
import { Footer } from "../../../components/layout";
import MultiStepForm from "../MultiStepForm";

interface MobileFormProps {
	activeStep: number;
	isConfirmed: boolean;
	prevStep: () => void;
	nextStep: () => void;
	navigateTo: (step: number) => void;
	handleConfirm: () => void;
}

const MobileForm = ({
	activeStep,
	isConfirmed,
	prevStep,
	nextStep,
	navigateTo,
	handleConfirm,
}: MobileFormProps) => {
	return (
		<>
			<MobileNavbar activeStep={activeStep} />
			<MultiStepForm
				activeStep={activeStep}
				navigateTo={navigateTo}
				isConfirmed={isConfirmed}
			/>
			<Footer
				activeStep={activeStep}
				nextStep={nextStep}
				prevStep={prevStep}
				handleConfirm={handleConfirm}
			/>
		</>
	);
};

export default MobileForm;
