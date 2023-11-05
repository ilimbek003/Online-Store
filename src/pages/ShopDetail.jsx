import React, {useState, useEffect} from 'react';
import Function from "./Function";
import "../style/css/modal.css"

const ShopDetail = () => {
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
        <>
            <Function
                data={data}
                setData={setData}
                saveToLocalStorage={saveToLocalStorage}
            />
        </>
    );
};

export default ShopDetail;