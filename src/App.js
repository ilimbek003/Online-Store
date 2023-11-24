import React, {useEffect, useState} from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Routes, Route, useLocation} from "react-router-dom";
import Promotion from "./pages/Promotion";
import SpecialDetails from "./pages/SpecialDetails";
import SpecialDetailsId from "./pages/SpecialDetailsId";
import GetShotDetails from "./pages/GetShotDetails";
import GetShotDetailsId from "./pages/GetShotDetailsId";
import ToHelpPage from "./pages/ToHelpPage";
import MessagePage from "./pages/MessagePage";
import Settings from "./pages/Settings";
import NewAddress from "./pages/NewAddress";
import PersonalArea from "./pages/PersonalArea";
import Project from "./pages/Project";
import QrCode from "./pages/QrCode";
import MyInformation from "./pages/MyInformation";
import "react-toastify/dist/ReactToastify.css";
import {AlertData} from "./UI/Alert/Alert";
import AllProject from "./pages/AllProject";
import {useNavigate} from "react-router";
import AboutApplication from "./pages/AboutApplication";
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import {PiAppStoreLogoBold} from "react-icons/pi"
import {FaGooglePlay} from "react-icons/fa"
import {FaCloudArrowDown} from "react-icons/fa6";
import axios from "axios";

const App = () => {
    const [openAlert, setOpenAlert] = useState({
        open: false,
        props: "",
        text: "",
    });
    const location = useLocation();
    const navigate = useNavigate();
    const [versons, setVersons] = useState([])
    const [upDate, setUpDate] = useState(true)
    const handleScroll = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
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
        setOpenAlert({...openAlert, open: false});
    }

    useEffect(() => {
        if (openAlert.open) {
            const timeoutId = setTimeout(() => {
                setOpenAlert({...openAlert, open: false});
            }, 3000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [openAlert.open]);

    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/personal/to-come-in");
        }
    }, [token]);
    useEffect(() => {
        axios
            .get("https://hit-travel.org/versions")
            .then((response) => {
                setVersons(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    const versionConst = "1.0.21"

    useEffect(() => {
        if (version && version.version && String(versionConst).replaceAll('.', '') < String(version.version).replaceAll('.', '')) {
            setUpDate(true)
        }
    }, [version])

    return (
        <>

            {upDate &&
                <div className="verson">
                    <div className="verson_block">
                        <FaCloudArrowDown color="var(--orange)" size={75}/>
                        <h1>Доступно обновление</h1>
                        <a href={versons.appstore} target="blank" className="dowload app">
                            <button className="button_form">
                                <PiAppStoreLogoBold size={20}/>
                                Обновить
                            </button>
                        </a>
                        <a href={versons.googleplay} target="blank" className="dowload play">
                            <button className="button_form">
                                <FaGooglePlay size={20}/>
                                Обновить
                            </button>
                        </a>
                        <p onClick={() => setUpDate(false)} className="up_date">Обновить позже</p>
                    </div>
                </div>
            }
            {token ? (
                <div>
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
                            <Route path="/" element={<Main/>}/>
                            <Route path="promotion" element={<Promotion/>}/>
                            <Route path="/special-details" element={<SpecialDetails/>}/>
                            <Route
                                path="/special-details-id/:id"
                                element={<SpecialDetailsId/>}
                            />
                            <Route path="/get-shot-details" element={<GetShotDetails/>}/>
                            <Route
                                path="/get-shot-details-id/:id"
                                element={<GetShotDetailsId/>}
                            />
                            <Route path="/to-help-page" element={<ToHelpPage/>}/>
                            <Route path="/message-page" element={<MessagePage/>}/>
                            <Route path="/settings" element={<Settings Alert={FuncAlert}/>}/>
                            <Route path="/new-address" element={<NewAddress/>}/>
                            <Route path="/dashboard" element={<PersonalArea/>}/>
                            <Route path="shop-all/*" element={<Project/>}/>
                            <Route path="/qr-cod" element={<QrCode/>}/>
                            <Route path="/application" element={<AboutApplication/>}/>
                            <Route
                                path="/my-information"
                                element={<MyInformation Alert={FuncAlert}/>}
                            />
                            {/*<Route path="/my-coupon-details" element={<MyCouponDetails/>}/>*/}
                            {/*<Route*/}
                            {/*    path="/my-coupon-details-id/:id"*/}
                            {/*    element={<MyCouponDetailsId/>}*/}
                            {/*/>*/}
                            {/* <Route path="/my-orders" element={<MyOrders />} /> */}
                            {/* <Route path="/buy-history" element={<BuyHistory />} /> */}
                            {/* <Routes path="/delivery-address" element={<DeliveryAddress />} /> */}
                        </Routes>
                        <Footer/>
                    </div>
                </div>
            ) : (
                <div className="background_register_login">
                    <Routes>
                        <Route
                            path="personal/*"
                            element={<AllProject Alert={FuncAlert}/>}
                        />
                    </Routes>
                </div>
            )}
        </>
    );
};

export default App;
