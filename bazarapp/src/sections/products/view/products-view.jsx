import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { getUploads } from "../../../models/Horse"
import ShopProductCard from "../product-card";

/*import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';*/

// ----------------------------------------------------------------------

export default function ProductsView() {
  const [uploads, setUploads] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getUploads();
    if (data.status === 200) {
      setUploads(data.payload);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };
  useEffect(() => {
    load();
  }, []);
  if (isLoaded === null) {
    return (
      <>
        <h1>No posts made</h1>
      </>
    );
  }
  return (
    <>
      
      <h1>Horses</h1>
      {isLoaded ? (
        uploads.map((upload, index) => <ShopProductCard key={index} {...upload} />)
      ) : (
        <p>Loading</p>
      )}
        <p style={{ marginLeft: "300px", paddingLeft: "16px" }}>
        </p>
        <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}>
    </Stack>
    
        
     
    </>
  );

































/*  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Posts
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={12}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );*/
}
