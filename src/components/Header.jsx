import React from "react";
import ReactDOM from "react-dom/client";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { gvplogo, yearslogo, nsslogo, cfsrlogo } from "../images/index";

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 flex items-center justify-between">
            <img src= { gvplogo } alt="GVP Logo" />
            <img src={ yearslogo } alt="25 Years Logo" />
            <div className="">
                <h1>GAYATRI VIDYA PARISHAD COLLEGE OF ENGINEERING (A)</h1>
                <p>Approved by AICTE, New Delhi and Affiliated to Andhra University</p>
                <p>Madhurawada, Visakhapatnam - 530048</p>
            </div>
            <img src={ nsslogo } alt="NSS Logo" />
            <img src={ cfsrlogo } alt="CFSR Logo" />
        </div>
    )
}

export default Header;