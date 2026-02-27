import '@mui/material/styles';
import '@mui/material/Button';

declare module '@mui/material/styles' {
  interface CustomPaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    450?: string;
    500?: string;
    600?: string;
    700?: string;
    950?: string;
  }

  interface Palette {
    orange: CustomPaletteColor;
    red: CustomPaletteColor;
    purple: CustomPaletteColor;
    blue: CustomPaletteColor;
  }

  interface PaletteOptions {
    orange?: CustomPaletteColor;
    red?: CustomPaletteColor;
    purple?: CustomPaletteColor;
    blue?: CustomPaletteColor;
  }
}

// 5. Extend the ButtonPropsVariantOverrides interface to include your custom button variants
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primaryButton: true;
    secondaryButton: true;
    additionalButton: true;
  }
}
