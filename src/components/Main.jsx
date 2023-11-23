import React, {useEffect, useState} from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import qar from "../img/qr-код.gif";
import Header from "./Header";
import MyCoupon from "./MyCoupon";
import {useNavigate} from "react-router";
import {DiVisualstudio} from "react-icons/di";
import Storis from "../Storis/Storis";
import GetShot from "./GetShot";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../Redux/reduser/auth";

const Main = () => {
    const [qrCode, setQrCode] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.users);
    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : false;

    return (
        <div className="main-block">
            <Header/>
            <div className="container">
                <div className="margin_top">
                    <Storis token={token}/>
                </div>
                {
                    token ?
                        <div>
                            <div className="margin_top_all">
                                <div className="margin_top_log">
                                    <DiVisualstudio className="dio"/>
                                </div>
                            </div>
                            <div className="bonus_block_all" onClick={() => navigate("/qr-cod")}>
                                <div>
                                    <h4 className="title_h">Бонусная карта</h4>
                                    <h1 className="title_ha">
                                        {user.bonus}
                                        <span>
                                             {user.bonus === null ? "0 бонус" :
                                                 user.bonus
                                             }
                                        </span>
                                    </h1>
                                </div>
                                <img src={user.qrimg} alt=""/>
                            </div>
                        </div> : (
                            ""
                        )
                }
            </div>
            <GetShot token={token}/>
            {/* <MyCoupon /> */}
        </div>
    );
};

export default Main;
