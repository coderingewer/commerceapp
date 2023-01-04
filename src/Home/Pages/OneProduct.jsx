import React from "react";
import Footer from "../../bars/Footer";
import NavBar from "../../bars/NavBar";
import producimg from "../images/product.png";
import "./OneProduct.css";
import "./Cart.css";

function OneProduct() {
  return (
    <div>
      <NavBar />
      <div className="product">
        <div className="productimages">
          <div className="productimage">
            <img src={producimg} />
          </div>
          <div className="productimage">
            <img src={producimg} />
          </div>
          <div className="productimage">
            <img src={producimg} />
          </div>
          <div className="productimage">
            <img src={producimg} />
          </div>
          <div className="productimage">
            <img src={producimg} />
          </div>
          <div className="productimage">
            <img src={producimg} />
          </div>
          <div className="productimage">
            <img src={producimg} />
          </div>
        </div>
        <div className="productcontent" >
          <div className="productname"><h1>Armut salıncak</h1></div>
          <div className="productdeskcription">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              massa non magna porttitor blandit mattis a quam. Proin vitae
              ligula bibendum.
            </p>
          </div>
          <div className="productdetails">
          <div className="productdetail">
              <p style={{ fontWeight: "bold" }}>STOK:</p>
              <p>2DFR5A</p>
            </div>
            <div className="productdetail">
              <p style={{ fontWeight: "bold" }}>MİNDER RENKLERİ:</p>
              <p>2DFR5A</p>
            </div>
            <div className="productdetail">
              <p style={{ fontWeight: "bold" }}>ÖRGÜ MODELİ:</p>
              <p>2DFR5A</p>
            </div>
            <div className="productdetail">
              <p style={{ fontWeight: "bold" }}>ADETLER:</p>
              <p>2DFR5A</p>
            </div>
            <div className="productdetail">
              <p style={{ fontWeight: "bold" }}>İÇERİK:</p>
              <p>2DFR5A</p>
            </div>
            <div className="productdetail">
              <p style={{ fontWeight: "bold" }}>RATTAN RENKLERİ:</p>
              <p>2DFR5A</p>
            </div>
          </div>
          <form>
            <div style={{width:"100%", display:"flex", alignItems:"center", gap:"10px"}} >
            <label style={{fontWeight:"bold"}} >Adet:</label>
            <input type="number" min />
            </div>
            <button className="cartbtn">Sepete Ekle</button>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OneProduct;
