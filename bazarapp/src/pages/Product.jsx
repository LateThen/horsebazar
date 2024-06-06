// Product.jsx
import React from 'react';
import { getUpload, deleteUpload } from "../models/Horse"
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import SettingsIcon from "@mui/icons-material/Settings"



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
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, id)
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
  const deletePost = async () => {
    try {
      if (!productData || formData.password !== productData.password) {
        setInfo("Incorrect password or product data not loaded");
        return;
      }
  
      const deleted = await deleteUpload(id, formData);
      if (!deleted || deleted.status !== 200) {
        setInfo("Error deleting post");
        navigate('/products');
        return;
      
      }

  
      
    } catch (error) {
      console.error('Error deleting post:', error);
      setInfo("Error deleting post");
    }
  };
  const editPost = async () => {
      if (formData.password == productData.password) {
        setInfo("Incorrect password or product data not loaded");
        navigate('updateproduct');
        return;
      
    } 

  }
  

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
    <div>
      <h1>Název inzerátu: {productData.postname}</h1>
      <h1>Popisek: {productData.description}</h1>
      <h1>Jméno přidavatele inzerátu: {productData.name}</h1>
      <h1>Telefon: {productData.phonenumber}</h1>
      <h1>Lokace: {productData.location}</h1>
      <h1>Cena: {productData.price}</h1>
      <h1>Kategorie : {productData.category}</h1>
      //tlacitko na smazani postu zde fr
      <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            width: "40%",
          }}
          className="article-img"
          src={productData.photo}
          alt={productData.postname}
          title={productData.postname}
        />
    
          <p className="control has-icons-left formInput">
                <input placeholder="Zadejte heslo pro úpravu/odstranění" name="password" type="password" className="input" onChange={(e) => handleChange(e)}/>
            </p>
            <button
          style={{ color: "#a31bf1", marginTop: "3rem", marginBottom: '3rem' }}
          className="button"
          onClick={deletePost}
          
        >
          Odstranit
        </button>
        <button
          style={{ color: "#a31bf1", marginTop: "3rem", marginBottom: '3rem' }}
          className="button"
          onClick={editPost}
          
        >
          Upravit
        </button>
    </div>
  );
}
}
export default Product;
