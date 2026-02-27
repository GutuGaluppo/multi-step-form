// PlansSection.tsx - REFACTORED VERSION
import { FormGroup } from '@mui/material';
import { useCallback } from 'react';
import Card from '../../../../components/Card';
import { plansData } from '../../../../data/plansData';
import { useForm } from '../../../../hooks';
import type { BillingPeriod, ISelectedPlan } from '../../../../types/types';
import {
  CardsWrapper,
  PeriodSelectorSection,
  StyledContainer,
  StyledSwitch,
  StyledTypography,
} from './styled';

const PlansSection = () => {
  const { formData, updatePlan } = useForm();

  // Derive state from formData instead of maintaining local state
  // This prevents unnecessary re-renders and state sync issues
  const selectedPlanTitle = formData.selectedPlan?.title || plansData[0].title;
  const isYearly = formData.selectedPlan?.billingPeriod === 'yearly';

  /**
   * Updates the selected plan in the form context
   * Memoized to prevent unnecessary re-creations
   */
  const updatePlanInContext = useCallback(
    (planTitle: string, billingPeriod: BillingPeriod) => {
      const fullPlan = plansData.find(plan => plan.title === planTitle);

      if (!fullPlan) {
        updatePlan(null);
        return;
      }

      const price =
        billingPeriod === 'yearly'
          ? fullPlan.yearlyPrice
          : fullPlan.monthlyPrice;

      const planToSave: ISelectedPlan = {
        title: fullPlan.title,
        price,
        discount: fullPlan.discount,
        billingPeriod,
      };

      updatePlan(planToSave);
    },
    [updatePlan]
  );

  /**
   * Handles plan card selection
   */
  const handlePlanSelect = useCallback(
    (planTitle: string) => {
      const currentBillingPeriod = isYearly ? 'yearly' : 'monthly';
      updatePlanInContext(planTitle, currentBillingPeriod);
    },
    [isYearly, updatePlanInContext]
  );

  /**
   * Handles billing period toggle (monthly/yearly)
   */
  const handleBillingPeriodChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newBillingPeriod: BillingPeriod = event.target.checked
        ? 'yearly'
        : 'monthly';

      // Keep the currently selected plan, just update the billing period
      const currentPlanTitle = selectedPlanTitle || plansData[0].title;
      updatePlanInContext(currentPlanTitle, newBillingPeriod);
    },
    [selectedPlanTitle, updatePlanInContext]
  );

  return (
    <StyledContainer>
      <CardsWrapper>
        {plansData.map(card => (
          <Card
            key={card.title}
            selectedPlan={card.title === selectedPlanTitle}
            title={card.title}
            price={isYearly ? card.yearlyPrice : card.monthlyPrice}
            icon={card.icon}
            discount={isYearly && card.discount}
            onClick={() => handlePlanSelect(card.title)}
          />
        ))}
      </CardsWrapper>

      <FormGroup>
        <PeriodSelectorSection>
          <StyledTypography isChecked={!isYearly}>Monthly</StyledTypography>
          <StyledSwitch
            checked={isYearly}
            onChange={handleBillingPeriodChange}
            slotProps={{ input: { 'aria-label': 'payment type' } }}
          />
          <StyledTypography isChecked={isYearly}>Yearly</StyledTypography>
        </PeriodSelectorSection>
      </FormGroup>
    </StyledContainer>
  );
};

export default PlansSection;
