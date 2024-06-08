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
import { products } from '../../_mock/products';

// ----------------------------------------------------------------------

export default function ShopProductCard(props) {
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(`http://localhost:5173/horses/${props.id}`);
  }, [props.id]);



  const renderImg = (
    <Box
      component="img"
      alt={props.postname}
      src={props.photo}
      sx={{
        height: "100%",
        maxHeight: "300px",
        minHeight: "200px",
        objectFit: "cover",
        width: {xs: "50%", md: "20%"},
        position: {xs: "none" , md: "absolute"},
        right: "0",
      }}
    />
  );
  return (
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
              <Typography sx={{ textOverflow: "ellipsis", overflow: "hidden", textWrap: { md: "nowrap", sm: "wrap" }, maxWidth: { xs: "350px", sm: "600px" }, maxHeight: "100px" }}>
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
              justifyContent: { xs: "center", md: "flex-end" },
              height: { xs: "auto", md: "20vh" },
              textAlign: "center", 
              paddingBottom: {xs: "20px" ,md: "0px"}
            }}
          >
            {renderImg}
          </Box>
        </Stack>
      </Card>
    </>
  );
}
