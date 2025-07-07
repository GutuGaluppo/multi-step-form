// pages/MultiStepForm/steps/ThankYouMessage/ThankYouMessage.tsx
import CheckmarkIcon from "../../../../assets/images/icon-thank-you.svg";
import { StyledSubtitle, StyledThankYouContainer, Title } from "./styled";

const ThankYouMessage = () => {
	return (
		<StyledThankYouContainer>
			<img
				src={CheckmarkIcon}
				alt="Thank you"
				style={{ marginBottom: "24px" }}
			/>
			<Title variant="h4" component="h1" gutterBottom>
				Thank you!
			</Title>
			<StyledSubtitle variant="body1">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</StyledSubtitle>
		</StyledThankYouContainer>
	);
};

export default ThankYouMessage;
