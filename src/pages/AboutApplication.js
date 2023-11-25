import React from 'react';
import {HiArrowLongLeft, HiMiniArrowRightOnRectangle} from "react-icons/hi2";
import bekbekei from "../img/bekbekei-h-logo.svg";
import {FiUser} from "react-icons/fi";
import {LuScrollText} from "react-icons/lu";
import {useNavigate} from "react-router-dom";
import {AiTwotoneLike} from "react-icons/ai";
import {AiTwotoneDislike} from "react-icons/ai";

const AboutApplication = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="modal">
                <div className="nav">
                    <div className="container nav_content">
                        <HiArrowLongLeft className="fi" onClick={() => navigate(-1)}/>
                        <p className="title_h5 all_title_one">О приложении</p>
                        <div/>
                    </div>
                </div>
                <div className="container">
                    <div className="nav_img">
                        <img src={bekbekei} alt=""/>
                    </div>
                    <div>
                        <div className="area_all">
                            <a href="#">
                                <div className="bell">
                                    <div className="bi">
                                        {" "}
                                        <LuScrollText className="be"/>{" "}
                                    </div>
                                    <h3 className="mt-2">Правила программы лояльности </h3>
                                </div>
                            </a>
                        </div>
                        <div className="area_all">
                            <a href="#">
                                <div className="bell">
                                    <div className="bi">
                                        <LuScrollText className="be"/>
                                    </div>
                                    <h3 className="mt-2">Политика конфиденциальности</h3>
                                </div>
                            </a>
                        </div>
                        <div className="area_all">
                            <a href="#">
                                <div className="bell">
                                    <div className="bi">
                                        <LuScrollText className="be"/>
                                    </div>
                                    <h3 className="mt-2">Лицензионное соглашение</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 style={{textAlign: "center"}} className="cent">Как вам наше приложение?</h3>
                        <div className="d-flex flex_one">
                            <a href="#">
                                <button>
                                <span style={{
                                    position: "absolute",
                                    color: '#ff640d',
                                    top: '0',
                                    left: "0",
                                    right: '0',
                                }}>
                                   <AiTwotoneDislike className="fis"/>
                                </span>
                                </button>
                            </a>
                            <a href="#">
                                <button>
                                <span style={{
                                    position: "absolute",
                                    color: '#ff640d',
                                    top: '0',
                                    left: "0",
                                    right: '0',
                                }}>
                                    <AiTwotoneLike className="fis"/>
                                </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutApplication;