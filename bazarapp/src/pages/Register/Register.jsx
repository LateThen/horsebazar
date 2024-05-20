import "./Register.css"
import {Link, useNavigate} from "react-router-dom"
import React, {useState, useEffect} from "react";

export default function Register(){

    return(
        <>
        <img src="../../img/logoImage.png" alt="" />
        <div>
            <p>info</p>
            <form encType="multipart/form-data">
                <input type="text" name="email" placeholder="E-mail"/>
                <input type="text" name="password" placeholder="Heslo"/>
                <input type="text" name="passwordConfirm" placeholder="Heslo znovu"/>
                <input type="submit" value={"login"}/>
            </form>
            <Link to="/login">
            Have an account? Login now!
            </Link>
        </div>
        </>
    )
}
/*Přidat logiku pro registraci */
/*Přidat background img*/
/*Přidat ten div z navbaru*/