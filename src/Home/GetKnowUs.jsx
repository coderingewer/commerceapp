import React, { useState } from "react";
import Footer from "../bars/Footer";
import NavBar from "../bars/NavBar";
import "./GetKnowUs.css";
import data from "./About.json";

function GetKnowUs() {
  const [object, setObject] = useState(data[0]);

  const handleContent = (id) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            setObject(data[i]);
            break;
        }
    }
  };
  const id = parseInt(object.id)
  console.log(object.id);
  return (
    <div>
      <NavBar />
      <div className="getknowus">
        <div className="getknowusnav">
          <div onClick={() => handleContent(1)} className={id == 1 ? "getknowusnavitem itembtmline active" : "getknowusnavitem itembtmline" }>
            <h1>VİZYONUMUZ</h1>
          </div>
          <div onClick={() => handleContent(2)} className={id == 2 ? "getknowusnavitem itembtmline active" : "getknowusnavitem itembtmline" }>
            <h1 >ÜYELİK POLİTİKASI</h1>
          </div>
          <div onClick={() => handleContent(3)}className={id == 3 ? "getknowusnavitem itembtmline active" : "getknowusnavitem itembtmline" }>
            <h1>MUTLU MUŞTERİLER</h1>
          </div>
          <div onClick={() => handleContent(4)} className={id == 4 ? "getknowusnavitem itembtmline active" : "getknowusnavitem itembtmline" }>
            <h1>BAYİİLİK</h1>
          </div>
          <div onClick={() => handleContent(5)} className={id == 5 ? "getknowusnavitem  active" : "getknowusnavitem " }>
            <h1>GİZLİLİK POLİTİKASI</h1>
          </div>
        </div>
        <div className="texts">
          <h1>{object.Title}</h1>
          <p>{object.Text}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GetKnowUs;
