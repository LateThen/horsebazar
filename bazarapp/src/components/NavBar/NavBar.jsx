import MainPage from "../../pages/MainPage/MainPage";
import CreatePost from "../../pages/CreatePost/CreatePost";
import MyPosts from "../../pages/MyPosts/MyPosts";
import { memo } from "react";
import "./NavBar.css";
import 'bulma/css/bulma.css'

export const NavBar = memo(function NavBar(props = {}) {
  return (
    <>
    <div className="has-background-grey-darker is-flex p-5">
      <div className="navbar-imageLogo">
        <div className="navbar-title p-3">
          THE HORSE BLACK MARKET
        </div>
      </div>
 
        <button className="button is-large is-responsive has-background-grey-dark ml-5 has-text-white-ter is-size-3">
          Inzeráty
        </button>

        <button className="button is-large is-responsive has-background-grey-dark ml-5 has-text-white-ter is-size-3">
          Vytvořit inzerát
        </button>

        <button className="button is-large is-responsive has-background-grey-dark ml-5 has-text-white-ter is-size-3">
          Moje inzeráty
        </button>

    </div>
    </>
  );
});
