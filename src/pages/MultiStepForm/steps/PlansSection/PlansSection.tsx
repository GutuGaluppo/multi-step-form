// PlansSection.tsx
import { FormGroup } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
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

  // Inicializa isChecked com base no billingPeriod salvo no formData
  const [isChecked, setIsChecked] = useState<boolean>(
    formData.selectedPlan?.billingPeriod === 'yearly'
  );

  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>(
    formData.selectedPlan?.title || plansData[0].title
  );

  // Função para atualizar o plano no contexto, considerando o período atual
  const updatePlanInContext = useCallback(
    (planTitle: string, period: BillingPeriod) => {
      const fullPlanObject = plansData.find(plan => plan.title === planTitle);

      if (fullPlanObject) {
        const priceToSave =
          period === 'yearly'
            ? fullPlanObject.yearlyPrice
            : fullPlanObject.monthlyPrice;
        const planToSave: ISelectedPlan = {
          title: fullPlanObject.title,
          price: priceToSave,
          discount: fullPlanObject.discount,
          billingPeriod: period, // Salva o período de faturamento
        };
        updatePlan(planToSave);
      } else {
        updatePlan(null);
      }
    },
    [updatePlan]
  );

  // Efeito para sincronizar o estado local 'selectedPlanTitle' e 'isChecked'
  useEffect(() => {
    if (formData.selectedPlan) {
      // Sincroniza o título do plano
      if (formData.selectedPlan.title !== selectedPlanTitle) {
        setSelectedPlanTitle(formData.selectedPlan.title);
      }
      // Sincroniza o estado do switch
      const newIsChecked = formData.selectedPlan.billingPeriod === 'yearly';
      if (newIsChecked !== isChecked) {
        setIsChecked(newIsChecked);
      }
    }
  }, [formData.selectedPlan, selectedPlanTitle, isChecked]); // Adicionado isChecked às dependências

  // Handler para a seleção do plano (clique no card)
  const handlePlan = (cardPlanTitle: string) => {
    setSelectedPlanTitle(cardPlanTitle);
    // Passa o período atual (mensal ou anual) para a função de atualização
    updatePlanInContext(cardPlanTitle, isChecked ? 'yearly' : 'monthly');
  };

  // Handler para o switch de mensal/anual
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIsChecked = event.target.checked;
    setIsChecked(newIsChecked); // Atualiza o estado local do switch

    const newBillingPeriod: BillingPeriod = newIsChecked ? 'yearly' : 'monthly';

    // Se há um plano selecionado, atualiza-o com o novo período
    if (formData.selectedPlan) {
      updatePlanInContext(formData.selectedPlan.title, newBillingPeriod);
    } else {
      // Caso contrário, atualiza o plano padrão "Arcade" com o novo período
      updatePlanInContext(plansData[0].title, newBillingPeriod);
    }
  };

  return (
    <StyledContainer>
      <CardsWrapper>
        {plansData.map(card => (
          <Card
            key={card.title}
            selectedPlan={card.title === selectedPlanTitle}
            title={card.title}
            price={isChecked ? card.yearlyPrice : card.monthlyPrice}
            icon={card.icon}
            discount={isChecked && card.discount}
            onClick={() => handlePlan(card.title)}
          />
        ))}
      </CardsWrapper>
      <FormGroup>
        <PeriodSelectorSection>
          <StyledTypography isChecked={isChecked}>Monthly</StyledTypography>{' '}
          {/* Invertido para refletir o estado do switch */}
          <StyledSwitch
            checked={isChecked}
            onChange={handleChange}
            slotProps={{ input: { 'aria-label': 'payment type' } }}
          />
          <StyledTypography isChecked={!isChecked}>Yearly</StyledTypography>{' '}
          {/* Invertido para refletir o estado do switch */}
        </PeriodSelectorSection>
      </FormGroup>
    </StyledContainer>
  );
};

export default PlansSection;
