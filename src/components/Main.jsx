import React, { useState } from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import qar from "../img/qr-код.gif";
import Header from "./Header";
import MyCoupon from "./MyCoupon";
import { useNavigate } from "react-router";
import { DiVisualstudio } from "react-icons/di";
import Storis from "../Storis/Storis";
const Main = () => {
  const [qrCode, setQrCode] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container">
        <div className="margin_top">
          <Storis />
        </div>
        <button
          onClick={() => navigate("/registration-phone")}
          className="registr_btn"
        >
          Кирүү
        </button>
        <div className="margin_top_all">
          <div className="margin_top_log">
            <DiVisualstudio className="dio" />
          </div>
        </div>
        <div className="bonus_block_all" onClick={() => navigate("/qr-cod")}>
          <div>
            <h4 className="title_h">Бонусная карта</h4>
            <h1 className="title_ha">
              26 <span>бонус</span>
            </h1>
          </div>
          <img src={qar} alt="" />
        </div>
      </div>
      <MyCoupon />
    </>
  );
};

export default Main;
