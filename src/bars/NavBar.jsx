import React from "react";
import "./NavBar.css";
import logo from "../logo.png";
import facebook from "../icons/facebook-f.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import youtube from "../icons/youtube.svg";
import menu from "./icons/menu.png";
import drop from "./icons/down.png";
import { Link } from "react-router-dom";

function NavBar() {
  const loggined = Boolean(localStorage.getItem("franchiselogined"));
  const handleOpen = (id) => {
    document.getElementById(id).style.display = "flex";
  };
  return (
    <div className="bar">
      <div className="topbar">
        {loggined ? (
          <Link style={{ color: "white" }} className="link" to="/cart">
            Sepet
          </Link>
        ) : (
          <button onClick={() => handleOpen("loginform")} className="signin">
            Bayii Girişi{" "}
          </button>
        )}
        <div className="info">Pzt-Cm 9.00-18.00</div>
      </div>
      <div className="navbar">
        <div className="logo">
          <Link className="link" to="/">
           LOGO
          </Link>
        </div>
        <div id="navsinnav">
          <div className="navigations">
            <div>
              <Link className="link" to="/">
                Anasayfa
              </Link>
            </div>
            <div className="dropbtn">
              <Link className="link" to="/getknowus">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>Bizi Tanıyın</div>
                  <div className="dropdown"></div>
                </div>
              </Link>
            </div>
            <Link className="link" to="/products">
              <div>Ürünlerimiz</div>
            </Link>
            <Link className="link" to="/projects">
              <div className="dropbtn">
                Projelerimiz
              </div>
            </Link>
            <Link className="link" to="/contact">
              <div>İletişim</div>
            </Link>
          </div>
        </div>
        <div id="contactinnav">
          <div className="contact">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={youtube} />
          </div>
        </div>
        <button onClick={() => handleOpen("mobilemenu")} className="menubtn">
          <img src={menu} alt="" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
