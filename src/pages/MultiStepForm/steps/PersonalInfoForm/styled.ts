import { Box, Typography, Stack, styled } from "@mui/material";

interface StyledFormProps {
	component?: React.ElementType;
}
export const StyledForm = styled(Box, {
	shouldForwardProp: (prop) => prop !== "component",
})<StyledFormProps>(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: theme.spacing(2),
	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(1),
	},
})) as typeof Box;

export const StyledInputWrapper = styled(Stack)({
	justifyContent: "center",
});

export const StyledLabel = styled("label")(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	fontSize: 14,
	color: theme.palette.blue[950],
}));

interface StyledErrorTextProps {
	component?: React.ElementType;
}
export const StyledErrorText = styled(Typography)<StyledErrorTextProps>(
	({ theme }) => ({
		fontSize: 14,
		fontWeight: "bold",
		color: theme.palette.error.main,
		display: "inline",
	})
) as typeof Typography;

interface StyledInputProps {
	hasError?: boolean;
}
export const StyledInput = styled("input")<StyledInputProps>(
	({ theme, hasError }) => ({
		width: "100%",
		height: theme.spacing(6),
		margin: 9,
		marginLeft: 0,
		paddingBlock: 8,
		paddingInline: 16,
		borderRadius: theme.spacing(1),
		border: `1px solid ${
			hasError ? theme.palette.error.main : "rgba(214, 217, 230, 1)"
		}`,
	})
);
