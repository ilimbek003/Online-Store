import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import IMask from "imask";
import { useDispatch, useSelector } from "react-redux";
import { forgotUser } from "../Redux/slice/ForgotSlice";
import Loading from "../UI/Loading/Loading";
import axios from "axios";
import { url } from "../Api";
import {
  registerFailure,
  registerSuccess,
} from "../Redux/slice/activationReduser";

const ResetThePassword = ({ Alert }) => {
  // states
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // redux state
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleForgotEvent = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let forgotCredential = {
      phone,
    };
    try {
      const response = await axios.post(
        url + "/auth/reset-password",
        forgotCredential
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(registerSuccess(response.data));
      if (response.data.response === true) {
        navigate("/registration");
        Alert("Код подтверждения успешно отправлен", "success");
      }
      if (response.data.response === false) {
        Alert(response.data.message, "error");
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      dispatch(registerFailure(error.message));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  }, []);

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
        <form className="reset_password_block" onSubmit={handleForgotEvent}>
          <p>укажите ваш номер телефон который использовался при регистрации</p>
          <div className="input_box">
            <label>
              Номер телефона <span>*</span>
            </label>
            <input
              required
              id="phone"
              className="input_form new_add_input"
              placeholder="Введите номер"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="forgot_btn reset_btn"
          >
            {isLoading ? <Loading /> : "Отправить"}
          </button>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetThePassword;
