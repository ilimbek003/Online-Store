import React, {useEffect} from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import "../style/css/modal.css";
import {HiArrowLongLeft, HiMiniArrowRightOnRectangle} from "react-icons/hi2";
import {useNavigate} from "react-router";
import {LiaQuestionCircleSolid} from "react-icons/lia";
import {getDate} from "../Redux/reduser/getData";
import {useDispatch, useSelector} from "react-redux";
import qar from "../img/qr-код.gif";

const QrCode = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : false;

    return (
        <>
            {
                token ?
                    <div id="modal">
                        <div className="nav">
                            <div className="container d-flex justify-content-between align-items-center">
                                <HiArrowLongLeft className="fi" onClick={() => navigate("/")}/>
                                <p className="qr_cod_header">
                                    Сиздин Bekbekei картаныз <br/>{" "}
                                    <span className="sapn">312+996 (707) 84-87-24</span>
                                </p>
                                <LiaQuestionCircleSolid
                                    className="fi"
                                    onClick={() => navigate("/to-help-page")}
                                />
                            </div>
                        </div>
                        <div className="block container ">
                            <img className="qar" src={qar} alt=""/>
                        </div>
                    </div> : (
                        ""
                    )
            }
        </>
    );
};

export default QrCode;
