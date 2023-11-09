import React from "react";
import { useNavigate } from "react-router";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import bekbekei from "../../src/img/2.png";
import { HiArrowLongLeft } from "react-icons/hi2";

const RegistrationPhone = () => {
  const navigate = useNavigate();
  return (
    <div id="modal">
      <div className="registration_phone">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
            <img className="images" src={bekbekei} alt="Бекбекей" />
            <LiaQuestionCircleSolid
              className="fi"
              onClick={() => navigate("/to-help-page")}
            />
          </div>
        </div>
        <div className="container">
          <div className="phone_block_all">
            <div className="phone_block">
              <h1>Телефон номеринизди жазыныз</h1>
              <input className="input_form" type="number" placeholder="996" />
              <p>Сиздин Bekbekei картаныз бар-жогун текшеребиз</p>
            </div>
            <button onClick={() => navigate('/registration')} className="phone_btn">Улантуу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPhone;
