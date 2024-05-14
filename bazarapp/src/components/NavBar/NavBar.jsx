import MainPage from "../../pages/MainPage/MainPage";
import CreatePost from "../../pages/CreatePost/CreatePost";
import MyPosts from "../../pages/MyPosts/MyPosts";
import { memo } from "react";
import "./NavBar.css";

export const NavBar = memo(function NavBar(props = {}) {
  return (
    <>
      <div className="navbar">
      <div className="navbar-imageLogo">
        <div className="navbar-title">
          THE HORSE BLACK MARKET
        </div>
        </div>
        <button className="navbar-buttonPosts">
          <div className="navbar-posts">Inzeráty</div>
        </button>
        <button className="navbar-buttonCreatePosts">
          <div className="navbar-createPosts">Vytvořit inzerát</div>
        </button>
        <button className="navbar-buttonMyPosts">
          <div className="navbar-myPosts">Moje inzeráty</div>
        </button>
      </div>
    </>
  );
});
