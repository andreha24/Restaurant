import React from 'react';
import CartPageHeader from "./Header";
import Footer from "../../components/Footer";

import './index.sass'


const CartPage = () => {

    return (
        <div className='page-container'>
            <CartPageHeader/>
            <Footer/>
        </div>
    );
};

export default CartPage;