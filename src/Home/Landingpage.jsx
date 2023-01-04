import React from "react";
import "./Landing.css";
import logo from "./logowhite.png";
import secondimgs from "./secondimgs.png";
import thimgs from "./3thimgs.png";
import EbookReuest from "./Forms/EbookReuest";

function Landingpage() {
    const handleOpen = (id) => {
        document.getElementById(id).style.display = "flex";
      };
    
  return (
    <div className="pagelanding">
      <div className="zeblogo">
        <img src={logo} />
      </div>
      <div className="landingfirst">
        <div className="layertitle">
          <h1>BAHÇE MOBİLYASI ALIRKEN TUZAĞA DÜŞMEYİN!</h1>
          <div className="landingfirstcontent">
            <p>
              ‘’Bahçe Mobilyaları alırken dikkat edilmesi gerekenler’’ ile
              ilgili sizin ücretsiz
            </p>
            <h2 style={{ color: "blue" }}> E-Kitap </h2> <p> hazırladık.</p>
            <p>
              Alanında duayen Uzman ekibimiz ve mimarlarımızın büyük bir
              titizlikle hazırladığı
            </p>{" "}
            <h2> e-kitaba ücretsiz olarak </h2> <p> bu sahip olabilirsiniz. </p>
          </div>
        </div>
      </div>
      <div className="landingsecond">
        <div className="landingsecondtext">
          <p>
            Müşterilerimizin en büyük arzusu evinin havasını değiştirerek
            konfora ulaşmak. Bahçe Mobilyası almak isteyen insanlar ev
            dekorasyonunu yenilemenin yanı sıra işlerinden evlerine
            döndüklerinde rahat ve estetik bir koltukta huzur ile kahvesini
            içmek istiyorlar. Evine davet ettiği eş ve arkadaşlarını gönül
            rahatlığıyla ağırlamak için güzel görünümlü ve kaliteli bir bahçe
            mobilyası almak istiyorlar.
          </p>
        </div>
        <div className="landingsecondimgs">
          <img src={secondimgs} alt="" />
        </div>
      </div>
      <div className="landingitem3">
        <div style={{top:"-50px"}}  className="bigtitleinlanding">
          <h1 >EVİNİZİN HAVASINI DEĞİŞTİRİN KONFORUNUZA ULAŞIN </h1>
        </div>
        <div className="landingitm3img">
          <img src={thimgs} alt="" />
        </div>
        <div className="landimgitm3content">
          <p>
            Kaliteli bir bahçe mobilyasında güzel görünümden daha fazlasını elde
            edersiniz. Böylece hem evinizi, bahçenizi daha estetik bir görünüme
            kavuşturur hem de konforunuzu yaşarsınız.
          </p>
        </div>
      </div>
      <div className="landingpageitm4">
        <div className="landigitm4title">
          <h1>PARANIZI VE ZAMANINIZI</h1>
          <h1 style={{ fontStyle: "italic", fontWeight: "bold" }}>
            ÇÖPE ATMAYIN!
          </h1>
        </div>
        <div className="landingitm4content">
          <p>
            Deneme yanılma yöntemiyle, ne aradığınızı bilmeden bahçe
            mobilyaları, oturma grupları, rattan salıncak fiyatlarını mı
            araştırıyorsunuz? Bahçe mobilyası almak için günlerce araştırma
            yaparak internetin dehlizlerinde kaybolmadan önce ne istediğinizi
            öğrenin.
          </p>
        </div>
        <div style={{bottom:"-40px"}} className="downloadebook">
          <h1>HEMEN İNDİRİN</h1> <button onClick={()=>handleOpen("ebookrequest")} >ÜCRETSİZ</button>
        </div>
      </div>
      <div className="landingitm5">
        <div style={{top:"50px"}} className="bigtitleinlanding">
          <h1>ÜCRETSİZ E-KİTABI MAİLİNİZE GÖNDERELİM</h1>
        </div>
        <div className="itm5contebt">
          <p>
            En yeni trendlerin 2023 trendlerinin de yer aldığı e-kitabımızı
            indiren şanslı kişiler bahçe mobilyası alırken
            <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
              daha güvenli ve daha ekonomik alışveriş yapmış oldular.
            </p>
            Ne istediğini bilen, almak istediği ürüne araştırmalar sonucu daha
            rahat karar veren müşterilerimiz bundan çok memnun oldular. Bizde
            müşterierimizin memnuniyetinden ilham alıyor ve yıllardır{" "}
            <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
              {" "}
              Bahçe Mobilyaları alanında hizmet veren ekibimizin hazırladığı bu
              e-kitabı sürekli güncelliyoruz.
            </p>
          </p>
        </div>
      </div>
      <div style={{bottom:"20px"}} className="downloadebook">
        <h1>HEMEN İNDİRİN</h1> <button onClick={()=>handleOpen("ebookrequest")} >ÜCRETSİZ</button>
      </div>
      <EbookReuest/>
    </div>
  );
}

export default Landingpage;
