import "Register.css"
import {Link} from "react-router-dom"
export default function Register(){
    return(
        <>
        <div><input type="text" placeholder="E-mail"/></div>
        <div><input type="text" placeholder="Heslo"/></div>
        <div><input type="text" placeholder="Heslo znovu"/></div>
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