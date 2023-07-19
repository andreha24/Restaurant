import React from 'react';
import CartPageHeader from "./Header";
import Footer from "../../components/Footer";
import Contacts from "../../components/Contacts";


import './index.sass'


const CartPage = () => {

    return (
        <>
            <CartPageHeader/>
            <Contacts/>
            <Footer/>
        </>
    );
};

export default CartPage;