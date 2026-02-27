import { styled, Stack, Typography } from '@mui/material';

export const StyledThankYouContainer = styled(Stack)({
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
});

interface TitleProps {
  variant: 'h4' | 'body1';
  component: React.ElementType;
  gutterBottom?: boolean;
}

export const Title = styled(Typography)<TitleProps>(({ theme }) => ({
  color: theme.palette.blue[950],
  fontWeight: 'bold',
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  marginTop: theme.spacing(1),
  textAlign: 'center',
}));
