import { Stack, styled } from '@mui/material';

export const ActionsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: theme.spacing(2, 3),
    backgroundColor: theme.palette.common.white,
  },
}));
