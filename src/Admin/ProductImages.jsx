import React from "react";
import "./Adminpage.css";

function ProductImages() {
  const handleClick = (id) => {
    document.getElementById(id).click();
  };
  return (
    <div className="contentrow">
      <div>
        <p>Ürün Görselleri</p>
      </div>
      <div className="productcurrentimages">
        <div className="currentimage">
          <img
            src="https://docs.zebgarden.com/images/upload//cbbfff86f728274cd311814c40f68f0d.png"
            alt=""
          />
        </div>{" "}
        <div className="currentimage">
          <img
            src="https://docs.zebgarden.com/images/upload//cbbfff86f728274cd311814c40f68f0d.png"
            alt=""
          />
        </div>{" "}
        <div className="currentimage">
          <img
            src="https://docs.zebgarden.com/images/upload//cbbfff86f728274cd311814c40f68f0d.png"
            alt=""
          />
        </div>{" "}
        <div className="currentimage">
          <img
            src="https://docs.zebgarden.com/images/upload//cbbfff86f728274cd311814c40f68f0d.png"
            alt=""
          />
        </div>
      </div>
      <div className="contentcards">
        <form className="addproductform">
          <h4>Yeni Görsel Yükle</h4>
          <input id="fileinput" style={{ display: "none" }} type="file" />
          <button
            style={{ backgroundColor: "gray" }}
            onClick={() => handleClick("fileinput")}
          >
            Dosya Seç
          </button>
          <button>Yükle</button>
        </form>
      </div>
    </div>
  );
}

export default ProductImages;
