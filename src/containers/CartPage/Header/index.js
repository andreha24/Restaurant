import React from "react";
import Aside from "../../../components/Aside";
import Cart from "../Cart";
import PersonalArea from "../../../components/PersonalArea";


const CartPageHeader = () => {
    return(
        <header className='header-menu'>
            <Aside/>
            <div className='main-wrapper'>
                <div className='main-container'>
                    <PersonalArea/>
                    <Cart/>
                </div>
            </div>
        </header>
    )
}

export default CartPageHeader