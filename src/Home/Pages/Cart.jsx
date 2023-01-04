import React from "react";

import "./Cart.css";
import marka from "../images/marka.png";
import delicon from "../images/delete.svg";
import NavBar from "../../bars/NavBar";
import Footer from "../../bars/Footer";

function Cart() {
  return (
    <div>
      <NavBar />
      <div className="neworder">
        <div className="orders">
          <div className="order">
            <button className="delbtn">
              <img src={delicon} /> Sil
            </button>
            <div className="orderimg">
              <img src={marka} />
            </div>
            <div className="orderdetails">
              <h1>Urün adı</h1>
              <p>180x200</p>
              <h2>1500TL</h2>
            </div>
          </div>
          <div className="order">
            <button className="delbtn">
              <img src={delicon} /> Sil
            </button>
            <div className="orderimg">
              <img src={marka} />
            </div>
            <div className="orderdetails">
              <h1>Urün adı</h1>
              <p>180x200</p>
              <h2>1500TL</h2>
            </div>
          </div>
          <div className="order">
            <button className="delbtn">
              <img src={delicon} /> Sil
            </button>
            <div className="orderimg">
              <img src={marka} />
            </div>
            <div className="orderdetails">
              <h1>Urün adı</h1>
              <p>180x200</p>
              <h2>1500TL</h2>
            </div>
          </div>
          <div className="order">
            <button className="delbtn">
              <img src={delicon} /> Sil
            </button>
            <div className="orderimg">
              <img src={marka} />
            </div>
            <div className="orderdetails">
              <h1>Urün adı</h1>
              <p>180x200</p>
              <h2>1500TL</h2>
            </div>
          </div>
        </div>
        <div className="applyorder">
          <div className="orderamount" style={{display:"flex", alignItems:"center"}} >
            <p>Toplam:</p>
            <p style={{fontWeight:"bold"}}>7500TL</p>
          </div>
          <button className="cartbtn"> SATIN AL</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
