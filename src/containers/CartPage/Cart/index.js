import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from "../CartItem";

import './index.sass';
import {Link} from "react-router-dom";

const Cart = () => {
    const dishes = useSelector(state => state.cartReducer.items);
    let total = dishes.map(elem => elem.price * elem.count_of_dishes).reduce((acc, next) => acc + next , 0);

    return (
        <div className='cart'>
            {dishes.length === 0 ?
                <div>
                    В вашей корзине нету блюд, перейдите в  <Link to='/page-menu'>меню</Link> и добавьте товары в корзину
                </div>: (
                <>
                    {dishes.map((dish, index) => (
                            <CartItem dish={dish} index={index} key={index} />
                    ))}

                     <h2>Общая стоимость заказа : {total} $</h2>
                </>
                )
            }
        </div>
    );
};

export default Cart;
