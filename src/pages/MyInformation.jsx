import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { TbFileSettings } from "react-icons/tb";
import IMask from "imask";

const MyInformation = () => {
  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  });

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cityModal, setCityModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [option, setOption] = useState("");

  return (
    <div id="modal">
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center ">
          <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
          <p className="header_name">Менин маалыматтарым</p>
          <TbFileSettings className="fi" />
        </div>
      </div>
      <div className="container">
        <div className="input_form_block top">
          <form>
            <div className="input_box">
              <label>Авторизация телефону</label>
              <input
                id="phone"
                className="input_form new_add_input"
                placeholder="996"
              />
            </div>
            <div className="input_box">
              <label>Фaмилиясы</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Аты</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Атасынын Аты</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box ">
              <label>Туулган куну</label>
              <input className="input_form new_add_input" type="date" />
            </div>
            <div className="input_box ">
              <label>Жынысы</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Тили</label>
              <div className="toggle_block infor_block">
                <input style={{}} className="input_option" type="button" />
                <MdKeyboardArrowDown
                  className="right_icons"
                  style={{ cursor: "pointer" }}
                  size={30}
                />
              </div>
            </div>
            <div className="input_box">
              <label>Уй-булолук абалы</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Социалдык абалы</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Жашаган шаары</label>
              <div className="toggle_block infor_block">
                <input className="input_option" type="button" />
                <MdKeyboardArrowDown
                  className="right_icons"
                  style={{ cursor: "pointer" }}
                  size={30}
                />
              </div>
            </div>
            <div className="toggle_block toogle_block_inform">
              <p>Уй-жаныбарларынын болушу</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider_toggle round"></span>
              </label>
            </div>
            <div className="toggle_block toogle_block_inform bottom_tom">
              <p>Унаанын болушу</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider_toggle round"></span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
