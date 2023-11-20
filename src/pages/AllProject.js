import React from 'react';
import {Route, Routes} from "react-router-dom";
import Registration from "./Registration";
import RegistrationQuestionnaire from "./RegistrationQuestionnaire";
import Login from "./Login";
import ResetThePassword from "./ResetThePassword";
import Activation from "./Activation";
import ActivationCode from "./ActivationCode";
import NewResetThePassword from "./NewResetThePassword";
import ToComeIn from "../components/ToComeIn";

const AllProject = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/registration"
                    element={<Registration Alert={FuncAlert}/>}
                />
                <Route
                    path="/registration-questionnare"
                    element={<RegistrationQuestionnaire/>}
                />
                <Route path="/login" element={<Login Alert={FuncAlert}/>}/>
                <Route
                    path="/reset-the-password"
                    element={<ResetThePassword Alert={FuncAlert}/>}
                />
                <Route
                    path="/activation"
                    element={<Activation Alert={FuncAlert}/>}
                />
                <Route
                    path="/activation-code"
                    element={<ActivationCode Alert={FuncAlert}/>}
                />
                <Route path="/new-reset-password" element={<NewResetThePassword Alert={FuncAlert}/>}/>
            </Routes>
            <div className="container">
                <Routes>
                    <Route path="to-come-in" element={<ToComeIn/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default AllProject;