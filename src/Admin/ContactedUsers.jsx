import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Adminpage.css";
import AnsweredContacts from "./AnsweredContacts";
import OneContactRequest from "./OneContactRequest";

function ContactedUser() {
  return (
    <div className="adminpage">
      <div className="pagebar">
        <div>
          <p>Bekleyenler</p>
        </div>{" "}
        <div>
          <p>İletişime Geçenler</p>
        </div>
      </div>
      <div className="pagecontent">
        <div className="contentrow">
          <div className="contentbar">
            <div className="contentbaritem">
              <p>İsim</p>
            </div>
            <div className="contentbaritem">
              <p>Email</p>
            </div>{" "}
            <div className="contentbaritem">
              <p>Cevaplandı</p>
            </div>
          </div>
          <div className="contentcards">
            <div className="contentcard">
              <div className="contentcarditem">
                <Link to="/admin/contact/getcontent/id">
                  <p>Ahmet Sönmez</p>
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
                <p>Ahmet Sönmez</p>
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
                <p>Ahmet Sönmez</p>
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
          <Route path="/" element={<AnsweredContacts />} />
          <Route path="/getcontent/id" element={<OneContactRequest />} />
        </Routes>
      </div>
    </div>
  );
}

export default ContactedUser;
