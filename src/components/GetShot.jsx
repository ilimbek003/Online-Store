import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import bekbekei from "../../src/img/2.png";

const GetShot = () => {
  const navigate = useNavigate();
  return (
    <div className="get_shot">
      <div className="nav d-flex justify-content-between align-items-center">
        <p>Сатып алууга шашыл</p>
        <h4 className="title_add" onClick={() => navigate("/get-shot-details")}>
          Бардыгы <MdOutlineKeyboardArrowRight size={18} />
        </h4>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default GetShot;
