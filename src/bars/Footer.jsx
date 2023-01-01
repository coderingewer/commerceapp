import React from "react";
import "./Footer.css";
import logo from "../logo.png";
import location from "./icons/location.png";
import phone from "./icons/phone.png";
import email from "./icons/email.png";
import arrow from "./icons/arrow.png";
import { Link } from "react-router-dom";

function Footer() {
  const handleOpen = (id) => {
    document.getElementById(id).style.display = "flex";
  };
  return (
    <>
      <footer className="footer">
        <div className="footertop">
          <h1>
            Hizmetlerimiz ile ilgili tüm sorularınızı yanıtlamaya her zaman
            hazırız.
          </h1>
          <div className="footertopbtns">
            <button style={{ backgroundColor: "white" }} href="">
              bizi arayın
            </button>
            <button onClick={() => handleOpen("applyform")} href="">
              Bayilik
            </button>
          </div>
        </div>
        <div className="footeritems">
          <div className="footeritm">
            <img className="footermtlogo" src={logo} alt="" />
            <p className="aboutinfooter">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="footeritm">
            <div className="footeritmtitle">
              <h1>Kurumsal</h1>
            </div>
            <div className="footerlinks">
              <div className="linkinfoooter">
                {" "}
                <img src={location} />
                <p>Deneme Mah. Enes Sok. No:9 Sancaktepe / İstanbul</p>
              </div>
              <div className="linkinfoooter">
                {" "}
                <img src={phone} />
                <p>+9055555555</p>
              </div>
              <div className="linkinfoooter">
                {" "}
                <img src={email} />
                <p>mail@mail.com</p>
              </div>
            </div>
          </div>
            <div className="footeritm">
              <div className="footeritmtitle">
                <h1>Kurumsal</h1>
              </div>
              <div className="footerlinks">
                <div className="linkinfoooter">
                  {" "}
                  <img src={arrow} />
                  <p>Vizyonumuz</p>
                </div>
                <div className="linkinfoooter">
                  {" "}
                  <img src={arrow} />
                  <p>Gizilik Politikası</p>
                </div>
                <div className="linkinfoooter">
                  {" "}
                  <img src={arrow} />
                  <p>Üyelik Sözleşmesi</p>
                </div>
                <div className="linkinfoooter">
                  {" "}
                  <img src={arrow} />
                  <p>Mutlu Müşteriler</p>
                </div>
              </div>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
