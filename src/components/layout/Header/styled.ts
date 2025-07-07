import { styled, Typography } from "@mui/material";

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
	[theme.breakpoints.down("sm")]: {
		marginBottom: theme.spacing(1),
	},
}));
