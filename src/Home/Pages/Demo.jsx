import React from 'react'
import marka from "../images/marka.png";


function Demo() {
  return (
    <div>
        <div className="card">
        <div className="cardbody">
          <h1>Dünya Markası Olma Yolunda</h1>
          <p>
            explorecart Türkiye'nin nadir yerli üretim bahçe mobilyaları imalatı
            yapan firmalarından biri olmaktan gurur duyuyoruz.Her gün yenilenen
            ürün portöyümüz ve değişime açık dinamik yapımız sayesinde hızla
            büyüyor ve bir dünya markası olma yolunda ilerliyoruz.Siz de bu
            değere ortak olmak için yolculuğumuza katılın...
          </p>
          <a>DAHA FAZLA</a>
        </div>
        <div className="images">
          <div className="imagescover">
            <img src={marka} alt="" />
            <div className="imgsbody">
              <div className="bigimgbody">
                <div
                  style={{
                    height: "10%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
                <div className="bigimg">sdfg</div>
                <div
                  style={{
                    height: "10%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "100%",
                  width: "20px",
                  backgroundColor: "white",
                }}
              ></div>
              <div className="smallimgbody">
                <div
                  style={{
                    height: "20%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
                <div className="smallimg"></div>
                <div
                  style={{
                    height: "10%",
                    with: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50px",
                  backgroundColor: "white",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo