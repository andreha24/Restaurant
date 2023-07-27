import React, { useState } from 'react';
import {Link , useHistory} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


import CartItem from "../CartItem";
import Button from "../../../components/Button";
import {addOrder} from "../../../store/user/userSlice";

import './index.sass';

const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const dishes = useSelector(state => state.cartReducer.items);
    let total = dishes.map(elem => elem.price * elem.count_of_dishes).reduce((acc, next) => acc + next , 0);

    const addOrderAtStore = (dishes) => {
        dispatch(addOrder(dishes))
    }

    return (
        <>
            <Button className='order-link' title='Вернуться к меню' onClick={() => history.push('/page-menu')}/>

            <div className='cart'>
                {dishes.length === 0 ?
                    <div>
                        В вашей корзине нету блюд, перейдите в  <Link to='/page-menu'>меню</Link> и добавьте товары в корзину
                    </div>: (
                        <>
                            {dishes.map((dish, index) => (
                                <CartItem dish={dish} index={index} key={index} />
                            ))}

                            <div className='take-order'>
                                <h2>Общая стоимость заказа : {total} $</h2>
                                <Button className='order-link' title='Оформить заказ' onClick={addOrderAtStore}/>
                            </div>

                        </>
                    )
                }
            </div>
        </>
    );
};

export default Cart;
