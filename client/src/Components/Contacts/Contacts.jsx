import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Contacts:</h1>
      <h2>write very beautifull website for you!</h2>

      <ul>
        <div className="link">
          <i className="fab fa-facebook"></i>
          <a href="https://www.facebook.com/profile.php?id=100018492463732">
            Facebook - Богдан Славный
          </a>
        </div>
        <div className="link">
          <i className="fab fa-instagram"></i>
          <a href="https://instagram.com/bogdan_slavniy?igshid=1r7iisxqtyxtc">
            Instagram - @bogdan_slavniy
          </a>
        </div>
        <div className="link">
          <i className="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/богдан-славный-b269ba1b1">
            Linkedin - Bogdan Slavniy
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Contacts;
