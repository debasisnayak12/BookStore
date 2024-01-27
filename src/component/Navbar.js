import React from "react";
import logo from "../Assets/logo.png";
import bookheart from "../Assets/bx_bx-book-heart.png";
import notification from "../Assets/ic_round-notifications-none.png";
import regular from "../Assets/fluent_premium-person-20-regular.png";
import profile from "../Assets/profile.png";

const Navbar = () => {


    return (
      <div className="main">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>
            KeazoN<span>BOOKS</span>
          </p>
        </div>
        <div className="searchBar">
          <div className="inputArea">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            />
          </div>
          <button>search</button>
        </div>
        <div className="profiles">
          <img src={bookheart} alt="bookheart" />
          <img src={notification} alt="notification" />
          <img src={regular} alt="regular" />
          <img src={profile} alt="profile" />
        </div>
      </div>
    );

}

export default Navbar;