import React, { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Promotion from "./pages/Promotion";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import SpecialDetails from "./pages/SpecialDetails";
import SpecialDetailsId from "./pages/SpecialDetailsId";
import GetShotDetails from "./pages/GetShotDetails";
import GetShotDetailsId from "./pages/GetShotDetailsId";
import ToHelpPage from "./pages/ToHelpPage";
import MessagePage from "./pages/MessagePage";
import Settings from "./pages/Settings";
import DeliveryAddress from "./pages/DeliveryAddress";
import NewAddress from "./pages/NewAddress";
import Cart from "./pages/Cart";
import PersonalArea from "./pages/PersonalArea";

const App = () => {
  const [shop, setShop] = useState(false)
  const [modals ,setModals] = useState(false)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main  />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="/special-details" element={<SpecialDetails />} />
        <Route path="/special-details-id/:id" element={<SpecialDetailsId />} />
        <Route path="/get-shot-details" element={<GetShotDetails />} />
        <Route path="/get-shot-details-id/:id" element={<GetShotDetailsId />} />
        <Route path="/to-help-page" element={<ToHelpPage />} />
        <Route path="/message-page" element={<MessagePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/delivery-address" element={<DeliveryAddress />} />
        <Route path="/new-address" element={<NewAddress />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="shop/:id" element={<ShopDetail
            shop={shop}
            setModal={setModals}
        />}/>
        <Route path="search" element={<Search modal={modals} setModal={setModals}/>}/>
        <Route path="filter" element={<Filter/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<PersonalArea/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
