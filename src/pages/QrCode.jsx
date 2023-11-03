import React from 'react';
import "../style/css/main.css";
import "../style/css/App.css";
import "../style/css/modal.css"
import {HiArrowLongLeft, HiMiniArrowRightOnRectangle} from "react-icons/hi2";
import qar from "../img/qr-код.gif";

const QrCode = ({qrCode, setQrCode}) => {
    return (
        <>
            {
                qrCode === true && (
                    <div id="modal">
                        <div className="nav">
                            <div className="container d-flex justify-content-between align-items-center">
                                <HiArrowLongLeft className="fi" onClick={() => setQrCode(false)}/>
                                <h3 className="title_h3">Сиздин Бекбекйдик картаныз <br/> <span
                                    className="sapn">2700 0081 1499 7</span></h3>
                                <HiMiniArrowRightOnRectangle className="fi"/>
                            </div>
                        </div>
                        <div className="block container ">
                            <img className="qar" src={qar} alt=""/>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default QrCode;