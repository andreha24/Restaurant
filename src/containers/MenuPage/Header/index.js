import React from "react";
import Aside from "../../../components/Aside";
import Menu from "../Menu";
import Contacts from "../../../components/Contacts";
import PersonalArea from "../../../components/PersonalArea";

import './index.css'

const MenuPageHeader = () => {
    return(
            <div className='main-menu-container'>
                <Aside/>
                <div className='main-wrapper'>
                   <>
                           <PersonalArea/>
                            <div className='main-container'>
                                <Menu/>
                                <Contacts/>
                            </div>
                   </>
                </div>
            </div>
    )
}

export default MenuPageHeader

