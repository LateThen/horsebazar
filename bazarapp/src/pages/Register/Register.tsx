import "./Register.css"
import {Link, useNavigate} from "react-router-dom"
import React, {useState, useEffect} from "react";

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
        <p>{info}</p>
        <form encType="multipart/form-data">
            <input type="text" name="imgName" placeholder="Input a name" onChange={handleChange} />
            <input type="file" name="imgFile" onChange={handleImageChange} />
            <input type="submit" value={"submit"} onClick={submit} />
        </form>
        <button>Login</button>
        <Link to="/login">
           Have an account? Login now!
        </Link>
        </>
    )
}
/*Přidat logiku pro registraci */
/*Přidat background img*/
/*Přidat ten div z navbaru*/