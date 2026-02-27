import { Box, Stack, styled } from '@mui/material';

export const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '90vw',
  maxWidth: '940px',
  minWidth: '686px',
  height: '600px',
  margin: 'auto',
  padding: theme.spacing(2),
  borderRadius: '15px',
  boxShadow: '2px 10px 20px #3333',
  background: theme.palette.common.white,
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  margin: `${theme.spacing(3)} auto`,
  justifyContent: 'space-between',
}));
