import React, { useEffect } from "react";
import "../Home.css";
import "./Projects.css";
import marka from "../images/marka.png";
import NavBar from "../../bars/NavBar";
import Footer from "../../bars/Footer";
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
        <div className="bannercover">
          <div>
            <p>ÜRÜNLERİMZ</p>
            <h1>BAHÇE MASA TAKIMI</h1>
          </div>
        </div>
      </div>
      {products.map((product, i) =>
        i % 2 === 0 ? (
          <div key={product.ID} className="card">
            <div className="images">
              <div className="imagescover">
                <img
                  src={
                    product.Images.length > 0 ? product.Images[0].Image.Url : marka
                  }
                />
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
              <h1>{product.ModelName} </h1>
              <p>{product.Detail}</p>
              <h2>STOK: {product.Code}</h2>
              <a>BİZE ULAŞIN </a>
              {product.Images.length > 3 && (
                <div className="cardimages">
                  <img src={product.Images[1].Image.Url} />
                  <img src={product.Images[2].Image.Url} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="cardbody">
              <h1>{product.ModelName}</h1>
              <p>{product.Detail}</p>
              <h2>STOK: {product.Code}</h2>
              <a>BİZE ULAŞIN</a>
              {product.Images.length > 0 && (
                <div className="cardimages">
                  <img src={product.Images[0].Image.Url} />
                  <img src={product.Images[1].Image.Url} />
                </div>
              )}
            </div>
            <div className="images">
              <div className="imagescover">
                <img
                  src={
                    product.Images.length > 0 ? product.Images[0].Image.Url : marka
                  }/>
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
        )
      )}
      <Footer />
    </div>
  );
}

export default Product;
