import React from "react";
import Footer from "../bars/Footer";
import NavBar from "../bars/NavBar";
import "./Contact.css";
import location from "../bars/icons/location.png";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="contactpage">
        <div className="contactformarea">
          <form className="contactform">
            <h3>İSTEK & İLETŞİM FORMU </h3>
            <input type="text" placeholder="İsim ve Soyisim" />
            <input type="text" placeholder="Telefon numararsı" />
            <input type="text" placeholder="E-posta adresi" />
            <textarea type="text" placeholder="Mesaj" />
            <button>GÖNDER</button>
          </form>
        </div>
        <div className="contactsinfo">
          <div className="contactinfoitem">
            <img src={location} alt="" />
            <h1>
              Rahmiye Mah. Çuhane Cad. Beyazgül Sok. No:50/A,Kartepe,KOCAELİ
            </h1>
          </div>
          <div className="contactinfoitem">
            <img src={location} alt="" />
            <h1>
              Rahmiye Mah. Çuhane Cad. Beyazgül Sok. No:50/A,Kartepe,KOCAELİ
            </h1>
          </div>
          <div className="contactinfoitem">
            <img src={location} alt="" />
            <h1>
              Rahmiye Mah. Çuhane Cad. Beyazgül Sok. No:50/A,Kartepe,KOCAELİ
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
