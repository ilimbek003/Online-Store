import React from 'react';
import {HiArrowLongLeft, HiMiniArrowRightOnRectangle} from "react-icons/hi2";
import "../style/css/App.css"
import "../style/css/main.css"
import "../style/css/modal.css"
import {useNavigate} from "react-router-dom";
import {BsBookmark} from "react-icons/bs";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Basket = ({handlePlus, plus, handleMinus}) => {
    const navigate = useNavigate()
    const plusCartFromLocalStorage = JSON.parse(localStorage.getItem('shopCart'));
    const uniqueIds = new Set();
    const idCounts = {};

// Пройдитесь по массиву и подсчитайте количество данных для каждого id
    plusCartFromLocalStorage.forEach((el) => {
        if (!idCounts[el.id]) {
            idCounts[el.id] = 1;
        } else {
            idCounts[el.id]++;
        }
    });

    return (
        <div id="modal">
            <div className="nav nav_line">
                <div className="container d-flex justify-content-between align-items-center">
                    <HiArrowLongLeft onClick={() => navigate(-1)} className="fi"/>
                    <h4 className="title_h5 all_title_one">Корзина</h4>
                    <HiMiniArrowRightOnRectangle className="fi"/>
                </div>
            </div>
            <div className="container">
                {
                    plus === 0 ? "" : (
                        <div className="mt-4 carts">
                            {plusCartFromLocalStorage.map((el, id) => {
                                if (!uniqueIds.has(el.id)) {
                                    uniqueIds.add(el.id);
                                    return (
                                        <div className=" mt-4" key={el.id}>
                                            <div className="row">
                                                <div
                                                    className="blocks col-4"
                                                    onClick={() => navigate(`/shop-all/product/${el.id}`)}
                                                >
                                                    <img className="img_block" src={el.images} alt=""/>
                                                </div>
                                                <div className="col-8 ml">
                                                    <div className="all">
                                                        <h3 className="title_one mt">{el.title}</h3>
                                                        <div className="d-flex  justify-content-between mt-2">
                                                            <p className="project">
                                                                <span>{el.pack}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-2">
                                                        <div className={
                                                            localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                                                ? 'active_plus act'
                                                                : 'plus pluses'
                                                        }>
                                                            {
                                                                (plus[el.id] || 0) === 0 ? "" : <AiOutlineMinus
                                                                    className={
                                                                        localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                                                            ? 'fi_ones'
                                                                            : 'fi'
                                                                    }
                                                                    onClick={() => handleMinus(el.id)}
                                                                />
                                                            }
                                                            <p className={
                                                                localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                                                    ? 'fi_ones'
                                                                    : 'title_one font'
                                                            }
                                                            >
                                                                {
                                                                    idCounts[el.id]
                                                                }
                                                                {/*{*/}
                                                                {/*    (plus[el.id] || 0) === 0 ? " Кошуу" : plus[el.id]*/}
                                                                {/*}*/}
                                                            </p>
                                                            <AiOutlinePlus
                                                                className={
                                                                    localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                                                        ? 'fi_ones'
                                                                        : 'fi ai_out'
                                                                }
                                                                onClick={() => handlePlus(el.id)}
                                                            />
                                                        </div>
                                                        <div className="all">
                                                            <h2>{el.price} сом</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                (plus[el.id] || 0) === 0 ? "" :
                                                    <div className="container">
                                                        <button className="btn_button"
                                                                onClick={() => navigate("/shop-all/basket")}>
                                                            {plus[el.id]} - {plus[el.id] * el.price}
                                                        </button>
                                                    </div>
                                            }
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Basket;