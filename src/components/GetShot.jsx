import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import '../style/css/main.css'

const GetShot = () => {
  const navigate = useNavigate();
  return (
    <div className="get_shot">
      <div className="container">
        <div className="title">
          <p>Сатып алууга шашыл</p>
          <h4
            className="title_add"
            onClick={() => navigate("/get-shot-details")}
          >
            Бардыгы <MdOutlineKeyboardArrowRight className="fi" />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GetShot;
