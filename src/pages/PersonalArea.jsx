import React, {useEffect, useState} from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import "../style/css/modal.css";
import {HiArrowLongLeft, HiMiniArrowRightOnRectangle} from "react-icons/hi2";
import {IoIosArrowForward} from "react-icons/io";
import {FiUser} from "react-icons/fi";
import {FaRegBookmark} from "react-icons/fa6";
import {IoSettingsSharp} from "react-icons/io5";
import {HiOutlineNewspaper} from "react-icons/hi2";
import {TbHistory} from "react-icons/tb";
import {TbTruckDelivery} from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import {BsQuestionCircle} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {BiBell} from "react-icons/bi";
import bekbekei from "../../src/img/bekbekei-h-logo.svg";

const PersonalArea = () => {
    const [openModal, setOpenModal] = useState(false);
    const isOpenModal = () => {
        setOpenModal(true);
    };

    const closeOpenModal = () => {
        setOpenModal(false);
    };

    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'));
    return (
        <>
            <div id="modal">
                <div className="nav">
                    <div className="container nav_content">
                        <HiArrowLongLeft className="fi" onClick={() => navigate("/")}/>
                        <img src={bekbekei} alt=""/>
                        <HiMiniArrowRightOnRectangle
                            className="fi"
                            onClick={() => isOpenModal()}
                        />
                    </div>
                    {openModal === true && (
                        <div className="filters_oll" onClick={closeOpenModal}>
                            <div className="order">
                                <div className="acaunt_block_modal">
                                    <h3>Выйти из аккаунта?</h3>
                                    {/*<p>*/}
                                    {/*    3 нужно пройти авторизацию <br/> еще раз*/}
                                    {/*</p>*/}
                                    <button
                                        onClick={() => localStorage.removeItem('token') || navigate("/to-come-in")}>Да,
                                        я выйду
                                    </button>
                                    <h4>Нет, я останусь</h4>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="container">
                    <div className="top_one one">
                        <div
                            className="area_all"
                            onClick={() => navigate(`/my-information`)}
                        >
                            <div className="bell">
                                <div className="bi">
                                    {" "}
                                    <FiUser className="be"/>{" "}
                                </div>
                                <h3 className="mt-2">Мои данные </h3>
                            </div>
                            <div className="lo">
                                <IoIosArrowForward className="be"/>
                            </div>
                        </div>
                        {/*<div*/}
                        {/*    className="area_all"*/}
                        {/*    onClick={() => navigate(`/shop-all/cart`)}*/}
                        {/*>*/}
                        {/*    <div className="bell">*/}
                        {/*        <div className="bi">*/}
                        {/*            <FaRegBookmark className="be"/>*/}
                        {/*        </div>*/}
                        {/*        <h3 className="mt-2">Избранные товары</h3>*/}
                        {/*    </div>*/}
                        {/*    <div className="lo">*/}
                        {/*        <IoIosArrowForward className="be"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="area_all" onClick={() => navigate(`/settings`)}>
                            <div className="bell">
                                <div className="bi">
                                    <IoSettingsOutline className="be"/>
                                </div>
                                <h3 className="mt-2">Настройка</h3>
                            </div>
                            <div className="lo">
                                <IoIosArrowForward className="be"/>
                            </div>
                        </div>
                        <div onClick={() => navigate(`/to-help-page`)} className="area_all">
                            <div className="bell">
                                <div className="bi">
                                    <BsQuestionCircle className="be"/>
                                </div>
                                <h3 className="mt-2">Помощь</h3>
                            </div>
                            <div className="lo">
                                <IoIosArrowForward className="be"/>
                            </div>
                        </div>
                        <div onClick={() => navigate(`/to-help-page`)} className="area_all">
                            <div className="bell">
                                <div className="bi">
                                    <BsQuestionCircle className="be"/>
                                </div>
                                <h3 className="mt-2">О пи</h3>
                            </div>
                            <div className="lo">
                                <IoIosArrowForward className="be"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalArea;
