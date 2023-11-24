import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import bekbekei from "../../src/img/bekbekei-h-logo.svg";
import { HiArrowLongLeft } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import IMask from "imask";
import {
  registerFailure,
  registerStart,
  registerSuccess,
  registerUser,
} from "../Redux/slice/authReducer";
import Loading from "../UI/Loading/Loading";
import axios from "axios";
import { url } from "../Api";

const Registration = ({ Alert }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { message, phone } = useSelector((state) => state.auth);
  const [error, setError] = useState([]);
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
    setIsLoading(true);
    localStorage.setItem("phone", userData.phone);
    if (userData) {
      dispatch(registerStart());
      try {
        const response = await axios.post(url + "/auth/register", userData);
        dispatch(registerSuccess(response.data));
        if (response.data.phone) {
          Alert(response.data.phone, "error");
        }
        if (response.data.non_field_errors) {
          Alert(response.data.non_field_errors, "error");
        }
        if (response.data.response == true) {
          Alert(response.data.message, "success");
          navigate("/personal/activation");
        }
        if (
          response.data.password ||
          response.data.confirm_password ||
          response.data.phone
        ) {
          setError(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        dispatch(registerFailure(error.message));
        Alert("Text", "error");
        setIsLoading(false);
      }
    }
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
              onClick={() => navigate("/personal/to-help-page")}
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
                  {error.first_name && (
                    <p className="red">{error.first_name}</p>
                  )}
                </div>
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
                  {error.last_name && <p className="red">{error.last_name}</p>}
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
                  {error.password && <p className="red">{error.password}</p>}
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
                  {error.confirm_password && (
                    <p className="red">{error.confirm_password}</p>
                  )}
                </div>
                <button
                  disabled={isLoading}
                  onSubmit={handleSubmit}
                  className=" phone_btn"
                >
                  {isLoading ? <Loading /> : "Регистрация"}
                </button>
              </form>
              <div
                className="come_in"
                onClick={() => navigate("/personal/login")}
              >
                Уже есть акаунт?
                <span> Войти</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
