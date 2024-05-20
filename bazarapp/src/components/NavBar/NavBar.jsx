import MainPage from "../../pages/MainPage/MainPage";
import CreatePost from "../../pages/CreatePost/CreatePost";
import MyPosts from "../../pages/MyPosts/MyPosts";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "bulma/css/bulma.css";

export const NavBar = memo(function NavBar(props = {}) {
  return (
    <>
      <div className="navbar-all is-flex p-5">
        <div className="navbar-title-image-wrap">
          <img src="../../src/img/logoImage.png" className="navbar-imageLogo" />
          <div className="navbar-title p-3">THE HORSE BLACK MARKET</div>
        </div>

        <div className="button-navbar-wrap">
          <button className="button-navbar is-responsive">
            <Link className="has-text-white-ter" to={"/"}>
              Inzeráty
            </Link>
          </button>

          <button className="button-navbar is-responsive">
            <Link className="has-text-white-ter" to={"/createpost"}>
              Vytvořit inzerát
            </Link>
          </button>

          <button className="button-navbar is-responsive">
            <Link className="has-text-white-ter" to={"/myposts"}>
              Moje inzeráty
            </Link>
          </button>

        </div>
      </div>
    </>
  );
});
