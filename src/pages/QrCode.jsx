import React, {useEffect} from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import "../style/css/modal.css";
import {HiArrowLongLeft, HiMiniArrowRightOnRectangle} from "react-icons/hi2";
import qar from "../img/qr-код.gif";
import {useNavigate} from "react-router";
import {LiaQuestionCircleSolid} from "react-icons/lia";
import {DiVisualstudio} from "react-icons/di";
import {getDate} from "../Redux/reduser/getData";
import {useDispatch, useSelector} from "react-redux";


const QrCode = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem('token'));
    const {data} = useSelector(state => state.myData);

    useEffect(() => {
        dispatch(getDate());
    }, [dispatch]);
    console.log(data)

    return (
        <>
            {
                token ?
                    <div id="modal">
                        <div className="nav">
                            <div className="container d-flex justify-content-between align-items-center">
                                <span></span>
                                <p className="qr_cod_header">
                                    Сиздин Bekbekei картаныз <br/>{" "}
                                    <span className="sapn">{data.bonus_id}</span>
                                </p>
                                <LiaQuestionCircleSolid
                                    className="fi"
                                    onClick={() => navigate("/to-help-page")}
                                />
                            </div>
                        </div>
                        <div className="block container ">
                            <img className="qar" src={data.qrimg} alt=""/>
                        </div>
                    </div> : (
                        ""
                    )
            }
        </>
    );
};

export default QrCode;
