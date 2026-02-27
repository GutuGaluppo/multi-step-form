import { useIsMobile } from '../../hooks';
import { Discount, Price, StyledCard } from './styled';

interface PlanCardProps {
  selectedPlan: boolean;
  title: string;
  icon: string;
  price: string;
  discount?: string | boolean;
  onClick: () => void;
}

/**
 * PlanCard component displays a selectable subscription plan option
 * Shows plan details including title, price, icon, and optional discount
 * Adapts layout based on mobile/desktop viewport
 */
const PlanCard = ({
  selectedPlan,
  title,
  icon,
  price,
  discount,
  onClick,
}: PlanCardProps) => {
  const isMobile = useIsMobile();

  return (
    <StyledCard onClick={onClick} selectedPlan={selectedPlan}>
      <img src={icon} alt={`${title} plan icon`} width={40} />
      <div>
        <h4>{title}</h4>
        <Price>{price}</Price>
        {isMobile && discount && <Discount>{discount}</Discount>}
      </div>
      {!isMobile && discount && <Discount>{discount}</Discount>}
    </StyledCard>
  );
};

export default PlanCard;
