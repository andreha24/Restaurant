import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { add, deleteItem } from "../../../store/cart/slice";

import "./index.sass";

function CartItem({ dish, index }) {
  const countOfDishes = useSelector((state) => state.cartReducer.items[index].countOfDishes);
  const dispatch = useDispatch();

  return (
    <div key={index} className="cart-dish">
      <img src="" alt={dish.hash} className="cart-dish-img" />
      <div className="cart-dish-details">
        <div>
          <h2>{dish.title}</h2>
          <span>
            {dish.price}
            {" "}
            $
          </span>
        </div>
        <div className="dish-handlers">
          <span>{countOfDishes}</span>
          <div>
            <button
              type="button"
              onClick={
                            () => {
                              dispatch(add({ ...dish, countOfDishes: 1 }));
                            }
                            }
              className="handler-add"
            >
              <img src="/img/other/arrow-top.png" alt="" />
            </button>
            <button
              type="button"
              onClick={
                            () => {
                              dispatch(add({ ...dish, countOfDishes: -1 }));
                            }
                            }
              disabled={countOfDishes === 1}
              className="handler-delete"
            >
              <img src="/img/other/arrow-down.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteItem(index));
        }}
      >
        <img
          src="/img/other/garbage.png"
          alt=""
          className="garbage"
        />
      </button>
    </div>
  );
}

CartItem.propTypes = {
  dish: PropTypes.string,
  index: PropTypes.string,
};

export default CartItem;
