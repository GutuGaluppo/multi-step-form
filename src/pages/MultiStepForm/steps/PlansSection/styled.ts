import { Stack, styled, Switch, Typography } from "@mui/material";

export const StyledContainer = styled(Stack)(({ theme }) => ({
	justifyContent: "space-between",
	gap: theme.spacing(2),
}));

export const Title = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "variant",
})(
	{
		fontWeight: "bold",
		fontSize: 32,
		color: "rgba(2, 41, 89, 1)",
	},
	{
		variant: "h1",
	}
);

export const SubTitle = styled(Typography)({
	color: "rgba(150, 153, 170, 1)",
});

export const CardsWrapper = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(2),
	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
	},
}));

export const StyledSwitch = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	display: "flex",
	"&:active": {
		"& .MuiSwitch-thumb": {
			width: 15,
		},
		"& .MuiSwitch-switchBase.Mui-checked": {
			transform: "translateX(9px)",
		},
	},
	"& .MuiSwitch-switchBase": {
		padding: 2,
		"&.Mui-checked": {
			transform: "translateX(12px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor: "rgba(2, 41, 89, 1)",
				...theme.applyStyles("dark", {
					backgroundColor: "#177ddc",
				}),
			},
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
		width: 12,
		height: 12,
		borderRadius: 6,
		transition: theme.transitions.create(["width"], {
			duration: 200,
		}),
	},
	"& .MuiSwitch-track": {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: "rgba(0,0,0,.25)",
		boxSizing: "border-box",
		...theme.applyStyles("dark", {
			backgroundColor: "rgba(255,255,255,.35)",
		}),
	},
}));

export const PeriodSelectorSection = styled(Stack)(({ theme }) => ({
	width: "100%",
	height: theme.spacing(6),
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	gap: theme.spacing(2),
	background: "rgba(248, 249, 255, 1)",
	borderRadius: theme.spacing(1),
}));

interface StyledTypographyProps {
	isChecked: boolean;
}
export const StyledTypography = styled(Typography)<StyledTypographyProps>(
	({ isChecked }) => ({
		fontSize: 14,
		fontWeight: !isChecked ? "bold" : undefined,
		color: !isChecked ? "rgba(2, 41, 89, 1)" : "rgba(150, 153, 170, 1)",
	})
);
