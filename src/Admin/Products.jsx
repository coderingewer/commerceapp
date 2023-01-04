import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Adminpage.css";
import ProductForm from "./ProductForm";
import ProductImages from "./ProductImages";

function Products() {
  return (
    <>
      <div className="adminpage">
        <div className="pagebar">
          <div>
            <p>Mevcüt İstekler</p>
          </div>
          <div>
            <p>Ürün Ekle</p>
          </div>
        </div>
        <div className="pagecontent">
          <div className="contentrow">
            <div className="contentbar">
              <div className="contentbaritem">
                <p>Ürün Modeli</p>
              </div>
              <div className="contentbaritem">
                <p>Görsel EKle</p>
              </div>
              <div className="contentbaritem">
                <p>Sil</p>
              </div>
            </div>
            <div className="contentcards">
              <div className="contentcard">
                <div className="contentcarditem">
                  <p>Bahçe Sandalyesi</p>
                </div>
                <div className="contentcarditem">
                    <Link className="link" to = "/admin/product/images/id">

                  <p>mailimbuu@gmail.com</p>
                    </Link>
                </div>
                <div className="contentcarditem">
                  {" "}
                  <input type="checkbox" name="IsMale" value="false" />
                </div>
              </div>
              <div className="contentcard">
                <div className="contentcarditem">
                  <p>Bahçe Sandalyesi</p>
                </div>
                <div className="contentcarditem">
                  <p>mailimbuu@gmail.com</p>
                </div>
                <div className="contentcarditem">
                  {" "}
                  <input type="checkbox" name="IsMale" value="false" />
                </div>
              </div>
              <div className="contentcard">
                <div className="contentcarditem">
                  <p>Bahçe Sandalyesi</p>
                </div>
                <div className="contentcarditem">
                  <p>mailimbuu@gmail.com</p>
                </div>
                <div className="contentcarditem">
                  {" "}
                  <input type="checkbox" name="IsMale" value="false" />
                </div>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<ProductForm />} />
            <Route path="/images/id" element={<ProductImages />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Products;
