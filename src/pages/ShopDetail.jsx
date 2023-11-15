import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {HiArrowLongLeft, HiOutlineArrowsUpDown} from "react-icons/hi2";
import {BsBookmark, BsSearch} from "react-icons/bs";
import {FiFilter} from "react-icons/fi";
import {AiOutlineClose, AiOutlineDelete, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import "../style/css/modal.css"
import {url} from "../Api";
import Filter from "./Filter";
import Slider from "react-slider";

const MIN = 40;
const MAX = 500;
const ShopDetail = ({data, setData, saveToLocalStorage, handlePlus, handleMinus, calculateTabs}) => {
    const [tabs, setTabs] = useState([]);
    const {cat} = useParams();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const [filter, setFilter] = useState(false)
    const [filters, setFilters] = useState(false)
    const [requests, setRequests] = useState({
        budget: [MIN, MAX],
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/product/list?cat=${cat}&pricefrom=${requests.budget[0]}&priceto=${requests.budget[1]}`);
                const categoryProducts = response.data;
                setData(categoryProducts);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchData();
    }, [cat, requests.budget[0], requests.budget[1]]);


    const handleButtonClick = () => {
        setRequests({
            ...requests,
            budget: [MIN, MAX],
        });
        if (filters) {
            navigate(`/shop-all/shop/${cat}/${requests.budget[0]}/${requests.budget[1]}`)
        }
    };

    useEffect(() => {
        axios
            .get(url + `/product/sub-categories/${cat}`)
            .then(response => {
                const categoryProducts = response.data;
                setTabs(categoryProducts);
            })
            .catch(error => {
                console.error("Ошибка при получении данных:", error);
            });
    }, [cat]);
    const mun = JSON.parse(localStorage.getItem('plus'));
    return (
        <>
            <div id="modal">
                <div className="nav_line">
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
                                tabs.map((el, index) => (
                                    <div className="from_btn" key={el.id}>
                                        <button key={el.id}
                                                className={index === selectedIndex ? 'btn_tabs_active' : 'btn_tabs'}
                                        >{el.name}</button>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="container mt-3">
                            <div className="filter">
                                <div className="dnow d-flex align-items-center"
                                     onClick={() => setFilters(true)}>
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
                {
                    filters === true && (
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
                                <button
                                    type="button"
                                    className="btn_button all_btn"
                                    onClick={handleButtonClick}
                                >
                                    Колдонуу
                                </button>
                            </div>
                        </div>
                    )
                }
                <div className="container">
                    <div className="row row_one">
                        {data.map((el) => (
                            <div className="col-6 mt-4" key={el.id}>
                                <div
                                    className="blocks"
                                    onClick={() => navigate(`/shop-all/product/${el.id}`)}
                                >
                                    <img src={el.img} alt=""/>
                                    {
                                        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?
                                            <div className='hover_blocks'>
                                                <h1>{mun[el.id]}</h1>
                                            </div> : ""
                                    }
                                </div>
                                <div className="all">
                                    <h3 className="title_one mt">{el.title}</h3>
                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <p className="project">
                                            <span>{el.pack}</span>
                                        </p>
                                        <h2>{el.price} сом</h2>
                                        <div className="marks">
                                            <BsBookmark
                                                className={
                                                    localStorage.getItem(`activeItem_${el.id}`) === `active`
                                                        ? 'active'
                                                        : ''
                                                }
                                                onClick={() => saveToLocalStorage(el.id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    {/*<div className={*/}
                                    {/*    localStorage.getItem(`activePlus_${el.id}`) === `${el.id}`*/}
                                    {/*        ? 'active_plus'*/}
                                    {/*        : 'plus'*/}
                                    {/*}>*/}
                                    {/*    {*/}
                                    {/*        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                                    {/*            <AiOutlineMinus*/}
                                    {/*                className='fi_ones'*/}
                                    {/*                onClick={() => handleMinus(el.id)}*/}
                                    {/*            /> : ''*/}
                                    {/*    }*/}
                                    {/*    {*/}
                                    {/*        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                                    {/*            (*/}
                                    {/*                <p className="fi_ones">*/}
                                    {/*                    <span key={el.id}>{mun[el.id]}</span>*/}
                                    {/*                    <span>шт</span>*/}
                                    {/*                </p>*/}
                                    {/*            ) :*/}
                                    {/*            (*/}
                                    {/*                <p className='title_one font'>*/}
                                    {/*                    Кошуу*/}
                                    {/*                </p>*/}
                                    {/*            )*/}
                                    {/*    }*/}
                                    {/*    {*/}
                                    {/*        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                                    {/*            <AiOutlinePlus className='fi_ones'*/}
                                    {/*                           onClick={() => handlePlus(el.id)}/>*/}
                                    {/*            :*/}
                                    {/*            <AiOutlinePlus className='fi ai_out'*/}
                                    {/*                           onClick={() => handlePlus(el.id)}/>*/}
                                    {/*    }*/}
                                    {/*</div>*/}
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