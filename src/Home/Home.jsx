import React, { useState } from "react";
import NavBar from "../bars/NavBar";
import banner from "./images/banner.png";
import product from "./images/product.png";
import "./Home.css";
import marka from "./images/marka.png";
import Login from "./Forms/Login";
import Footer from "../bars/Footer";
import ApplyFranchise from "./Forms/ApplyFranchis";

function Home() {
  const [activeItem, setActiveItem] = useState(1);
  const HandleChange = (n) => {
    setActiveItem(n);
  };
  return (
    <div className="home">
      <NavBar />
      <div className="slides">
        <div className={activeItem === 1 ? "slides activeslide" : "slide"}>
          <img src={product} />
        </div>
        <div className={activeItem === 2 ? "slides activeslide" : "slide"}>
          <img src={banner} />
        </div>
        <div className={activeItem === 3 ? "slides activeslide" : "slide"}>
          <img src={product} />
        </div>
        <div className="dots" >
          <button onClick={() => HandleChange(1)}>{activeItem ===1 && 1}</button>
          <button onClick={() => HandleChange(2)}>{activeItem ===2 && 2}</button>
          <button onClick={() => HandleChange(3)}>{activeItem ===3 && 3}</button>
        </div>
      </div>
      <div className="exploretitle">
        <h1>Ürün Grupları</h1>
        <p>Ürünlerimizi Kefşetmeye Hazır mısınız?</p>
      </div>
      <div className="explore">
        <div className="explorecart">
          <div className="explorecartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="explorecart">
          <div className="explorecartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="explorecart">
          <div className="explorecartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="explorecart">
          <div className="explorecartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="explorecart">
          <div className="explorecartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="explorecart">
          <div className="explorecartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
      </div>
      <div className="fuar">
        <div className="fuarcover">
          <h1>Fuar Davetiyenizi Aldınız mı?</h1>
          <p>
            Fuarlarımızı ziyaret etmek için hemen tıklayın ve detaylı bilgi
            alın.
          </p>
          <a className="detailinfo">Detaylı Bilgi </a>
        </div>
      </div>
      <div className="card">
        <div className="cardbody">
          <h1>Dünya Markası Olma Yolunda</h1>
          <p>
            explorecart Türkiye'nin nadir yerli üretim bahçe mobilyaları imalatı
            yapan firmalarından biri olmaktan gurur duyuyoruz.Her gün yenilenen
            ürün portöyümüz ve değişime açık dinamik yapımız sayesinde hızla
            büyüyor ve bir dünya markası olma yolunda ilerliyoruz.Siz de bu
            değere ortak olmak için yolculuğumuza katılın...
          </p>
          <a>DAHA FAZLA</a>
        </div>
        <div className="images">
          <div className="imagescover">
            <img src={marka} alt="" />
            <div className="imgsbody">
              <div className="bigimgbody">
                <div
                  style={{
                    height: "10%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
                <div className="bigimg"></div>
                <div
                  style={{
                    height: "10%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "100%",
                  width: "20px",
                  backgroundColor: "white",
                }}
              ></div>
              <div className="smallimgbody">
                <div
                  style={{
                    height: "20%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
                <div className="smallimg"></div>
                <div
                  style={{
                    height: "10%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50px",
                  backgroundColor: "white",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="references">
        <div className="referancetitle">
          <h1>Referanslarımız</h1>
          <p>Bizimle değerlerine değer katan mutlu müşterilerimiz</p>
        </div>
        <div className="referancescontent">
          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
            </div>
          </div>

          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
            </div>
          </div>

          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
            </div>
          </div>
          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
            </div>
          </div>
          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
