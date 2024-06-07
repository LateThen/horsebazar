// Product.jsx
import React from 'react';
import { getUpload } from "../models/Horse"
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import SettingsIcon from "@mui/icons-material/Settings"
import DeleteIcon from "@mui/icons-material/Delete"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function Product() {
    const {id} = useParams();
    const [productData, setProductData] = useState();
    const [rightImg, setRightImg] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState('');
    const navigate = useNavigate()


  const load = async () => {
    const data = await getUpload(id);
    console.log(data);
    if (data.status === 200) {
        setProductData(data.payload.post);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };
  /*const deletePost = async () => {
    try {
        const deleted = await deleteUpload(id, formData)
        .catch(err => setInfo(err.response.data.msg))
        if (deleted.status == 200) return navigate(-1)
        
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }*/
  useEffect(() => {
    console.log(id);
    load();
    console.log(productData)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInfo("")
    }, 5000)
    return () => {
      clearTimeout(timeout);
    };
    }, [info]);

if (productData){
    console.log(productData)
  return (
    <Box>
    <div>
      <h1>Název inzerátu: {productData.postname}</h1>
      <h1>Popisek: {productData.description}</h1>

      <Stack direction={{ md: "row", xs: "column" }} spacing={1}>
        <Stack direction="column" spacing={1}>
      <h1>Jméno přidavatele inzerátu: {productData.name}</h1>
      <h1>Telefon: {productData.phonenumber}</h1>
      <h1>Lokace: {productData.location}</h1>
      <h1>Cena: {productData.price}</h1>
      <Box textAlign= {{xs: "center", md: "left"}}>
      <Button
            variant="contained"
            color="secondary"
            startIcon={<SettingsIcon sx={{ fontSize: 16 }} />}
            sx={{ width: { xs: "60%", md: "auto" }, marginRight: { xs: "0px", md: "20px" }, marginBottom: {xs: "10px", md: "0px"} }}
          >
            Upravit inzerát
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              width: { xs: "60%", md: "auto" },
              '&:hover': {
                backgroundColor: "darkred", // Change to a darker red on hover
              },
              marginBottom: {xs: "20px", md: "0px"}
            }}
            startIcon={<DeleteIcon sx={{ fontSize: 16 }} />}
          >
            Odstranit inzerát
      </Button>
      </Box>
        </Stack>
      <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            width: "100%",
            maxWidth: "300px"
          }}
          className="article-img"
          src={productData.photo}
          alt={productData.postname}
          title={productData.postname}
        />
      </Stack>

    </div>
    </Box>
  );
}
}
export default Product;
