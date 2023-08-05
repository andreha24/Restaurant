import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteItem } from "../../store/cart/slice";

import "./index.sass";

function Basket({ onClick, className }) {
  const dispatch = useDispatch();

  const dishes = (useSelector((state) => state.cartReducer.items));
  const cartEmpty = dishes.length <= 0;
  return (
    <div className={`basket ${className}`}>
      <button type="button" onClick={onClick}>
        <img src="/img/other/right-arrow.png" alt="close-cart" className="close-cart" />
      </button>
      {cartEmpty ? <h1>Корзина пустая</h1>
        : (
          <>
            <h1>Ваш заказ</h1>
            {
                dishes.map((dish, index) => (
                  <div key={index} className="basket-dish">
                    <img src="" alt={dish.hash} className="basket-dish-img" />
                    <div className="basket-dish-detail">
                      <h2>{dish.title}</h2>
                      <span>{dish.price}</span>
                    </div>
                    <button type="button" onClick={() => dispatch(deleteItem(index))}>
                      <img
                        src="/img/other/garbage.png"
                        alt="garbage"
                        className="garbage"
                      />
                    </button>
                  </div>
                ))
            }
          </>
        )}

      <Link to="/cart-page">
        <button type="button" className="order-link">Оформить заказ</button>
      </Link>
    </div>
  );
}

Basket.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Basket;
