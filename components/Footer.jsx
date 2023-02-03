import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <figure className="footer__wrapper">
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
          className="discord__logo"
          alt=""
        />
        <a href="https://discord.gg/P8hxsbzsKS" target="_blank" className="footer__text">
         Join the Discord server for additional help!
        </a>
      </figure>
    </div>
  );
};

export default Footer;
