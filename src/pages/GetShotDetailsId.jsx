import React, {useEffect, useState} from "react";
import "../style/css/main.css";
import {useNavigate, useParams} from "react-router";
import {IoMdClose} from "react-icons/io";
import axios from "axios";
import {url} from "../Api";


const GetShotDetailsId = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get(url + `/card/${id}`)
            .then((response) => setCard(response.data))
            .catch()
    }, [])
    return (
        <div id="modal">
            <div className="get_shot_details_id">
                <div className="nav">
                    <div className="container d-flex justify-content-between align-items-center ">
                        <span></span>
                        <p>
                            Условия акции</p>
                        <IoMdClose
                            className="fi"
                            onClick={() => navigate(-1)}
                            size={22}
                            style={{cursor: "pointer"}}
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="details_title">
                        <h4>01.11-15.11</h4>
                        <h4>Успей купить</h4>
                    </div>
                    <div className="get_details_block_all">
                        <div className="special_details_box">
                            <img className="special_image" src={card.img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetShotDetailsId;
