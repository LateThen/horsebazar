import MainPage from "../../pages/MainPage/MainPage";
import CreatePost from "../../pages/CreatePost/CreatePost";
import MyPosts from "../../pages/MyPosts/MyPosts";
import { memo } from "react";
import "./NavBar.css";
import 'bulma/css/bulma.css'

export const NavBar = memo(function NavBar(props = {}) {
  return (
    <>
      <div className="has-background-grey-darker">
      <div className="navbar-imageLogo">
        <div className="navbar-title">
          THE HORSE BLACK MARKET
        </div>
      </div>

        <button className="button is-large is-responsive has-background-grey-dark ml-5">
          <div className="has-text-white-ter">Inzeráty</div>
        </button>

        <button className="button is-large is-responsive has-background-grey-dark ml-5">
          <div className="has-text-white-ter">Vytvořit inzerát</div>
        </button>

        <button className="button is-large is-responsive has-background-grey-dark ml-5">
          <div className="has-text-white-ter">Moje inzeráty</div>
        </button>

    </div>
    </>
  );
});
