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
  

  const openCityModal = () => {
    setCityModal(true);
  };

  const closeCityModal = () => {
    setCityModal(false);
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
  const [selectedOption, setSelectedOption] = useState("");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
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
                        value="Кыргыз"
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
                        checked={selectedOption === "Бишкек"}
                        onChange={() => handleCheckboxChange("Бишкек")}
                        onClick={closeCityModal}
                      />
                      <p>Бишкек</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Кант"
                        checked={selectedOption === "Кант"}
                        onChange={() => handleCheckboxChange("Кант")}
                        onClick={closeCityModal}
                      />
                      <p>Кант</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Токмок"
                        checked={selectedOption === "Токмок"}
                        onChange={() => handleCheckboxChange("Токмок")}
                        onClick={closeCityModal}
                      />
                      <p>Токмок</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Чолпон-Ата"
                        checked={selectedOption === "Чолпон-Ата"}
                        onChange={() => handleCheckboxChange("Чолпон-Ата")}
                        onClick={closeCityModal}
                      />
                      <p>Чолпон-Ата</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Кара_Балта"
                        checked={selectedOption === "Кара_Балта"}
                        onChange={() => handleCheckboxChange("Кара_Балта")}
                        onClick={closeCityModal}
                      />
                      <p>Кара_Балта</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Сокулук"
                        checked={selectedOption === "Сокулук"}
                        onChange={() => handleCheckboxChange("Сокулук")}
                        onClick={closeCityModal}
                      />
                      <p>Сокулук</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Бостери"
                        checked={selectedOption === "Бостери"}
                        onChange={() => handleCheckboxChange("Бостери")}
                        onClick={closeCityModal}
                      />
                      <p>Бостери</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Балыкчы"
                        checked={selectedOption === "Балыкчы"}
                        onChange={() => handleCheckboxChange("Балыкчы")}
                        onClick={closeCityModal}
                      />
                      <p>Балыкчы</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Беловодское"
                        checked={selectedOption === "Беловодское"}
                        onChange={() => handleCheckboxChange("Беловодское")}
                        onClick={closeCityModal}
                      />
                      <p>Беловодское</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Ош"
                        checked={selectedOption === "Ош"}
                        onChange={() => handleCheckboxChange("Ош")}
                        onClick={closeCityModal}
                      />
                      <p>Ош</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Каракол"
                        checked={selectedOption === "Каракол"}
                        onChange={() => handleCheckboxChange("Каракол")}
                        onClick={closeCityModal}
                      />
                      <p>Каракол</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Базар-Коргон"
                        checked={selectedOption === "Базар-Коргон"}
                        onChange={() => handleCheckboxChange("Базар-Коргон")}
                        onClick={closeCityModal}
                      />
                      <p>Базар-Коргон</p>
                    </label>
                    <label className="detial">
                      <input
                        type="radio"
                        value="Башка"
                        checked={selectedOption === "Башка"}
                        onChange={() => handleCheckboxChange("Башка")}
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
