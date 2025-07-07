import { Box, Stack, Typography } from "@mui/material";
import { useForm } from "../../../../hooks";
import type { AddOn } from "../../../../types/types";
import { extractPriceValue, formatPrice } from "../../../../utils/priceUtils";
import {
	StyledAddOnsSection,
	StyledContainer,
	StyledDivider,
	StyledSelectedPlanSection,
	StyledSummarySection,
	StyledTextButton,
	StyledTotalPerMonth,
	StyledTotalPrice,
	StyledTotalSection,
} from "./styled";

interface SummaryProps {
	navigateTo?: (step: number) => void;
}

const Summary = ({ navigateTo }: SummaryProps) => {
	const { formData } = useForm();

	// Verifica se o plano e o período de faturamento estão definidos
	const isYearly = formData.selectedPlan?.billingPeriod === "yearly";
	const periodSuffix = isYearly ? "yr" : "mo";

	// Calcula o total
	let total = 0;

	// Adiciona o preço do plano
	if (formData.selectedPlan) {
		total += extractPriceValue(formData.selectedPlan.price);
	}

	// Adiciona o preço dos add-ons
	formData.selectedAddOns.forEach((addOn) => {
		// Assumimos que o preço do add-on já está na string no formato correto (ex: "+$1/mo")
		// e que o valor numérico é o mesmo para mensal/anual, a menos que você tenha uma lógica diferente.
		// Se os add-ons tiverem preços diferentes para mensal/anual, você precisaria armazenar
		// monthlyPrice e yearlyPrice para cada add-on e escolher aqui.
		total += extractPriceValue(addOn.price);
	});

	const handleChangePlanClick = () => {
		navigateTo?.(2);
	};

	return (
		<StyledContainer>
			<StyledSummarySection>
				{formData.selectedPlan && (
					<StyledSelectedPlanSection>
						<Box>
							<Typography variant="body1" fontWeight="bold">
								{formData.selectedPlan.title} ({isYearly ? "Yearly" : "Monthly"}
								)
							</Typography>
							<StyledTextButton size="small" onClick={handleChangePlanClick}>
								Change
							</StyledTextButton>
						</Box>
						<Typography variant="body1" fontWeight="bold">
							{formData.selectedPlan.price}
						</Typography>
					</StyledSelectedPlanSection>
				)}

				{formData.selectedAddOns.length > 0 && formData.selectedPlan && (
					<StyledDivider />
				)}

				{/* Seção dos Add-Ons Selecionados */}
				<Stack spacing={1}>
					{formData.selectedAddOns.map((addOn: AddOn) => (
						<StyledAddOnsSection key={addOn.name}>
							<Typography variant="body2" color="text.secondary">
								{addOn.title}
							</Typography>
							<Typography variant="body2" color="text.primary">
								{addOn.price}
							</Typography>
						</StyledAddOnsSection>
					))}
				</Stack>
			</StyledSummarySection>

			{/* Seção do Total */}
			<StyledTotalSection>
				<StyledTotalPerMonth variant="body2">
					Total (per {periodSuffix})
				</StyledTotalPerMonth>
				<StyledTotalPrice variant="h5">
					{formatPrice(total, isYearly ? "yearly" : "monthly")}
				</StyledTotalPrice>
			</StyledTotalSection>
		</StyledContainer>
	);
};

export default Summary;
