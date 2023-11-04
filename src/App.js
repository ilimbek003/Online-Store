import React, {useState} from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Promotion from "./pages/Promotion";
import Shop from "./pages/Shop"
import ShopDetail from "./pages/ShopDetail";
import Search from "./pages/Search";
import Filter from "./pages/Filter";

const App = () => {
    const [modal, setModal] = useState(false);
    const [shop, setShop] = useState(false)
    const [modals ,setModals] = useState(false)
    const [filter ,setFilter] = useState(false)
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main modal={modal} setModal={setModal}/>}/>
                <Route path="promotion" element={<Promotion/>}/>
                <Route path="shop" element={<Shop />}/>
                {/*<Route path="shop/:id" element={<ShopDetail*/}
                {/*    shop={shop}*/}
                {/*    setModal={setModals}*/}
                {/*/>}/>*/}
                {/*<Route path="search" element={<Search modal={modals} setModal={setModals}/>}/>*/}
                {/*<Route path="filter" element={<Filter/>}/>*/}
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
