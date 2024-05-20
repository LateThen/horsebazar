import { NavBar } from "../../components/NavBar/NavBar"
import "./CreatePost.css"

export default function CreatePost(){
    return(
        <>
        <NavBar/>
        <div className="saska-ad">Ever feel lonely? Do you have no one to talk to? Check out the saskadate.com site to find baddies in your area.</div>
        <div className="is-flex is-flex-direction-column createpost-data">
            <input type="text" className="createpost-username" placeholder="Jméno" required/>
            <input type="tel" className="createpost-userphone" placeholder="Telefon" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            <input type="text" className="createpost-useraddress" placeholder="Adresa" required/>
            <input type="number" className="createpost-postcost" placeholder="Cena" min="0" max="10000" step="1" required/>
        </div>
        <div className="createpost-descriptionbox is-flex">
            <input type="text" className="createpost-description" placeholder="Poopis" required/>
        </div>
        <div>
            <input type="text" className="createpost-postname" placeholder="Název inzerátu" required/>
        </div>
        <input type="submit" className="createpost-button" value={"Vytvořit inzerát"} required/>
        <img src="../../src/img/logoImage.png" alt="" className="createpost-postimage"/>
        </>
    )
}