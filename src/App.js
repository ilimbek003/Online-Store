import React,{useState} from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Promotion from "./pages/Promotion";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="promotion" element={<Promotion/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
