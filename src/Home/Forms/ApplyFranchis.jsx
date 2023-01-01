import React, { useState } from "react";
import "../Pages/Contact.css";
import "./Forms.css";
import close from "../../bars/icons/close.png";
import { useDispatch, useSelector } from "react-redux";
import { ApplyAsync } from "../../Redux/FranchiseSlice";

export default function ApplyFranchise() {
  const dispatch = useDispatch();
  const success = useSelector(state=>state.franchise.success)
  const [dealer, setDealer] = useState({
    DealerName: "",
    Email: ""
  });
  const handleClose = (id) => {
    document.getElementById(id).style.display = "none";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(ApplyAsync(dealer));
  };
  if (success){
    handleClose("applyform")
  } 
  console.log(dealer);
  return (
    <div id="applyform" className="forms">
      <div className="formarea">
        <form style={{ height: "400px" }} className="contactform">
          <div
            style={{ width: "30px", height: "30px" }}
            onClick={() => handleClose("applyform")}
            className="closemenu"
          >
            <img src={close} alt="" />
          </div>
          <h3 style={{ fontSize: "24px" }}>Bayiilik Başvurusu</h3>
          <input
            onChange={(e) =>
              setDealer({
                DealerName: e.target.value,
                Email: dealer.Email,
              })
            }
            type="text"
            placeholder="Bayii Adınız"
          />
          <input
            onChange={(e) =>
              setDealer({
                DealerName: dealer.DealerName,
                Email: e.target.value,
              })
            }
            type="email"
            placeholder="E-posta adresi"
          />
          <button onClick={(e) => handleLogin(e)} className="formbtn">
            Başvur
          </button>
        </form>
      </div>
    </div>
  );
}
