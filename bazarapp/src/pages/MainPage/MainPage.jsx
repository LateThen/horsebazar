//nastyluj to pak vojtechu, pse jeden :3
import "./MainPage.css"
import Post from "../../components/Post/Post"

export default function MainPage(){
    return(
        <>
        <div className="mainpage is-flex-direction-row is-flex">
            <div className="mainpage-saskadd1">11/10 Saska Recommend!</div>
            <div className="is-flex-grow-4 post-containerofposts">
                <Post/>
            </div>
        </div>
        </>
    )
    /*image to be added*/ 
    /*Přidat navbar!*/
}
