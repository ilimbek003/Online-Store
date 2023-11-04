import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";

const NewAddress = () => {
  const navigate = useNavigate();
  return (
    <div className="new_address">
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center ">
          <HiArrowLongLeft onClick={() => navigate("/")} className="fi" />
          <p>Адрес доставки</p>
          <span></span>
        </div>
      </div>
      <div className="container">
        <div className="new_address_block">
          <label></label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default NewAddress;
