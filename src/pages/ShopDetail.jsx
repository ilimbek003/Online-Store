import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {HiArrowLongLeft, HiOutlineArrowsUpDown} from "react-icons/hi2";
import {BsBookmark, BsSearch} from "react-icons/bs";
import {FiFilter} from "react-icons/fi";
import {AiOutlineClose, AiOutlinePlus} from "react-icons/ai";
import "../style/css/modal.css"
const ShopDetail = ({data, setData, saveToLocalStorage}) => {
    const {id} = useParams();
    const [tabs, setTabs] = useState([]);
    const navigate = useNavigate();
    const [filter, setFilter] = useState(false)
    useEffect(() => {
        axios
            .get(`https://nurbektmusic.pythonanywhere.com/product/by-cat/${id}`)
            .then((response) => setData(response.data))
            .catch();
    }, [id]);
    const handleId = (selectedId) => {
        axios
            .get(`https://nurbektmusic.pythonanywhere.com/product/list/sub_cat/${selectedId}`)
            .then((response) => setTabs(response.data))
            .catch();
    };

    useEffect(() => {
        handleId(id);
    }, [id]);
    return (
        <>
            <div id="modal">
                <div className="line">
                    <div className="nav">
                        <div className="container d-flex justify-content-between align-items-center">
                            <HiArrowLongLeft className="fi" onClick={() => navigate('/shop-all/shop')}/>
                            <h4 className="title_h5 all_title_one">
                                {/*{data && data[0] && data[0].name}*/}
                                Name
                            </h4>
                            <BsSearch className="fi" onClick={() => navigate('/shop-all/search')}/>
                        </div>
                        <div className="container d-flex  align-items-center mt-3 scroll">
                            {
                                tabs.map((el) => (
                                    <div className="from_btn" key={el.id}>
                                        <button className="btn_tabs">{el.name}</button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="container mt-3">
                            <div className="filter">
                                <div className="dnow d-flex align-items-center"
                                     onClick={() => navigate('/shop-all/filter')}>
                                    <FiFilter className="icons"/>
                                    <h6 className="title_one mt_one">Фильтр</h6>
                                </div>
                                <div className="dnow d-flex align-items-center" onClick={() => setFilter(true)}>
                                    <HiOutlineArrowsUpDown className="icons"/>
                                    <h6 className="title_one mt_one">Иретоо</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row_one">
                        {data.map((el) => (
                            <div className="col-6 mt-4" key={el.id}>
                                <div
                                    className="blocks"
                                    onClick={() => navigate(`/shop-all/product/${el.id}`)}
                                >
                                    <img src={el.images} alt=""/>
                                </div>
                                <div className="all">
                                    <h3 className="title_one mt">{el.title}</h3>
                                    <div className="d-flex  justify-content-between mt-2">
                                        <p className="project">
                                            <span>{el.pack}</span>
                                        </p>
                                        <h2>{el.price} сом</h2>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="marks">
                                        <BsBookmark
                                            className={
                                                localStorage.getItem(`activeItem_${el.id}`) === 'active'
                                                    ? 'active'
                                                    : ''
                                            }
                                            onClick={() => saveToLocalStorage(el.id)}
                                        />
                                    </div>
                                    <div className="plus ">
                                        {/*<AiOutlineMinus*/}
                                        {/*    className="fi"*/}
                                        {/*/>*/}
                                        <p className="title_one font">
                                            Кошуу
                                        </p>
                                        <AiOutlinePlus
                                            className="fi ai_out"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {
                filter === true && (
                    <div className="filters_oll" onClick={() => setFilter(false)}>
                        <div className="order" onClick={(e) => e.stopPropagation()}>
                            <div className="container">
                                <div className="d-flex justify-content-between">
                                    <h6 className="title_h3 orders">Иретоо</h6>
                                    <AiOutlineClose className="icons" onClick={() => setFilter(false)}/>
                                </div>
                                <div className="d-flex mt_bt">
                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox"
                                           value="yes"/>
                                    <h6 className="title_one m-lg-2">По умолчение</h6>
                                </div>
                                <div className="d-flex mt_bt">
                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox"
                                           value="yes"/>
                                    <h6 className="title_one m-lg-2">Сначала популярные</h6>
                                </div>
                                <div className="d-flex mt_bt">
                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox"
                                           value="yes"/>
                                    <h6 className="title_one m-lg-2">Сначала акционный</h6>
                                </div>
                                <div className="d-flex mt_bt">
                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox"
                                           value="yes"/>
                                    <h6 className="title_one m-lg-2">Сначала дешевые</h6>
                                </div>
                                <div className="d-flex mt_bt">
                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox"
                                           value="yes"/>
                                    <h6 className="title_one m-lg-2">Сначала дорогие</h6>
                                </div>
                                <div className="d-flex mt_bt">
                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox"
                                           value="yes"/>
                                    <h6 className="title_one m-lg-2">По алфавиту от А до Я</h6>
                                </div>
                                <div className="d-flex mt_bt">
                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox"
                                           value="yes"/>
                                    <h6 className="title_one m-lg-2">По алфавиту от Я до А</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ShopDetail;