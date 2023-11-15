import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Shop from "./Shop";
import ShopDetail from "./ShopDetail";
import Search from "./Search";
import Filter from "./Filter";
import Cart from "./Cart";
import Basket from "../pages/Basket"
import Product from "./Product";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

const MIN = 50;
const MAX = 3000;
const Project = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [modals, setModals] = useState(false)
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [shopCart, setShopCart] = useState([]);
    const [plus, setPlus] = useState({})
    const [requests, setRequests] = useState({
        budget: [MIN, MAX],
    });
    const saveToLocalStorage = (id) => {
        const itemToAdd = data.find(item => item.id === id);
        if (itemToAdd) {
            const updatedCart = [...cart];
            if (!updatedCart.includes(itemToAdd)) {
                updatedCart.push(itemToAdd);
                localStorage.setItem(`activeItem_${itemToAdd.id}`, 'active');
            } else {
                updatedCart.splice(updatedCart.indexOf(itemToAdd), 1);
                localStorage.removeItem(`activeItem_${itemToAdd.id}`);
            }
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };
    const handlePlus = (id) => {
        const itemTo = data.find((el) => el.id === id)
        if (itemTo) {
            setShopCart((prevShopCart) => {
                const updatedCart = [...prevShopCart, itemTo]
                localStorage.setItem('shopCart', JSON.stringify(updatedCart))
                localStorage.setItem(`activePlus_${itemTo.id}`, `${itemTo.id}`);
                return updatedCart
            })
            setPlus((prevPlus) => {
                const newPlus = {...prevPlus, [id]: (prevPlus[id] || 0) + 1};
                localStorage.setItem('plus', JSON.stringify(newPlus));
                return newPlus;
            })
        }
        console.log(itemTo)
    }
    const handleMinus = (id) => {
        const itemIndex = shopCart.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
            setShopCart((prevShopCart) => {
                const updatedCart = [...prevShopCart];
                updatedCart.splice(itemIndex, 1);
                localStorage.setItem('shopCart', JSON.stringify(updatedCart));
                const isItemStillInCart = updatedCart.some((item) => item.id === id);
                if (!isItemStillInCart) {
                    localStorage.removeItem(`activePlus_${id}`);
                }
                return updatedCart;
            });
            setPlus((prevPlus) => {
                const newPlus = {...prevPlus, [id]: (prevPlus[id] || 0) - 1};
                if (newPlus[id] < 0) {
                    newPlus[id] = 0;
                }
                localStorage.setItem('plus', JSON.stringify(newPlus));
                return newPlus;
            });

        }
    };

    const calculateMinMax = () => {
        const url = `https://nurbektmusic.pythonanywhere.com/product/list/filter?price_from=${requests.budget[0]}&price_to=${requests.budget[1]}`;
        axios.get(url)
            .then(response => {
                const filteredProducts = response.data;
                setData(filteredProducts);
                const el = filteredProducts[0];
                navigate(`/shop-all/shop/${el.id} `);
            })
            .catch(error => {
                console.error("Ошибка при получении данных:", error);
            });
    };



    return (
        <div>
            <Routes>
                <Route path="shop" element={<Shop/>}/>
                <Route path="shop/:cat" element={<ShopDetail
                    data={data}
                    setData={setData}
                    saveToLocalStorage={saveToLocalStorage}
                    plus={plus}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />}/>
                <Route path="search" element={<Search modal={modals} setModal={setModals}/>}/>
                <Route path="filter" element={<Filter
                    calculateMinMax={calculateMinMax}
                    data={data}
                    requests={requests}
                    setRequests={setRequests}
                    MIN={MIN}
                    MAX={MAX}
                />}/>
                <Route path="cart" element={<Cart
                    saveToLocalStorage={saveToLocalStorage}
                    plus={plus}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />}/>
                <Route path="basket" element={<Basket
                    saveToLocalStorage={saveToLocalStorage}
                    plus={plus}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />}/>
                <Route path="product/:id" element={<Product
                    saveToLocalStorage={saveToLocalStorage}
                    plus={plus}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />}/>
            </Routes>
        </div>
    );
};

export default Project;