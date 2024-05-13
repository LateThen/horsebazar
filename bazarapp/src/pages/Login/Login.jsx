import "Login.css"
import {Link} from "react-router-dom"
export default function Login(){
    return(
        <>
        
        <div><input type="text" placeholder="E-mail"/></div>
        <div><input type="text" placeholder="Heslo"/></div>
        <button>Login</button>
        <Link to="/register">
            Don't have an account? Register now!
        </Link>
        </>
    )
}
/*Přidat logiku pro prihlaseni */
/*Přidat background img*/
/*Přidat ten div z navbaru*/