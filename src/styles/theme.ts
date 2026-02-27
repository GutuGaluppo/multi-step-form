import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    grey: {
      500: '#9699AA',
    },
    orange: {
      300: '#FFA7E8',
    },
    purple: {
      200: '#D6D9E6',
      400: '#928CFF',
      500: '#6259FF',
      600: '#483EFF',
    },
    blue: {
      50: '#F8F9FF',
      100: '#EFF5FF',
      200: '#BEE2FD',
      300: '#ABBCFF',
      700: '#164A8A',
      950: '#022959',
    },
    red: {
      400: '#EE374A',
      450: '#E96170',
      500: '#F9818E',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        filled: ({ theme }) => ({
          backgroundColor: theme.palette.blue[200],
          '& .MuiChip-label': {
            color: theme.palette.blue[950],
            fontWeight: 'bold',
          },
        }),
      },
    },

    MuiButton: {
      variants: [
        // Primary
        {
          props: { variant: 'primaryButton' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.blue[950],
            color: theme.palette.common.white,
            borderRadius: theme.spacing(1),
            padding: '10px 20px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: theme.palette.blue[700], // Darker shade on hover
            },
          }),
        },
        // Secondary Button
        {
          props: { variant: 'secondaryButton' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.purple[600],
            color: theme.palette.common.white,
            borderRadius: theme.spacing(1),
            padding: '10px 30px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: theme.palette.purple[400],
            },
          }),
        },
        {
          props: { variant: 'text' },
          style: ({ theme }) => ({
            background: 'transparent',
            color: theme.palette.grey[500],
            borderRadius: theme.spacing(1),
            padding: '10px 20px',
            textTransform: 'none',
            '&:hover': {
              color: theme.palette.blue[950],
            },
          }),
        },
      ],
    },
  },
});
