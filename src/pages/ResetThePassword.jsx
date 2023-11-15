import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import IMask from "imask";
import { useDispatch, useSelector } from "react-redux";
import { forgotUser } from "../Redux/slice/ForgotSlice";
import Loading from "../UI/Loading/Loading";

const ResetThePassword = () => {
  // states
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // redus state
  const { loading, error } = useSelector((state) => state.user);
  const handleForgotEvent = (e) => {
    e.preventDefault();
    let forgorCredential = {
      phone,
    };
    dispatch(forgotUser(forgorCredential)).then((result) => {
      if (result.payload) {
        setPhone("");
        navigate("/");
      }
    });
  };

  const dispatch = useDispatch();

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
          <p>укажите ваш номер телефон который използовался при регистрации</p>
          <div className="input_box">
            <label>
              Номер телефон <span>*</span>
            </label>
            <input
              id="phone"
              className="input_form new_add_input"
              placeholder="Введите номер"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            disabled={loading}
            type="sumbit"
            className="forgot_btn reset_btn"
          >
            {loading ? <Loading /> : "Oтправить"}
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
