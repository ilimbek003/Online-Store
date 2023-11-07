import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Shop from "./Shop";
import ShopDetail from "./ShopDetail";
import Search from "./Search";
import Filter from "./Filter";
import Cart from "./Cart";
import Basket from "../pages/Basket"

const Project = () => {
    const [modals, setModals] = useState(false)
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [shopCart, setShopCart] = useState([]);
    const [plus, setPlus] = useState({})

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
                return {...prevPlus, [id]: (prevPlus[id] || 0) + 1}
            })
        }
    }


    const handleMinus = (id) => {
        const itemIndex = shopCart.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
            setShopCart((prevShopCart) => {
                const updatedCart = [...prevShopCart];
                updatedCart.splice(itemIndex, 1);
                localStorage.setItem('shopCart', JSON.stringify(updatedCart));
                return updatedCart;
            });
            setPlus((prevPlus) => {
                return { ...prevPlus, [id]: (prevPlus[id] || 0) - 1 };
            });
        }

        // Проверяем, если элемент с данным id не найден в updatedCart, то удаляем ключ
        const datas = JSON.parse(localStorage.getItem('shopCart'));
        if (!datas.some((elem) => String(elem.id) === String(id))) {
            localStorage.removeItem(`activePlus_${id}`);
        }
    };






    return (
        <div>
            <Routes>
                <Route path="shop" element={<Shop/>}/>
                <Route path="shop/:id" element={<ShopDetail
                    data={data}
                    setData={setData}
                    saveToLocalStorage={saveToLocalStorage}
                    plus={plus}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />}/>
                <Route path="search" element={<Search modal={modals} setModal={setModals}/>}/>
                <Route path="filter" element={<Filter/>}/>
                <Route path="cart" element={<Cart saveToLocalStorage={saveToLocalStorage}/>}/>
                <Route path="basket" element={<Basket
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