import { styled } from '@mui/material/styles';
import { List, Chip, ListItem, Box, Typography } from '@mui/material';

export const StyledList = styled(List)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4, 3),
  color: theme.palette.common.white,
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    flexDirection: 'row',
    width: theme.spacing(22.5), // 180px
    alignItems: 'center',
    padding: 0,
    paddingTop: theme.spacing(4),
    gap: theme.spacing(2),
  },
}));

export const StyledListItem = styled(ListItem)({});

export const StyledChip = styled(Chip)(({ theme }) => ({
  width: theme.spacing(4.125), // 33px
  height: theme.spacing(4.125), // 33px
  fontSize: 14,
  color: theme.palette.common.white,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

export const ChipLabel = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.blue[300],
}));

export const ChipTitle = styled(Typography)({
  fontSize: 14,
});
