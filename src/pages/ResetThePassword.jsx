import React, { useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
const ResetThePassword = () => {
  const [inputData, setInputDtata] = useState({
    phone: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });
  
  const navigate = useNavigate();
  return (
    <div className="reset_the_password">
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center ">
          <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
          <p className="header_name">Сбросить пароль</p>
          <span></span>
        </div>
      </div>
      <div className="container">
        <div className="reset_password_block">
          <p>укажите ваш номер телефон который използовался при регистрации</p>
          <div className="input_box">
            <label>
              Номер телефон <span>*</span>
            </label>
            <input
              className="input_form new_add_input"
              type="number"
              placeholder=""
            />
          </div>
          <button className="forgot_btn reset_btn">Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ResetThePassword;
