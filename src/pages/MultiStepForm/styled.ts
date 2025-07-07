import { styled, Stack } from "@mui/material";

export const StyledContainer = styled(Stack)(({ theme }) => ({
	width: "450px",
	minWidth: "200px",
	[theme.breakpoints.down("sm")]: {
		position: "absolute",
		minHeight: "min-content",
		justifyContent: "center",
		top: "12%",
		left: "50%",
		backgroundColor: theme.palette.common.white,
		borderRadius: theme.spacing(2), // 16px
		padding: theme.spacing(4, 3),
		transform: "translate(-50%)",
		width: theme.spacing(43), // 343px
		zIndex: 1000,
	},
}));
