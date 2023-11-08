import React, { useEffect } from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import "../style/css/modal.css";
import bekbekei from "../img/2.png";
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

const PersonalArea = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="modal">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center">
            <HiArrowLongLeft className="fi" onClick={() => navigate("/")} />
            <img className="images" src={bekbekei} alt="Бекбекей" />
            <HiMiniArrowRightOnRectangle className="fi" />
          </div>
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
                <h3 className="mt-2">Мои данные </h3>
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
                  <FaRegBookmark className="be" />{" "}
                </div>
                <h3 className="mt-2">Тандалган таварлар</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div
              className="area_all"
              onClick={() => navigate(`/my-coupon-details-id`)}
            >
              <div className="bell">
                <div className="bi">
                  {" "}
                  <HiOutlineNewspaper className="be" />{" "}
                </div>
                <h3>Мои заказы</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div className="area_all">
              <div className="bell">
                <div className="bi">
                  {" "}
                  <TbHistory className="be" />{" "}
                </div>
                <h3 className="mt-2">История покупок</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div className="area_all" onClick={() => navigate(`/settings`)}>
              <div className="bell">
                <div className="bi">
                  <IoSettingsSharp className="be" />{" "}
                </div>
                <h3 className="mt-2"> Настройка </h3>
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
                  <TbTruckDelivery className="be" />{" "}
                </div>
                <h3>Адрес доставки</h3>
              </div>
              <div className="lo">
                <IoIosArrowForward className="be" />
              </div>
            </div>
            <div onClick={() => navigate(`/to-help-page`)} className="area_all">
              <div className="bell">
                <div className="bi">
                  <BsQuestionCircle className="be" />{" "}
                </div>
                <h3 className="mt-2">Помощь</h3>
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
