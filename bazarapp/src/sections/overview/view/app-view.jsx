import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from '../../../components/iconify';
import Box  from '@mui/material/Box';
import Stack from '@mui/material/Stack';


// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Box sx={{ backgroundImage: 'url(../../src/img/blackMarketer.png)', backgroundSize: "cover", backgroundRepeat: "no-repeat"}} width="1" height="1">
      <Typography variant="h4" textAlign="center" color="white">
        I trade in any kind of horse... Whether it’s stolen horses, or even prohibited types... Take a look...
      </Typography>
    </Box>
  );
}
