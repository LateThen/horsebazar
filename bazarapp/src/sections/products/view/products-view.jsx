import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { getUploads } from "../../../models/Horse"
import ShopProductCard from "../product-card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// ----------------------------------------------------------------------

export default function ProductsView() {
  const [uploads, setUploads] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("No");

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredUploads = uploads.filter(upload => 
    selectedCategory === "No" || upload.category === selectedCategory
  );

  return (
    <>
      <h1>Horses</h1>
      Kategorie:
      <Select value={selectedCategory} onChange={handleCategoryChange}>
        <MenuItem value={"No"}>Žádná specifikace</MenuItem>
        <MenuItem value={"Závodní kůň"}>Závodní kůň</MenuItem>
        <MenuItem value={"Kůň na chov"}>Kůň na chov</MenuItem>
        <MenuItem value={"Kůň ke konzumaci"}>Kůň ke konzumaci</MenuItem>
      </Select>
      {isLoaded ? (
        filteredUploads.map((upload, index) => <ShopProductCard key={index} {...upload} />)
      ) : (
        <p>Loading</p>
      )}
      <p style={{ marginLeft: "300px", paddingLeft: "16px" }}></p>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
      </Stack>
    </>
  );
}














