import React from "react";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import bekbekei from "../../src/img/2.png";
import GetShot from "../components/GetShot";
import SpecialOffers from "../components/SpecialOffers";

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="nav d-flex justify-content-between align-items-center">
        <span></span>
        <img className="images" src={bekbekei} alt="Бекбекей" />
        <LiaQuestionCircleSolid className="fi" />
      </div>
      <GetShot />
      <SpecialOffers />
    </div>
  );
};

export default Promotion;
