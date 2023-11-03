import React, { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Promotion from "./pages/Promotion";

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main modal={modal} setModal={setModal} />} />
        <Route path="promotion" element={<Promotion />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
