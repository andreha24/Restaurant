import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {add, deleteItem} from "../../../store/cart/slice";

import './index.sass';

const CartItem = ({ dish, index }) => {
    const count_of_dishes = useSelector(state => state.cartReducer.items[index].count_of_dishes);
    const dispatch = useDispatch();

    return (
        <div key={index} className='cart-dish'>
            <img src='' alt={dish.hash} className='cart-dish-img' />
            <div className='cart-dish-details'>
                <div>
                    <h2>{dish.title}</h2>
                    <span>{dish.price} $</span>
                </div>
                <div className='dish-handlers'>
                    <span>{count_of_dishes}</span>
                    <div>
                        <button onClick={
                            () => {
                                   dispatch(add({ ...dish, count_of_dishes: 1 })) }
                            }
                            className='handler-add'>
                            <img src='/img/other/arrow-top.png' alt=''/>
                        </button>
                        <button onClick={
                            () => {
                                dispatch(add({ ...dish, count_of_dishes: -1}));}
                            }
                            disabled={count_of_dishes === 1}
                            className='handler-delete'>
                            <img src='/img/other/arrow-down.png' alt=''/>
                        </button>
                    </div>
                </div>
            </div>
            <img
                src='/img/other/garbage.png'
                alt=''
                className='garbage'
                onClick={() => {
                    dispatch(deleteItem(index))
                    alert('Блюдо успешно удалено!')
                }}
            />
        </div>
    );
};

export default CartItem