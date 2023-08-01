import React from "react";
import Aside from "../../../components/Aside";
import Cart from "../Cart";
import PersonalArea from "../../../components/PersonalArea";
import Contacts from "../../../components/Contacts";

import './index.css'

const CartPageHeader = () => {
    return(
        <div className='main-cart-container'>
            <Aside/>
            <div className='main-wrapper'>
                <>
                    <PersonalArea/>
                    <div className='main-container'>
                        <Cart/>
                        <Contacts/>
                    </div>
                </>
            </div>
        </div>
    )
}

export default CartPageHeader