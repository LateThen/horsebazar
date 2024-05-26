import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
      ██████████▀▀▀▀▀▀▀▀▀▀▀▀▀██████████
█████▀▀░░░░░░░░░░░░░░░░░░░▀▀█████
███▀░░░░░░░░░░░░░░░░░░░░░░░░░▀███
██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
█░░░░░░▄▄▄▄▄▄░░░░░░░░▄▄▄▄▄▄░░░░░█
█░░░▄██▀░░░▀██░░░░░░██▀░░░▀██▄░░█
█░░░██▄░░▀░░▄█░░░░░░█▄░░▀░░▄██░░█
██░░░▀▀█▄▄▄██░░░██░░░██▄▄▄█▀▀░░██
███░░░░░░▄▄▀░░░████░░░▀▄▄░░░░░███
██░░░░░█▄░░░░░░▀▀▀▀░░░░░░░█▄░░░██
██░░░▀▀█░█▀▄▄▄▄▄▄▄▄▄▄▄▄▄▀██▀▀░░██
███░░░░░▀█▄░░█░░█░░░█░░█▄▀░░░░███
████▄░░░░░░▀▀█▄▄█▄▄▄█▄▀▀░░░░▄████
███████▄▄▄▄░░░░░░░░░░░░▄▄▄███████
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
      
        </Grid>

        <Grid xs={12} sm={6} md={3}>
  
        </Grid>

        <Grid xs={12} sm={6} md={3}>
  
        </Grid>

        <Grid xs={12} sm={6} md={3}>
   
        </Grid>

        <Grid xs={12} md={6} lg={8}>

        
        </Grid>

        <Grid xs={12} md={6} lg={4}>
    
        
        </Grid>

        <Grid xs={12} md={6} lg={8}>
        
    
        
        </Grid>

        <Grid xs={12} md={6} lg={4}>
      
        
    
        </Grid>

        <Grid xs={12} md={6} lg={8}>
         
     
        
        </Grid>

        <Grid xs={12} md={6} lg={4}>
        
       
        
        </Grid>

        <Grid xs={12} md={6} lg={4}>
      
      
        </Grid>

        <Grid xs={12} md={6} lg={8}>
      
            
     
        </Grid>
      </Grid>
    </Container>
  );
}
