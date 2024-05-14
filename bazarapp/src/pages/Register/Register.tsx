import * as React from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../models/User";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){
  const [formData, setFormData]=useState();
  const [info, setInfo]=useState();
  const navigate = useNavigate();

  const handleChange = (e)=>{
      setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleImageChange = (e)=>{
      setFormData({...formData, imgFile: e.target.files[0]})
  }

  const submit =async (e)=>{
      e.preventDefault();
      console.log(e)
      const formDataToSend = new FormData();
      for (const [key, value] of Object.entries(formData)) {
          formDataToSend.append(key,value);
      }
      const upload = await postUpload(formDataToSend);
      if (upload.status===201) return navigate("/");
  }
  
  return(
    <>
      <h1>Registrovat</h1>
      <form encType="multipart/form-data">
        <input type="text" name="imgName" placeholder="Input a name" onChange={handleChange} />
        <input type="file" name="imgFile" onChange={handleImageChange} />
        <input type="submit" value={"submit"} onClick={submit} />
      </form>
      <p>{info}</p>
    </>
  )
}