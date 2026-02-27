import { styled, Card, Typography } from '@mui/material';

interface StyledCardProps {
  selectedPlan: boolean;
}

export const StyledCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'selectedPlan',
})<StyledCardProps>(({ theme, selectedPlan }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: theme.spacing(17.25),
  height: theme.spacing(20),
  padding: theme.spacing(2),
  border: `${theme.spacing(0.125)} solid`,
  borderColor: selectedPlan
    ? theme.palette.purple[600]
    : theme.palette.purple[200],
  borderRadius: theme.spacing(1),
  transition: 'all 0.2s ease-in-out',
  backgroundColor: selectedPlan
    ? theme.palette.blue[50]
    : theme.palette.common.white,
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.purple[600],
    backgroundColor: theme.palette.blue[50],
  },
  '&:focus-visible': {
    outline: `${theme.spacing(0.25)} solid ${theme.palette.purple[400]}`,
    outlineOffset: theme.spacing(0.25),
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: theme.spacing(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export const Price = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.grey[500],
}));

export const Discount = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.blue[950],
  [theme.breakpoints.down('md')]: {
    marginLeft: 'auto',
  },
}));
