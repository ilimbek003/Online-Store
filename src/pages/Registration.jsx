import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import bekbekei from "../../src/img/2.png";
import { HiArrowLongLeft } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import IMask from "imask";
import { registerUser } from "../Redux/slice/authReducer";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    last_name: "",
    first_name: "",
    phone: "",
    confirm_password: "",
    password: "",
  });
  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(registerUser(userData));
  };

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
              <form onSubmit={handleSubmit}>
                <div className="input_box">
                  <label>
                    Фaмилия <span>*</span>
                  </label>
                  <input
                    className="input_form new_add_input"
                    type="text"
                    value={userData.last_name}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        last_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input_box">
                  <label>
                    Имя <span>*</span>
                  </label>
                  <input
                    className="input_form new_add_input"
                    type="text"
                    value={userData.first_name}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        first_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input_box">
                  <label>
                    Номер телефона <span>*</span>
                  </label>
                  <input
                    className="input_form new_add_input"
                    id="phone"
                    placeholder="Введите номер"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input_box">
                  <label>
                    Пароль <span>*</span>
                  </label>
                  <input
                    className="input_form new_add_input"
                    type={visible ? "text" : "password"}
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
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
                    value={userData.confirm_password}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        confirm_password: e.target.value,
                      })
                    }
                  />
                  <span
                    className="span-icon"
                    onClick={() => setVisible2(!visible2)}
                  >
                    {visible2 ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <button onSubmit={handleSubmit} className="phone_btn">
                  {isLoading ? "заргуска..." : "Регистрация"}
                </button>
              </form>
              <div>
                <p className="come_in">
                  Уже есть акаунт?{" "}
                  <span onClick={() => navigate("/login")}> Войти</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
