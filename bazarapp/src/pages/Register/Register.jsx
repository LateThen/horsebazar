import "./Register.css"
import {Link, useNavigate} from "react-router-dom"
import React, {useState, useEffect} from "react";

export default function Register(){

    return(
        <>
            <div className="is-flex is-flex-direction-row margin-0">
                <img src="../../src/img/bg.png" alt="background image" className="bg p-0 column"/>
                <div className="content p-0 has-text-centered column"> 
                    <img src="../../src/img/logoImage.png" alt="logo" />
                    <form encType="multipart/form-data" className="form is-flex-direction-column is-flex">
                        <input type="text" name="email" placeholder="E-mail"/>
                        <input type="text" name="password" placeholder="Heslo"/>
                        <input type="text" name="passwordConfirm" placeholder="Heslo znovu"/>
                        <input type="submit" value={"login"}/>
                    </form>
                    <Link to="/login">
                    Have an account? Login now!
                    </Link>
                </div>
            </div>
        </>
    )
}
/*Přidat logiku pro registraci */
/*Přidat ten div z navbaru*/