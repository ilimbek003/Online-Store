import React, { useEffect, useState } from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import "../style/css/modal.css";
import { HiArrowLongLeft, HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { TbHistory } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BiBell } from "react-icons/bi";

const PersonalArea = () => {
  const [openModal, setOpenModal] = useState(false);

  const isOpenModal = () => {
    setOpenModal(true);
  };

  const closeOpenModal = () => {
    setOpenModal(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <div id="modal">
        <div className="nav">
          <div className="container nav_content">
            <HiArrowLongLeft className="fi" onClick={() => navigate("/")} />
            <h3 className="hello">Привет, Илимбек</h3>
            <HiMiniArrowRightOnRectangle
              className="fi"
              onClick={() => isOpenModal()}
            />
          </div>
          {openModal === true && (
            <div className="filters_oll" onClick={closeOpenModal}>
              <div className="order">
                <div className="acaunt_block_modal">
                  <h3>Акаунттан чыгуу?</h3>
                  <p>
                    3 кайрадан авторизациядан <br /> отушунуз керек
                  </p>
                  <button>Ооба, чыгам </button>
                  <h4>Жок, калам</h4>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container">
          <div className="top_one">
            <h1 className="title_h2 one">Добрый день Илияс уулу </h1>
            <div
              className="area_all"
              onClick={() => navigate(`/my-information`)}
            >
              <div className="bell">
                <div className="bi">
                  {" "}
                  <FiUser className="be" />{" "}
                </div>
                <h3 className="mt-2">Менин маалыматтарым </h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div
              className="area_all"
              onClick={() => navigate(`/shop-all/cart`)}
            >
              <div className="bell">
                <div className="bi">
                  <FaRegBookmark className="be" />
                </div>
                <h3 className="mt-2">Тандалган таварлар</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div className="area_all" onClick={() => navigate(`/my-orders`)}>
              <div className="bell">
                <div className="bi">
                  <HiOutlineNewspaper className="be" />
                </div>
                <h3>Менин буюртмаларым</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div className="area_all" onClick={() => navigate("/buy-history")}>
              <div className="bell">
                <div className="bi">
                  <TbHistory className="be" />
                </div>
                <h3 className="mt-2">Сатып алуулардын тарыхы</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div className="area_all" onClick={() => navigate(`/settings`)}>
              <div className="bell">
                <div className="bi">
                  <IoSettingsSharp className="be" />
                </div>
                <h3 className="mt-2"> Жондоолор</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div
              className="area_all"
              onClick={() => navigate("/delivery-address")}
            >
              <div className="bell">
                <div className="bi">
                  <TbTruckDelivery className="be" />
                </div>
                <h3>Жеткируу дареги</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div onClick={() => navigate(`/to-help-page`)} className="area_all">
              <div className="bell">
                <div className="bi">
                  <BsQuestionCircle className="be" />
                </div>
                <h3 className="mt-2">Жардам</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalArea;
