import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Adminpage.css";
import DealerApplyContent from "./DealerApplyContent";
import DealerApplyFor from "./DealerApplyFor";
import Dealers from "./Dealers";

function DealersRequests() {
  return (
    <div className="adminpage">
      <div className="pagebar">
        <div>
          <p>Mevcüt İstekler</p>
        </div>{" "}
        <div>
          <p>Onaylananlar</p>
        </div>
      </div>
      <div className="pagecontent">
        <div className="contentrow">
          <div className="contentbar">
            <div className="contentbaritem">
              <p>Bayii Adı</p>
            </div>
            <div className="contentbaritem">
              <p>Email</p>
            </div>{" "}
            <div className="contentbaritem">
              <p>Onayladı</p>
            </div>
          </div>
          <div className="contentcards">
            <div className="contentcard">
              <div className="contentcarditem">
                <Link to="/admin/dealer/activedealer/id" >
                <p>Soft Mobilya</p>
                </Link>
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
                <p>Soft Mobilya</p>
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
                <p>Soft Mobilya</p>
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
        <Route path="/" element={<Dealers />} />
        <Route path="/form/id" element={<DealerApplyContent />} />
        <Route path="/activedealer/id" element={<DealerApplyFor />} />
      </Routes>
      </div>
    </div>
  );
}

export default DealersRequests;
