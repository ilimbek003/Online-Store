import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import {BsShop} from "react-icons/bs"
import {LuBadgePercent} from 'react-icons/lu'
import { NavLink } from 'react-router-dom';
import '../style/css/main.css'
const Footer = () => {
    return (
        <div id="footer">
            <div className="navs">
                <div className="flex_block">
                    <NavLink exact to="/" activeClassName="active">
                        <AiOutlineHome className="fi ai" />
                        <span>Башкы</span>
                    </NavLink>
                </div>
                <div className="flex_block">
                    <NavLink to="/shop" activeClassName="active">
                        <BsShop className="fi ai" />
                        <span>Дyкон</span>
                    </NavLink>
                </div>
                <NavLink to="/qr-cod">
                    <div className="logo"></div>
                </NavLink>
                <div className="flex_block">
                    <NavLink to="/promotion" activeClassName="active">
                        <LuBadgePercent className="fi ai" />
                        <span>Акциялар</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;