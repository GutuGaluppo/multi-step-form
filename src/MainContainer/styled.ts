import { Stack, styled } from '@mui/material';

export const StyledMainContainer = styled(Stack)(({ theme }) => ({
  fontFamily: 'sans-serif',
  height: '100vh',
  margin: 'auto',
  background: theme.palette.blue[100],
}));
