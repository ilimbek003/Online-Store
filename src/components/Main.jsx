import React from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import qar from "../img/qr-код.gif";
import Header from "./Header";
import MyCoupon from "./MyCoupon";

const Main = ({modal,setModal}) => {
    return (
        <>
            <Header modal={modal} setModal={setModal}/>
            <div className="container">
                <div className="bonus_block_all">
                    <h1 className="title_h1">26 бонус</h1>
                    <img src={qar} alt=""/>
                </div>
            </div>
            <MyCoupon/>
        </>
    );
};

export default Main;
