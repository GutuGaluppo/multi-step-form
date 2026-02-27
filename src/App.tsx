import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styles';
import './styles/fonts.css';
import MainContainer from './MainContainer';
import './App.css';
import { FormProvider } from './contexts/FormProvider';
import { ErrorBoundary } from './components';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FormProvider>
          <ErrorBoundary>
            <MainContainer />
          </ErrorBoundary>
        </FormProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
