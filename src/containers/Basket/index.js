import React from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../store/cart/slice'
import {Link} from "react-router-dom";
import './index.sass'


const Basket = ({onclick, className }) => {
    const dispatch = useDispatch();

    const dishes = (useSelector(state => state.cartReducer.items))
    const cart_empty = dishes.length <= 0;
    return (
        <div className={`basket ${className}`}>
            <img src="/img/other/right-arrow.png" alt="close-cart" className='close-cart' onClick={onclick}/>
            {cart_empty ? <h1>Корзина пустая</h1> :
                <>
                    <h1>Ваш заказ</h1>
                    {
                        dishes.map((dish, index ) => (
                            <div key={index} className='basket-dish'>
                                <img src="" alt={dish.hash} className='basket-dish-img'/>
                                <div className='basket-dish-detail'>
                                    <h2>{dish.title}</h2>
                                    <span>{dish.price}</span>
                                </div>
                                <img src="/img/other/garbage.png" alt="" className='garbage' onClick={() => dispatch(deleteItem(index))}/>
                            </div>
                        ))
                    }
                    <Link to='/cart-page'>
                        <button className='order-link'>Оформить заказ</button>
                    </Link>
                </>
            }
        </div>
    );
};

export default Basket;