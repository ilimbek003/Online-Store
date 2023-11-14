import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import IMask from "imask";
const ResetThePassword = () => {
  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  }, []);

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
              id="phone"
              className="input_form new_add_input"
              placeholder="Введите номер"
            />
          </div>
          <button className="forgot_btn reset_btn">Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ResetThePassword;
