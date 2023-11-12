import React, { useState, useEffect } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import IMask from "imask";

const Login = () => {
  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  }, []);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <div id="modal">
      <div className="login">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
            <p className="header_name">Войти</p>
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="login_block">
            <div className="input_box">
              <label>
                Номер телефона <span>*</span>
              </label>
              <input
                id="phone"
                className="input_form new_add_input"
                placeholder="996"
              />
            </div>
            <div className="input_box">
              <label>
                Пароль <span>*</span>
              </label>
              <input
                className="input_form new_add_input"
                type={visible ? "text" : "password"}
                placeholder="Пароль"
              />
              <span className="span-icon" onClick={() => setVisible(!visible)}>
                {visible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <p
              className="forgot_password"
              onClick={() => navigate("/reset-the-password")}
            >
              Забыли пароль?
            </p>
            <button className="forgot_btn">Войти</button>
            <p className="come_in">
              Еще нет аккаунта?
              <span onClick={() => navigate("/registration")}>
                {" "}
                Зарегистрироватся
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
