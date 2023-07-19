import React from "react";
import Aside from "../../../components/Aside";
import Menu from "../Menu";
import PersonalArea from "../../../components/PersonalArea";

import './index.css'

const MenuPageHeader = () => {
    return(
            <header className='header-menu'>
                <Aside/>
                <div className='main-wrapper'>
                   <div className='main-container'>
                           <PersonalArea/>
                           <Menu/>
                   </div>
                </div>
            </header>
    )
}

export default MenuPageHeader

