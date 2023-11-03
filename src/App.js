import React, { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Promotion from "./pages/Promotion";

const App = () => {
<<<<<<< HEAD
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="promotion" element={<Promotion/>}/>
            </Routes>
            <Footer/>
        </div>
    );
=======
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
>>>>>>> 30da52bb51d9457d9d35ec78adf1d227bccde3fa
};

export default App;
