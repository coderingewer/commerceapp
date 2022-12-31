import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"
import facebook from "../icons/facebook-f.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import youtube from "../icons/youtube.svg";
import close from "./icons/close.png"

function Menu() {
    const handleClose = (id)=>{
        document.getElementById(id).style.display="none"
    }
  return (
    <div id='mobilemenu' className='menu' >
        <button onClick={()=>handleClose('mobilemenu')} className='closemenu' ><img src={close} alt="" /></button>
         <div className="navigations">
              <Link className="link" to="/">
                Anasayfa
              </Link>
            <Link className="link" to="/getknowus">
              Bizi Tanıyın
            </Link>
            <Link className="link" to="/products">
              Ürünlerimiz
            </Link>
            <Link className="link" to="/projects">
             Projelerimiz
            </Link>
            <Link className="link" to="/contact">
              İletişim
            </Link>
          </div>
          <div className="contact">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={youtube} />
          </div>
    </div>
  )
}

export default Menu