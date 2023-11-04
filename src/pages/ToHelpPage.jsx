import React from "react";
import "../style/css/main.css";
import { useNavigate } from "react-router";
import { HiArrowLongLeft } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { BsChatRightText } from "react-icons/bs";
import ihsan from "../../src/img/ihsan.jpg";

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
              onClick={() => navigate("/promotion")}
              size={20}
            />
            <p>Колдоо</p>
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="guestions_block_all">
            <div className="worker_box">
              <img src={ihsan} alt="" />
            </div>
            <div className="support_text">
              <h3>Cуроолор жаралдыбы??</h3>
              <p className="title_h6">
                Биздин колдоо кызмат жаралган бардык суроолорунуз боюнча
                маалымат берет.
              </p>
            </div>
            <div className="to_contact">
              <div>
                <div className="contact_box">
                  <FiPhone size={23} />
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Позвонить
                  </p>
                </div>
              </div>
              <div>
                <div className="contact_box">
                  <LiaTelegramPlane size={23} />
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Telegram
                  </p>
                </div>
              </div>
              <div>
                <div className="contact_box">
                  <BsWhatsapp size={23} />
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Whatsapp
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="contact_box"
                  onClick={() => navigate("/message-page")}
                >
                  <BsChatRightText size={23} />
                </div>
                <div>
                  <p className="title_h6" style={{ marginTop: "8px" }}>
                    Написать
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToHelpPage;
