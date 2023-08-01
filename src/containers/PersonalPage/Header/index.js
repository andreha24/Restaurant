import React from "react";
import Aside from "../../../components/Aside";
import PersonalArea from "../../../components/PersonalArea";
import PersonalAccount from "../PersonalAccount";

import './index.css'


const PersonalPageHeader = () => {
    return(
        <div className='main-menu-container'>
            <Aside/>
            <div className='main-wrapper'>
                <PersonalArea/>
                <PersonalAccount/>
            </div>
        </div>
    )
}

export default PersonalPageHeader