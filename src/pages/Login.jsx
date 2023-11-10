import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div id="modal">
      <div className="login">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
            <p>Войти</p>
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
                className="input_form new_add_input"
                type="number"
                placeholder="996"
              />
            </div>
            <div className="input_box">
              <label>
                Пароль <span>*</span>
              </label>
              <input className="input_form new_add_input" type="number" />
            </div>
            <p className="forgot_password">Забыли пароль?</p>
            <button className="forgot_btn">Войти</button>
            <p className="come_in">
              Еще нет аккаунта?
              <span onClick={() => navigate("/login")}> Зарегистрироватся</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
