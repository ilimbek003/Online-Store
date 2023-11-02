import React from "react";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import bekbekei from "../../src/img/2.png";
import GetShot from "../components/GetShot";

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="nav d-flex justify-content-between align-items-center">
        <span></span>
        <img className="images" src={bekbekei} alt="Бекбекей" />
        <LiaQuestionCircleSolid className="fi" />
      </div>
      <GetShot/>
    </div>
  );
};

export default Promotion;
