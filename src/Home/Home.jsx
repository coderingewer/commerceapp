import React from "react";
import NavBar from "../bars/NavBar";
import banner from "./banner.png";
import product from "./product.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="slides">
        <div className="slide">
          <img src={banner} />
        </div>
      </div>

      <div className="productstitle">
        <h1>Ürün Grupları</h1>
        <p>Ürünlerimizi Kefşetmeye Hazır mısınız?</p>
      </div>

      <div className="explore">
        <div className="cart">
          <div className="cartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="cart">
          <div className="cartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="cart">
          <div className="cartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="cart">
          <div className="cartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="cart">
          <div className="cartdetails">
            <p>Ürünlerimiz</p>
            <h1>Bahçe Mobilyası</h1>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="cart">
          <div className="cartdetails">
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
      <div className="addinhome">
        <div className="addbody">
          <h1>Dünya Markası Olma Yolunda</h1>
          <p>
            Türkiye'nin nadir yerli üretim bahçe mobilyaları imalatı yapan
            firmalarından biri olmaktan gurur duyuyoruz.Her gün yenilenen ürün
            portöyümüz ve değişime açık dinamik yapımız sayesinde hızla büyüyor
            ve bir dünya markası olma yolunda ilerliyoruz.Siz de bu değere ortak
            olmak için yolculuğumuza katılın...
          </p>
          <a>DAHA FAZLA</a>
        </div>
        <div className="images">
          <div className="imagescover">
            <div className="imgsbody">
              <div className="bigimgbody">
                <div
                  style={{
                    height: "10%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
                <div className="bigimg">sdfg</div>
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
              <a>HEMEN İNCELE</a>
            </div>
          </div>

          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
              <a>HEMEN İNCELE</a>
            </div>
          </div>

          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
              <a>HEMEN İNCELE</a>
            </div>
          </div>
          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
              <a>HEMEN İNCELE</a>
            </div>
          </div>
          <div className="referance">
            <div className="referancecover">
              <h1>Kapadokya Otel</h1>
              <a>HEMEN İNCELE</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default Home;
