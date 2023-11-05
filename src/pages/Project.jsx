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
    return (
        <div>
            <Routes>
                <Route path="shop" element={<Shop/>}/>
                <Route path="shop/:id" element={<ShopDetail
                    data={data}
                    setData={setData}
                    saveToLocalStorage={saveToLocalStorage}
                />}/>
                <Route path="search" element={<Search modal={modals} setModal={setModals}/>}/>
                <Route path="filter" element={<Filter/>}/>
                <Route path="cart" element={<Cart saveToLocalStorage={saveToLocalStorage}/>}/>
            </Routes>
        </div>
    );
};

export default Project;