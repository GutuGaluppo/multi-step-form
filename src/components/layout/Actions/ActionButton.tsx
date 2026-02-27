import { Button } from '@mui/material';

const ActionButton = ({
  onClick,
  text,
  variant,
  isFullWidth,
}: {
  onClick: () => void;
  text: string;
  variant: 'primaryButton' | 'secondaryButton' | 'text';
  isFullWidth?: boolean;
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      size='large'
      fullWidth={isFullWidth}
      sx={{ marginLeft: isFullWidth ? 0 : 'auto' }}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
