import React, { useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "bootstrap";
const MyInformation = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cityModal, setCityModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [option, setOption] = useState("");

  const openCityModal = () => {
    setCityModal(true);
  };

  const closeCityModal = () => {
    setCityModal(false);
  };

  const checkboxChange = (value) => {
    if (setOption === value) {
      setOption("");
    } else {
      setOption(value);
    }
  };

  const radioChange = (event) => {
    setOption(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (value) => {
    if (selectedOption === value) {
      setSelectedOption("");
    } else {
      setSelectedOption(value);
    }
  };

  return (
    <div id="modal">
      <div className="my_information">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
            <p className="big">Менин маалыматтарым</p>
            <HiMiniArrowRightOnRectangle className="fi" />
          </div>
        </div>
        <div className="container">
          <div className="top">
            <form>
              <div className="input_box">
                <label>Авторизация телефону</label>
                <input className="input_form new_add_input" type="number" />
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
              <div className="input_box" onClick={openModal}>
                <label>Тили</label>
                <div className="toggle_block infor_block">
                  <input
                    style={{}}
                    className="input_option"
                    type="button"
                    value={selectedOption}
                  />
                  <MdKeyboardArrowDown
                    onClick={openModal}
                    className="right_icons"
                    style={{ cursor: "pointer" }}
                    size={30}
                  />
                </div>
              </div>
              {isModalOpen === true && (
                <div className="filters_oll">
                  <div className="order">
                    <div className="modal_content">
                      <h3>Настройка приложения</h3>
                      <AiOutlineClose
                        className="close"
                        style={{ border: "none", background: "none" }}
                        onClick={closeModal}
                        size={20}
                      />
                    </div>
                    <label className="detial">
                      <input
                        type="radio"
                        value={radioChange}
                        checked={selectedOption === "Кыргыз"}
                        onChange={() => handleCheckboxChange("Кыргыз")}
                        onClick={closeModal}
                      />
                      <p>Кыргыз</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Орус"
                        checked={selectedOption === "Орус"}
                        onChange={() => handleCheckboxChange("Орус")}
                        onClick={closeModal}
                      />
                      <p>Орус</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Англисче"
                        checked={selectedOption === "Англисче"}
                        onChange={() => handleCheckboxChange("Англисче")}
                        onClick={closeModal}
                      />
                      <p>Англисче</p>
                    </label>
                  </div>
                </div>
              )}
              <div className="input_box">
                <label>Уй-булолук абалы</label>
                <input className="input_form new_add_input" type="text" />
              </div>
              <div className="input_box">
                <label>Социалдык абалы</label>
                <input className="input_form new_add_input" type="text" />
              </div>
              <div className="input_box" onClick={openCityModal}>
                <label>Жашаган шаары</label>
                <div className="toggle_block infor_block">
                  <input
                    style={{}}
                    className="input_option"
                    type="button"
                    value={selectedOption}
                  />
                  <MdKeyboardArrowDown
                    onClick={openCityModal}
                    className="right_icons"
                    style={{ cursor: "pointer" }}
                    size={30}
                  />
                </div>
              </div>
              {cityModal === true && (
                <div className="filters_oll">
                  <div className="order">
                    <div className="modal_content">
                      <h3>Жашаган шаары</h3>
                      <AiOutlineClose
                        className="close"
                        style={{ border: "none", background: "none" }}
                        onClick={closeCityModal}
                        size={20}
                      />
                    </div>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Бишкек"
                        checked={option === "Бишкек"}
                        onChange={() => checkboxChange("Бишкек")}
                        onClick={closeCityModal}
                      />
                      <p>Бишкек</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Кант"
                        checked={option === "Кант"}
                        onChange={() => checkboxChange("Кант")}
                        onClick={closeCityModal}
                      />
                      <p>Кант</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Токмок"
                        checked={option === "Токмок"}
                        onChange={() => checkboxChange("Токмок")}
                        onClick={closeCityModal}
                      />
                      <p>Токмок</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Чолпон-Ата"
                        checked={option === "Чолпон-Ата"}
                        onChange={() => checkboxChange("Чолпон-Ата")}
                        onClick={closeCityModal}
                      />
                      <p>Чолпон-Ата</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Кара_Балта"
                        checked={option === "Кара_Балта"}
                        onChange={() => checkboxChange("Кара_Балта")}
                        onClick={closeCityModal}
                      />
                      <p>Кара_Балта</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Сокулук"
                        checked={option === "Сокулук"}
                        onChange={() => checkboxChange("Сокулук")}
                        onClick={closeCityModal}
                      />
                      <p>Сокулук</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Бостери"
                        checked={option === "Бостери"}
                        onChange={() => checkboxChange("Бостери")}
                        onClick={closeCityModal}
                      />
                      <p>Бостери</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Балыкчы"
                        checked={option === "Балыкчы"}
                        onChange={() => checkboxChange("Балыкчы")}
                        onClick={closeCityModal}
                      />
                      <p>Балыкчы</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Беловодское"
                        checked={option === "Беловодское"}
                        onChange={() => checkboxChange("Беловодское")}
                        onClick={closeCityModal}
                      />
                      <p>Беловодское</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Ош"
                        checked={option === "Ош"}
                        onChange={() => checkboxChange("Ош")}
                        onClick={closeCityModal}
                      />
                      <p>Ош</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Каракол"
                        checked={option === "Каракол"}
                        onChange={() => checkboxChange("Каракол")}
                        onClick={closeCityModal}
                      />
                      <p>Каракол</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Базар-Коргон"
                        checked={option === "Базар-Коргон"}
                        onChange={() => checkboxChange("Базар-Коргон")}
                        onClick={closeCityModal}
                      />
                      <p>Базар-Коргон</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Башка"
                        checked={option === "Башка"}
                        onChange={() => checkboxChange("Башка")}
                        onClick={closeCityModal}
                      />
                      <p>Башка</p>
                    </label>
                  </div>
                </div>
              )}    
              <div className="toggle_block toogle_block_inform">
                <p>Уй-жаныбарларынын болушу</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider_toggle round"></span>
                </label>
              </div>
              <div className="toggle_block toogle_block_inform">
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
    </div>
  );
};

export default MyInformation;
