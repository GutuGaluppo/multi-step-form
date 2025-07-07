import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles";
import "./styles/fonts.css";
import MainContainer from "./MainContainer";
import "./App.css";
import { FormProvider } from "./contexts/FormProvider";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<FormProvider>
				<MainContainer />
			</FormProvider>
		</ThemeProvider>
	);
}

export default App;
