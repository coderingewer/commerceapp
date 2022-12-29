import React from "react";
import "./NavBar.css"
import logo from "../logo.png"
import facebook from "../icons/facebook-f.svg"
import instagram from "../icons/instagram.svg"
import twitter from "../icons/twitter.svg"
import youtube from "../icons/youtube.svg"

function NavBar() {
  return (
    <div className="bar">
      <div className="topbar">
        <button className="signin">BAYİLİK GİRİŞİ </button>
        <div className="info">Pzt-Cm 9.00-18.00</div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigations">
          <div>Anasayfa</div>
          <div>Bizi Tanıyın</div>
          <div>Ürünlerimiz</div>
          <div>Projelerimiz</div>
          <div>İletişim</div>

        </div>
        <div className="contact">
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
          <img src={youtube} />

        </div>
      </div>
    </div>
  );
}

export default NavBar;
