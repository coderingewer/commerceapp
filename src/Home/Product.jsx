import React from "react";
import Footer from "../bars/Footer";
import NavBar from "../bars/NavBar";
import "./Home.css";
import "./Projects.css";
import marka from "./marka.png"

function Product() {
  return (
    <div>
      <NavBar />
      <div className="pagebanner">
        <div className="bannercover">
          <div>
            <p>ÜRÜNLERİMZ</p>
            <h1>BAHÇE MASA TAKIMI</h1>
          </div>
        </div>
      </div>
      <div></div>
      <div className="card">
        <div className="images">
          <div className="imagescover">
            <div className="imgsbody">
              <div
                style={{
                  height: "100%",
                  width: "50px",
                  backgroundColor: "white",
                }}
              ></div>
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
                  width: "21px",
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
            </div>
          </div>
        </div>
        <div className="cardbody">
          <h1> Lorem Ipsum is simply dummy </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <h2>STOK: IRM01</h2>
          <a>BİZE ULAŞIN</a>
          <div className="cardimages" >
                  <img src={marka}/>
                  <img src={marka} />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cardbody">
          <h1>Cappadocia Cave Lodge</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <h2>STOK: IRM01</h2>
          <a>BİZE ULAŞIN</a>
          <div className="cardimages" >
                  <img src={marka}/>
                  <img src={marka} />
          </div>
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
      <div className="card">
        <div className="images">
          <div className="imagescover">
            <div className="imgsbody">
              <div
                style={{
                  height: "100%",
                  width: "50px",
                  backgroundColor: "white",
                }}
              ></div>
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
                  width: "21px",
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
            </div>
          </div>
        </div>
        <div className="cardbody">
          <h1> Lorem Ipsum is simply dummy </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <h2>STOK: IRM01</h2>
          <a>BİZE ULAŞIN</a>
          <div className="cardimages" >
                  <img src={marka}/>
                  <img src={marka} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
