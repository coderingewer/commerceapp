import React, { useState } from "react";
import "../Pages/Contact.css"
import "./Forms.css"
import close from "../../bars/icons/close.png"
import { useDispatch, useSelector } from "react-redux";
import { LoginAsync } from "../../Redux/FranchiseSlice";

export default function Login() {
    const dispatch = useDispatch()
    const success = useSelector(state=>state.franchise.success)
    const [dealer, setDealer] = useState({Email:"", Password:""})
    const handleClose = (id)=>{
        document.getElementById(id).style.display="none"
    }

    const handleLogin = async (e)=>{
        e.preventDefault()
        await dispatch(LoginAsync(dealer))
    }
    if (success){
      handleClose("loginform")
    } 
    console.log(success)
  return (
    <div id="loginform" className="forms" >
      <div className="formarea">
        <form style={{height:"400px"}} className="contactform">
      <div style={{width:"30px", height:"30px"}} onClick={()=>handleClose('loginform')} className='closemenu' ><img src={close} alt="" /></div>
          <h3 style={{fontSize:"24px"}} >Bayii Girişi</h3>
          <input  onChange={(e)=>setDealer({Email:e.target.value, Password:dealer.Password})} type="email" placeholder="E-posta adresi" />
          <input  onChange={(e)=>setDealer({Email:dealer.Email, Password:e.target.value})} type="password" placeholder="Şifre" />
          <button onClick={(e)=>handleLogin(e)} className="formbtn">Giriş</button>
        </form>
      </div>
    </div>
  );
}
