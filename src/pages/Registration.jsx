import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import bekbekei from "../../src/img/2.png";
import { HiArrowLongLeft } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import IMask from "imask";

const Registration = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  }, []);

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
              <h1>Регистрация</h1>
              <div className="input_box">
                <label>
                  Фaмилия <span>*</span>
                </label>
                <input className="input_form new_add_input" type="text" />
              </div>
              <div className="input_box">
                <label>
                  Имя <span>*</span>
                </label>
                <input className="input_form new_add_input" type="text" />
              </div>
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
                />
                <span
                  className="span-icon"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="input_box">
                <label>
                  Повторите пароль <span>*</span>
                </label>
                <input
                  className="input_form new_add_input"
                  type={visible2 ? "text" : "password"}
                />
                <span
                  className="span-icon"
                  onClick={() => setVisible2(!visible2)}
                >
                  {visible2 ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div>
              <button onClick={() => navigate()} className="phone_btn">
                Регистрация
              </button>
              <p className="come_in">
                Уже есть акаунт?{" "}
                <span onClick={() => navigate("/login")}> Войти</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
