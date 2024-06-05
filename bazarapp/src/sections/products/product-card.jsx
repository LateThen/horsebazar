import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as ReactLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fCurrency } from '../../utils/format-number';
import { ColorPreview } from '../../components/color-utils';
import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------



export default function ShopProductCard( props ) {
  const [url, seturl] = useState();
  const renderImg = (
    <Box
      component="img"
      alt={props.postname}
      src={props.photo}
      sx={{
        top: 0,
        width: 0.3,
        height: 1,
        right: 0,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  )
  useEffect(() => {
    seturl(`http://localhost:3000/horse/${props.id}`);
  }, []);
  return(
   <>
   <br />
    <Card>
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        
      }}
    >
      <Box
        sx={{
          pl: 1,
          pt: 1,
          flexGrow: 1,
        }}
      >
        <Stack
          spacing={2}
          sx={{ pl: 2, textAlign: { xs: "center", md: "left" } }}
        >
          <Link color="inherit" variant="subtitle2" noWrap underline="hover">
            {props.name}
           
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
 
            {props.price} Kč
       
          </Stack>
        </Stack>
        <Stack
          sx={{
            p: 2,
            textAlign: { xs: "center", md: "left" },
            justifyContent: "center",
          }}
        >
          <Typography sx={{ textOverflow: "ellipsis", overflow: "hidden", textWrap: {md: "nowrap", sm: "wrap"}, maxWidth: {xs: "350px", sm: "600px"}, maxHeight: "100px" }}>
            {props.description}
          </Typography>
        </Stack>
      </Box>

      <Box
        component={ReactLink}
        to={url}
        sx={{
          order: { xs: 0, md: 1 },
          flexGrow: 1,
          display: "flex",
          alignSelf: "stretch",
          alignItems: "center",
          height: { xs: "auto", md: "20vh" },  
        }}
      >
        {renderImg}
      </Box>
    </Stack>
  </Card>
  </>
  )
 
}


