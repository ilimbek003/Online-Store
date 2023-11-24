import React from "react";
import "../style/css/main.css";
import { useNavigate } from "react-router";
import { HiArrowLongLeft } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { BsChatRightText } from "react-icons/bs";
import ihsan from "../../src/img/сотрудник.jpg";
import { IoMailOutline } from "react-icons/io5";

const ToHelpPage = () => {
  const navigate = useNavigate();

  return (
    <div id="modal">
      <div className="to_help_page">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft
              className="fi"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
              size={20}
            />
            <p className="header_name">Поддержка</p>
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="guestions_block_all">
            <div className="worker_box">
              <img src={ihsan} alt="" />
            </div>
            <div className="support_text">
              <h3>Возникли вопросы?</h3>
              <p className="title_h6">
                Наша служба поддержки по всем вашим вопросам дает информацию.
              </p>
            </div>
            <div className="to_contact">
              <a href="#">
                <div className="contact_box">
                  <FiPhone size={23} />
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Позвонить
                  </p>
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="contact_box">
                  <LiaTelegramPlane size={23} />
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Telegram
                  </p>
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="contact_box">
                  <BsWhatsapp size={23} />
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Whatsapp
                  </p>
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="contact_box">
                  <a href="mailto:vlad@htmlbook.ru" className="fi">
                    <IoMailOutline className="" size={23} />
                  </a>
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Написать
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToHelpPage;
