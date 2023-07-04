import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>Our top priority is ensuring high quality</p>

        <p>Copyrights 2023 &copy; Gaurav Gupta</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/this.is_gaurav.gupta/">Instagram</a>
        <a href="https://www.linkedin.com/in/gupta4gaurav/">LinkedIn</a>
        <a href="https://www.facebook.com/Gourav.Indian/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
