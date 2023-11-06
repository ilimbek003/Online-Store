import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Shop from "./Shop";
import ShopDetail from "./ShopDetail";
import Search from "./Search";
import Filter from "./Filter";
import Cart from "./Cart";

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
                localStorage.setItem(`activePlus_${itemTo.id}`, 'active_plus');
                return updatedCart
            })
            setPlus((prevPlus) => {
                return {...prevPlus, [id]: (prevPlus[id] || 0) + 1}
            })
        }
    }


    const handleMinus = (id) => {
        const itemTo = data.find((el) => el.id === id)
        if (itemTo) {
            setShopCart((prevShopCart) => {
                const updatedCart = [...prevShopCart, itemTo]
                localStorage.removeItem('shopCart')
                localStorage.removeItem(`activePlus_${itemTo.id}`);
                return updatedCart
            })
            setPlus((prevPlus) => {
                return {...prevPlus, [id]: (prevPlus[id] || 0) - 1}
            })
        }
    }


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
            </Routes>
        </div>
    );
};

export default Project;