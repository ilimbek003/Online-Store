import React from 'react';
import {HiArrowLongLeft} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";


const Search = () => {
    const navigate = useNavigate()

    return (
        <div id="modal_one">
            <div className="nav">
                <div className="container d-flex justify-content-between align-items-center">
                    <HiArrowLongLeft className="fi" onClick={() => navigate(-1)}/>
                    <h4 className="title_h5 all_title">Издоо</h4>
                    <div/>
                </div>
                <div className="container">
                    <input className="input_form_all mt-4" type="search" placeholder="Товарларды табуу"/>
                </div>
            </div>
        </div>
    );
};

export default Search;