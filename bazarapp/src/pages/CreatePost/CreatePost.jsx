import { NavBar } from "../../components/NavBar/NavBar"
import "./CreatePost.css"

export default function CreatePost(){
    return(
        <>
        <NavBar/>
        <div className="createpost is-flex">
            <div className="createpost-saskadd2">
                <button className="delete is-large popup-btn"></button>
                Ever feel lonely? Do you have no one to talk to? Check out the saskadate.com site to find baddies in your area.
            </div>

        <div className="createpost-first-column is-flex is-flex-direction-column">
            <div className="is-flex is-flex-direction-column createpost-data">
                <input type="text" className="createpost-username" placeholder="Jméno" maxLength={"50"} required/>
                <input type="tel" className="createpost-userphone" placeholder="Telefon 123-456-789" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" maxLength={"11"} required/>
                <input type="text" className="createpost-useraddress" placeholder="Adresa" maxLength={"100"} required/>
                <input type="number" className="createpost-postcost" placeholder="Cena" min="0" max="99999" step="1" required/>
            </div>

            <div className="createpost-descriptionbox is-flex">
                <input type="text" className="createpost-description" placeholder="Poopis" required/>
            </div>
            
            <input type="submit" className="createpost-button" value={"Vytvořit inzerát"} required/>
        </div>

        <div className="is-flex is-flex-direction-column">

        <form action="/action_page.php" className="uploadFile">
            <input type="file" className="chooseFileInput" name="filename"/>
            <input type="submit"/>
        </form>

            <div>
                <input type="text" className="createpost-postname" placeholder="Název inzerátu" required/>
            </div>
        </div>
            
        </div>
        </>
    )
}