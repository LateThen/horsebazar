import { NavBar } from "../../components/NavBar/NavBar"
import "./MainPage.css"

export default function MainPage(){
    return(
        <>
        <NavBar/>
        <div className="is-flex has-background-grey-dark has-text-white-ter mt-5 box">
            <div className="ml-5">Name</div>
            <div className="ml-5">Cost</div>
            <img src="../../src/img/logOImage.png" alt="" className="ml-5"/>
        </div>
        </>
    )
}