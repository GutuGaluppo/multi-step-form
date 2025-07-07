import { useIsMobile } from "../../../../hooks";
import { stepsData } from "../../../../data/stepsData";
import {
	ChipLabel,
	ChipTitle,
	StyledBox,
	StyledChip,
	StyledList,
	StyledListItem,
} from "./styled";

interface StepListProps {
	activeStep: number;
}

const StepList = ({ activeStep }: StepListProps) => {
	const isMobileView = useIsMobile();

	return (
		<StyledList id="step-list">
			{stepsData.map((stepConfig, stepIndex) => {
				const { step, index, label } = stepConfig;
				const isStepActive = activeStep === index ? "filled" : "outlined";

				return (
					<StyledListItem key={`${stepIndex}${label}`} disablePadding>
						<StyledChip label={index} variant={isStepActive} />
						{!isMobileView && (
							<StyledBox>
								<ChipLabel>{step}</ChipLabel>
								<ChipTitle>{label}</ChipTitle>
							</StyledBox>
						)}
					</StyledListItem>
				);
			})}
		</StyledList>
	);
};

export default StepList;
