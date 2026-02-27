import { Box, FormControlLabel, styled } from '@mui/material';

interface StyledFormControlLabelProps {
  isChecked: boolean;
}

export const StyledFormControlLabel = styled(
  FormControlLabel
)<StyledFormControlLabelProps>(({ theme, isChecked }) => ({
  width: '100%',
  padding: theme.spacing(2),
  marginRight: 0,
  backgroundColor: isChecked
    ? theme.palette.blue[50]
    : theme.palette.common.white,
  border: '1px solid',
  borderColor: isChecked
    ? theme.palette.purple[600]
    : theme.palette.purple[200],
  borderRadius: theme.spacing(1),
  '& .MuiCheckbox-root': {
    paddingLeft: 0,
    color: theme.palette.purple[200],
    '&.Mui-checked': {
      color: theme.palette.purple[600],
    },
  },
  '& .MuiTypography-body1': {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.blue[950],
  },
  '& .MuiTypography-body2': {
    fontSize: 14,
    color: theme.palette.purple[600],
    marginLeft: 'auto',
  },
  '& .MuiTypography-caption': {
    fontSize: 14,
    color: theme.palette.grey[500],
  },
  '&:hover': {
    backgroundColor: theme.palette.blue[50],
  },
  [theme.breakpoints.down('sm')]: {
    height: '62px',
    '& .MuiTypography-body1': {
      fontSize: 14,
    },
    '& .MuiTypography-body2': {
      fontSize: 12,
    },
    '& .MuiTypography-caption': {
      fontSize: 12,
    },
  },
}));

export const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
