import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from '../../routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logoUrl = '../../src/img/logo.png';

  const logo = (
    <Box width="1" justifyContent="center" display="flex">
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 170,
        height: 160,
        ...sx,
      }}
      {...other}
    >
      <img src={logoUrl} alt="logo.jsx" style={{ width: '100%', height: '100%' }} />
    </Box>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

Logo.displayName = 'MyComponent';
export default Logo;
