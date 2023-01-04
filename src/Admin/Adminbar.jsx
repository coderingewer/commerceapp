import React from "react";
import { Link } from "react-router-dom";
import "./Adminbar.css";

function Adminbar() {
  return (
    <div className="adminbar">
      <div className="adminlinks">
        <div className="adminbaritem">
          <Link className="link" to="/admin/ebook">
            E-kitap İstekleri
          </Link>
        </div>
        <div className="adminbaritem">
          <Link className="link" to="/admin/dealer">
            Bayiilik Başvuruları
          </Link>
        </div>
        <div className="adminbaritem">
          <Link className="link" to="/admin/contact">
           İletişime Geçenler
          </Link>
        </div>
        <div className="adminbaritem">
          <Link className="link" to="/admin/product">
            Ürünler
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Adminbar;
