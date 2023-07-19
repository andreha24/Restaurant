import React from "react";
import Aside from "../../../components/Aside";
import PersonalArea from "../../../components/PersonalArea";
import PersonalAccount from "../PersonalAccount";

import './index.css'


const PersonalPageHeader = () => {
    return(
        <header className='header-menu'>
            <Aside/>
            <div className='main-wrapper'>
                <div className='main-container'>
                    <PersonalArea/>
                    <PersonalAccount/>
                </div>
            </div>
        </header>
    )
}

export default PersonalPageHeader