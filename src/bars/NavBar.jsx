import React from "react";
import "./NavBar.css";
import logo from "../logo.png";
import facebook from "../icons/facebook-f.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import youtube from "../icons/youtube.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bar">
      <div className="topbar">
        <button className="signin">BAYİLİK GİRİŞİ </button>
        <div className="info">Pzt-Cm 9.00-18.00</div>
      </div>
      <div className="navbar">
          <div className="logo">
        <Link className="link" to="/">
            <img src={logo} alt="" />
        </Link>
          </div>
        <div className="navigations">
          <div>
            <Link className="link" to="/">
              Anasayfa
            </Link>
          </div>
          <Link className="link" to="/getknowus">
            <div>Bizi Tanıyın</div>
          </Link>
          <Link className="link" to="/products">
            <div>Ürünlerimiz</div>
          </Link>
          <Link className="link" to="/projects">
            <div>Projelerimiz</div>
          </Link>
          <Link className="link" to="/contact">
            <div>İletişim</div>
          </Link>
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
