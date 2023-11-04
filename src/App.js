import React, {useState} from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Promotion from "./pages/Promotion";
import Shop from "./pages/Shop"
import ShopDetail from "./pages/ShopDetail";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import SpecialDetails from "./pages/SpecialDetails";
import SpecialDetailsId from "./pages/SpecialDetailsId";
import GetShotDetails from "./pages/GetShotDetails";
import GetShotDetailsId from "./pages/GetShotDetailsId";
import ToHelpPage from "./pages/ToHelpPage";
import MessagePage from "./pages/MessagePage";

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main modal={modal} setModal={setModal} />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="/special-details" element={<SpecialDetails />} />
        <Route path="/special-details-id/:id" element={<SpecialDetailsId />} />
        <Route path="/get-shot-details" element={<GetShotDetails />} />
        <Route path="/get-shot-details-id/:id" element={<GetShotDetailsId />} />
        <Route path="/to-help-page" element={<ToHelpPage />} />
        <Route path="/message-page" element={<MessagePage />} />
          <Route path="shop" element={<Shop />}/>
          {/*<Route path="shop/:id" element={<ShopDetail*/}
          {/*    shop={shop}*/}
          {/*    setModal={setModals}*/}
          {/*/>}/>*/}
          {/*<Route path="search" element={<Search modal={modals} setModal={setModals}/>}/>*/}
          {/*<Route path="filter" element={<Filter/>}/>*/}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
