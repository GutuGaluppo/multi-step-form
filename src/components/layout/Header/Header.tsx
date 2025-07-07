import { stepsData } from "../../../data/stepsData";
import { StyledSubtitle, StyledTitle } from "./styled";

interface HeaderProps {
	activeStep: number;
}

const Header = ({ activeStep }: HeaderProps) => {
	const currentStepData = stepsData[activeStep - 1];
	const { title, subTitle } = currentStepData;

	if (!currentStepData) {
		return null;
	}
	return (
		<header>
			<StyledTitle variant="h4" component="h1">
				{title}
			</StyledTitle>
			<StyledSubtitle variant="subtitle1">{subTitle}</StyledSubtitle>
		</header>
	);
};

export default Header;
