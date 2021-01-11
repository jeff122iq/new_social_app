import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import MyPage from "../MyPage/MyPage";
import Messages from "../Messages/Messages";
import Friends from "../Friends/Friends";
import Posts from "../Posts/Posts";
import Settings from "../Settings/Settings";

const IsAuth = () => {
  return (
    <div className="isAuth">
      <NavBar />
      <Route path="/is_auth/my_page" component={MyPage} exact />
      <Route path="/is_auth/messages" component={Messages} exact />
      <Route path="/is_auth/friends" component={Friends} exact />
      <Route path="/is_auth/posts" component={Posts} exact />
      <Route path="/is_auth/settings" component={Settings} exact />
    </div>
  );
};

export default IsAuth;
