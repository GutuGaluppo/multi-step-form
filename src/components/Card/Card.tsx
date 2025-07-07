import { useIsMobile } from "../../hooks";
import { Discount, Price, StyledCard } from "./styled";

interface CardPropsType {
  selectedPlan: boolean;
  title: string;
  icon: string;
  price: string;
  discount?: string | boolean;
  onClick: () => void;
}

const Card = ({
  selectedPlan,
  title,
  icon,
  price,
  discount,
  onClick,
}: CardPropsType) => {
  const isMobile = useIsMobile();

  return (
    <StyledCard onClick={onClick} selectedPlan={selectedPlan}>
      <img src={icon} alt="" width={40} />
      <div>
        <h4>{title}</h4>
        <Price>{price}</Price>
        {isMobile && discount && <Discount>{discount}</Discount>}
      </div>
      {!isMobile && discount && <Discount>{discount}</Discount>}
    </StyledCard>
  );
};

export default Card;
