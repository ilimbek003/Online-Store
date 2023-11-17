import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {useNavigate} from "react-router";
import "../style/css/main.css";
import promotionkg from "../../src/img/promotionkg.jpg";
import kola from "../../src/img/kola.jpg";
import manty from "../../src/img/manty.jpg";
import globus from "../../src/img/globus.jpg";
import hleb from "../../src/img/hleb.jpg";
import {DiVisualstudio} from "react-icons/di";
import qar from "../img/qr-код.gif";

const shot = [
    {
        id: 1,
        image: hleb,
    },
    {
        id: 2,
        image: globus,
    },
    {
        id: 3,
        image: kola,
    },
    {
        id: 4,
        image: promotionkg,
    },
    {
        id: 5,
        image: manty,
    },
];

const GetShot = ({token}) => {
    const navigate = useNavigate();

    return (
        <>
            {
                token ?
                    <div className="get_shot">
                        <div className="container">
                            <div className="title">
                                <p>Сатып алууга шашыл</p>
                                <h4
                                    className="title_add"
                                    onClick={() => navigate("/get-shot-details")}
                                >
                                    Бардыгы <MdOutlineKeyboardArrowRight size={20}/>
                                </h4>
                            </div>
                            <div className="get_block_all">
                                {shot.map((el, id) => (
                                    <div
                                        key={id}
                                        onClick={() => navigate(`/get-shot-details-id/${el.id}`)}
                                        className="special_box"
                                    >
                                        <div className="div_box">
                                            <img
                                                className="special_image"
                                                src={el.image}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> : (
                        ""
                    )
            }
        </>
    );
};

export default GetShot;
