import React, {useState} from 'react';
import {HiArrowLongLeft} from "react-icons/hi2";
import Slider from "react-slider";
import {AiOutlineDelete} from "react-icons/ai"
import {useNavigate} from "react-router-dom";
import "../style/css/App.css"
import "../style/css/main.css"

const MIN = 50;
const MAX = 20000;
const Filter = () => {
    const [values, setValues] = useState([MIN, MAX]);
    const [requests, setRequests] = useState({
        budget: [MIN, MAX],
    });
    const navigate = useNavigate()
    return (
        <div id="modal_one">
            <div className="nav">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <HiArrowLongLeft className="fi" onClick={() => navigate(-1)}/>
                        <h4 className="title_h5 all_title_one mt-2">Иреттоолор</h4>
                        <AiOutlineDelete className="fi"/>
                    </div>
                </div>
                <div className="container">
                    <h3 className="title_h4 mt-3" style={{color: '#000'}}>Баасы, сом</h3>
                    <div className="renge mt-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className="value">
                                    <span className="values">{requests.budget[0]}</span>
                                </div>
                                <h6 className="title_h6 nava">Баштап</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="value">
                                    <span className="values"> {requests.budget[1]}</span>
                                </div>
                                <h6 className="title_h6 nava">чейин</h6>
                            </div>
                        </div>
                        <Slider
                            className="slider mt-4"
                            onChange={(newBudget) =>
                                setRequests({...requests, budget: newBudget})
                            }
                            value={requests.budget}
                            min={MIN}
                            max={MAX}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <button className="btn_button all_btn">Колдонуу</button>
            </div>
        </div>
    );
};

export default Filter;