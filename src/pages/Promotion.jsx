import React, {useEffect, useState} from "react";
import {LiaQuestionCircleSolid} from "react-icons/lia";
import bekbekei from "../../src/img/bekbekei-h-logo.svg";
import GetShot from "../components/GetShot";
import SpecialOffers from "../components/SpecialOffers";
import {useNavigate} from "react-router";
import axios from "axios";
import {url} from "../Api"

const Promotion = () => {
    const navigate = useNavigate();
    const [buy, setBuy] = useState([]);
    const [local, setLocal] = useState(localStorage.getItem("token"))


    const headers = {
        Authorization: `Token ${local}`
    }
    useEffect(() => {
        axios
            .get(url + `/card/type/`)
            .then((response) => {
                setBuy(response.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, []);

    return (
        <div className="promotion">
            <div className="nav">
                <div className="container d-flex justify-content-between align-items-center ">
                    <span></span>
                    <img className="images" src={bekbekei} alt="Бекбекей"/>
                    <LiaQuestionCircleSolid
                        className="fi"
                        onClick={() => navigate("/to-help-page")}
                    />
                </div>
            </div>
            <GetShot buy={buy}/>
            <SpecialOffers/>
        </div>
    );
};

export default Promotion;
