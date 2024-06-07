
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
      <Typography variant="h2" sx={{textAlign: "center", fontFamily: "Comic Sans MS" }}>
        The Horse Black Market
      </Typography>

      {isLoaded ? (
        uploads.map((upload, index) => <ShopProductCard key={index} {...upload} />)
      ) : (
        <p>Loading...</p>
      )}
        <p style={{ marginLeft: "300px", paddingLeft: "16px" }}>
        </p>
     
    </>
  );

}



























