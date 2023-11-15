import React from 'react';
import {HiArrowLongLeft} from "react-icons/hi2";
import bekbekei from "../img/2.png";
import {LiaQuestionCircleSolid} from "react-icons/lia";
import {useNavigate} from "react-router";
import {useState} from "react";
import {registerCode} from "../Redux/slice/activationReduser";
import {useDispatch} from "react-redux";

const Activation = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const storedPhone = localStorage.getItem("phone");
        dispatch(registerCode({code, phone: storedPhone}));
    };
    return (
        <div id="modal">
            <div className="nav">
                <div className="container d-flex justify-content-between align-items-center ">
                    <HiArrowLongLeft className="fi" onClick={() => navigate(-1)}/>
                    <img className="images" src={bekbekei} alt="Бекбекей"/>
                    <LiaQuestionCircleSolid
                        className="fi"
                        onClick={() => navigate("/to-help-page")}
                    />
                </div>
            </div>
            <div className="container">
                <div className="activation">
                    <p>Введите код, который мы вам отправили на сообщение</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            style={{textAlign: "center"}}
                            className="input_form"
                            value={code}
                            type="number"
                            placeholder="Введите код"
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <button style={{marginTop: 20}} className="registr_btn" type="submit">
                            {loading ? "Загруска..." : "Подвердить"}
                        </button>
                    </form>
                    {/*<p className="re_send">*/}
                    {/*    Отправить снова*/}
                    {/*</p>*/}
                </div>
            </div>
        </div>
    );
};

export default Activation;