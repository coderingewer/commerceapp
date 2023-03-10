import React, { useEffect } from "react";
import "../Home.css";
import "./Projects.css";
import marka from "../images/marka.png";
import NavBar from "../../bars/NavBar";
import Footer from "../../bars/Footer";
import banner from "../images/banner.png"
import { useDispatch, useSelector } from "react-redux";
import { getAllAsync } from "../../Redux/ProductSlice";

function Product() {
  const products = useSelector((state) => state.product.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAsync());
  }, [dispatch]);
  console.log(products);
  return (
    <div>
      <NavBar />
      <div className="pagebanner">
        <img src={banner} alt="" />
        <div className="bannercover">
          <div>
            <p>ÜRÜNLERİMZ</p>
            <h1>BAHÇE MASA TAKIMI</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="images">
          <div className="imagescover">
            <img src={marka}/>
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
        </div>
      </div>
      <div className="card">
          <div className="cardbody">
            <h1>Cappadocia Cave Lodge</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="images">
            <div className="imagescover">
            <img src={marka}/>
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
        <div className="card">
        <div className="images">
          <div className="imagescover">
          <img src={marka}/>
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Product;
