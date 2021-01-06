import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <Link to="/is_auth/my_page">My_Page</Link>
        <Link to="/is_auth/messages">Messages</Link>
        <Link to="/is_auth/posts">Posts</Link>
        <Link to="/is_auth/friends">Friends</Link>
        <Link to="/is_auth/settings">Settings</Link>
      </ul>
      <form action="">
        <button>Logout</button>
      </form>
    </div>
  );
};

export default NavBar;
