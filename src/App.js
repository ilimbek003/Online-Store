import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Promotion from "./pages/Promotion";
import SpecialDetails from "./pages/SpecialDetails";
import SpecialDetailsId from "./pages/SpecialDetailsId";
import GetShotDetails from "./pages/GetShotDetails";
import GetShotDetailsId from "./pages/GetShotDetailsId";
import ToHelpPage from "./pages/ToHelpPage";
import MessagePage from "./pages/MessagePage";
import Settings from "./pages/Settings";
import DeliveryAddress from "./pages/DeliveryAddress";
import NewAddress from "./pages/NewAddress";
import PersonalArea from "./pages/PersonalArea";
import Project from "./pages/Project";
import QrCode from "./pages/QrCode";
import MyCouponDetails from "./pages/MyCouponDetails";
import MyCouponDetailsId from "./pages/MyCouponDetailsId";
import MyInformation from "./pages/MyInformation";
import MyOrders from "./pages/MyOrders";
import BuyHistory from "./pages/BuyHistory";
import RegistrationQuestionnaire from "./pages/RegistrationQuestionnaire";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetThePassword from "./pages/ResetThePassword";
import Activation from "./pages/Activation";
import "react-toastify/dist/ReactToastify.css";
import { AlertData } from "./UI/Alert/Alert";
import ActivationCode from "./pages/ActivationCode";
import NewResetThePassword from "./pages/NewResetThePassword";

const App = () => {
  const [openAlert, setOpenAlert] = useState({
    open: false,
    props: "",
    text: "",
  });
  const location = useLocation();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
  }, [location]);

  function FuncAlert(text, props) {
    setTimeout(() => {
      setOpenAlert({
        ...openAlert,
        open: true,
        text: text,
        props: props,
      });
    }, 200);
    setOpenAlert({ ...openAlert, open: false });
  }

  useEffect(() => {
    if (openAlert.open) {
      const timeoutId = setTimeout(() => {
        setOpenAlert({ ...openAlert, open: false });
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [openAlert.open]);

  return (
    <>
      {/* <ToastContainer /> */}
      {openAlert.open && (
        <AlertData
          state={openAlert}
          setState={setOpenAlert}
          propsData={openAlert.props}
          text={openAlert.text}
        />
      )}
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="/special-details" element={<SpecialDetails />} />
          <Route
            path="/special-details-id/:id"
            element={<SpecialDetailsId />}
          />
          <Route path="/get-shot-details" element={<GetShotDetails />} />
          <Route
            path="/get-shot-details-id/:id"
            element={<GetShotDetailsId />}
          />
          <Route path="/to-help-page" element={<ToHelpPage />} />
          <Route path="/message-page" element={<MessagePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/new-address" element={<NewAddress />} />
          <Route path="/dashboard" element={<PersonalArea />} />
          <Route path="shop-all/*" element={<Project />} />
          <Route path="/qr-cod" element={<QrCode />} />
          <Route path="/my-information" element={<MyInformation />} />
          <Route
            path="/registration"
            element={<Registration Alert={FuncAlert} />}
          />
          <Route
            path="/registration-questionnare"
            element={<RegistrationQuestionnaire />}
          />
          <Route path="/login" element={<Login Alert={FuncAlert} />} />
          <Route
            path="/reset-the-password"
            element={<ResetThePassword Alert={FuncAlert} />}
          />
          <Route
            path="/activation"
            element={<Activation Alert={FuncAlert} />}
          />
          <Route
            path="/activation-code"
            element={<ActivationCode Alert={FuncAlert} />}
          />
          <Route path="/new-reset-password" element={<NewResetThePassword Alert={FuncAlert}/>}/>
          {/* <Route path="/my-coupon-details" element={<MyCouponDetails />} />
        <Route
          path="/my-coupon-details-id/:id"
          element={<MyCouponDetailsId />}
        /> */}
          {/* <Route path="/my-orders" element={<MyOrders />} /> */}
          {/* <Route path="/buy-history" element={<BuyHistory />} /> */}
          {/* <Routes path="/delivery-address" element={<DeliveryAddress />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
