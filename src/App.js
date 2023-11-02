import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Promotion from "./pages/Promotion";
import GetShot from "./components/GetShot";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="promotion" element={<Promotion/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
