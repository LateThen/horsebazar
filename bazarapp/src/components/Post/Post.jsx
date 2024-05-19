import "./Post.css";
import "bulma/css/bulma.css";
import {Link} from "react-router-dom"; 

export default function Post() {
  return (
    <>
    <Link to="/seepost" className="mb-3 mt-3 p-0 post-specificpost is-flex">
        <div className="is-flex-grow-2 post-postname">Jméno inzerátu</div>
        <div className="is-flex-grow-2 post-postcost">Cena inzerátu</div>
        <img
          src="../../src/img/SaskaGoblin.png"
          className="is-flex-grow-2 post-postimage"
        />
    </Link>
    </>
  );
}
