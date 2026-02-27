import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const StyledErrorContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.red?.[50] || '#fef2f2',
  border: `1px solid ${theme.palette.red?.[200] || '#fecaca'}`,
  borderRadius: theme.spacing(2),
  margin: theme.spacing(2),
}));

const StyledErrorIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.red?.[400] || '#f87171',
  marginBottom: theme.spacing(2),
}));

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <StyledErrorContainer>
          <StyledErrorIcon>⚠️</StyledErrorIcon>
          <Typography variant='h5' gutterBottom color='error'>
            Something went wrong
          </Typography>
          <Typography variant='body1' color='textSecondary' paragraph>
            We're sorry, but something unexpected happened. Please try again.
          </Typography>
          <Box mt={2}>
            <Button
              variant='contained'
              onClick={this.handleReset}
              color='primary'
            >
              Try Again
            </Button>
          </Box>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <Box mt={3} textAlign='left'>
              <Typography variant='subtitle2' color='error'>
                Error Details (Development Only):
              </Typography>
              <Typography
                variant='body2'
                component='pre'
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: '8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  overflow: 'auto',
                  maxHeight: '200px',
                }}
              >
                {this.state.error.message}
                {'\n\n'}
                {this.state.error.stack}
              </Typography>
            </Box>
          )}
        </StyledErrorContainer>
      );
    }

    return this.props.children;
  }
}
