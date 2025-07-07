import "@mui/material/styles";
import "@mui/material/Button";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
	interface Color {
		450?: string;
		950?: string;
	}

	interface PaletteOptions {
		orange?: ColorPartial;
		red?: ColorPartial;
		purple?: ColorPartial;
		blue?: ColorPartial;
	}

	interface PaletteColor {
		darkest?: string;
		lightest?: string;
		[key: number]: string;
	}

	interface PaletteColorOptions {
		darkest?: string;
		dark?: string;
		main?: string;
		light?: string;
		lightest?: string;
		contrastText?: string;
	}

	// 3. Extend the Palette interface to include your custom 'additional' color
	interface Palette {
		additional: PaletteColor;
		orange: ColorPartial;
		red: ColorPartial;
		purple: ColorPartial;
		blue: ColorPartial;
	}

	// 4. Extend the PaletteOptions interface to allow 'additional' during theme creation
	interface PaletteOptions {
		additional?: PaletteColorOptions;
	}
}

// 5. Extend the ButtonPropsVariantOverrides interface to include your custom button variants
declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		primaryButton: true;
		secondaryButton: true;
		additionalButton: true;
	}
}
