import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  lighter: '#4E4E4E',
  light: '#4E4E4E',
  main: '#3C3C3C',
  dark: '#2D2D2D',
  darker: '#2D2D2D',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#FFB983',
  light: '#FFB983',
  main: '#FF9E54',
  dark: '#A9632E',
  darker: '#A9632E',
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(secondary.main, 0.08),
  selected: alpha(secondary.light, 0.16),
  disabled: alpha(secondary.dark, 0.8),
  disabledBackground: alpha(primary.dark, 0.24),
  focus: alpha(secondary.light, 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(primary.light, 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'dark',
    text: {
      primary: grey[0],
      secondary: secondary.main,
      disabled: secondary.dark,
    },
    background: {
      paper: primary.light,
      default: primary.dark,
      neutral: primary.main,
    },
    action: {
      ...base.action,
      active: secondary.main,
    },
  };
}
