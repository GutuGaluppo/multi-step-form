import { Box, Button, Divider, Stack, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	borderRadius: theme.shape.borderRadius,
	bgcolor: "background.paper",
}));

interface StyledTypographyProps {
	variant?: string;
	component?: string;
	gutterBottom?: boolean;
}
export const StyledTitle = styled(Typography, {
	shouldForwardProp: (prop) =>
		prop !== "variant" && prop !== "component" && prop !== "gutterBottom",
})<StyledTypographyProps>(({ theme }) => ({
	fontSize: 32,
	fontWeight: "bold",
	color: theme.palette.blue[950],
}));

export const StyledSubtitle = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "variant",
})(({ theme }) => ({
	color: theme.palette.grey[500],
	marginBottom: theme.spacing(3),
}));

export const StyledSummarySection = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
	marginBottom: theme.spacing(2),
	backgroundColor: theme.palette.blue[50],
	borderRadius: theme.shape.borderRadius,
}));

export const StyledSelectedPlanSection = styled(Stack)({
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
});

export const StyledTextButton = styled(Button)(({ theme }) => ({
	minWidth: 0,
	padding: 0,
	color: theme.palette.grey[500],
	textTransform: "none",
	"&:hover": {
		color: theme.palette.purple[600],
	},
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
	margin: theme.spacing(2, 0),
	backgroundColor: theme.palette.grey[50],
}));

export const StyledAddOnsSection = styled(Stack)({
	flexDirection: "row",
	justifyContent: "space-between",
});

export const StyledTotalSection = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: theme.spacing(3),
	padding: theme.spacing(2),
}));

export const StyledTotalPerMonth = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[500],
}));

export const StyledTotalPrice = styled(Typography)(({ theme }) => ({
	fontWeight: "bold",
	color: theme.palette.purple[600],
}));
