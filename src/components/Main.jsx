import React from 'react';
import "../style/css/main.css"
import "../style/css/App.css"
import qar from "../img/qr-код.gif"

const Main = () => {
    return (
        <div className="container">
            <div className="bonus_block_all">
                <h1 className="title_h1">26 бонус</h1>
                <img  src={qar} alt=""/>
            </div>
        </div>
    );
};

export default Main;