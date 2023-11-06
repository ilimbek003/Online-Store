import React, {useState} from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import qar from "../img/qr-код.gif";
import Header from "./Header";
import MyCoupon from "./MyCoupon";
import QrCode from "../pages/QrCode";
import { useNavigate } from "react-router";

const Main = () => {
    const [ qrCode, setQrCode ] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <Header/>
            <div className="container">
                <div className="bonus_block_all" onClick={() => navigate('/qr-cod')}>
                    <h1 className="title_h1">26 бонус</h1>
                    <img src={qar} alt=""/>
                </div>
            </div>
            <MyCoupon/> 
        </>
    );
};

export default Main;
