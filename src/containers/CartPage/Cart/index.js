import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../CartItem";
import Button from "../../../components/Button";
import { addOrder } from "../../../store/user/userSlice";
import { clearItems } from "../../../store/cart/slice";

import "./index.sass";

function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();

  const dishes = useSelector((state) => state.cartReducer.items);
  const total = dishes.map((elem) => elem.price * elem.countOfDishes).reduce((acc, next) => acc + next, 0);

  const addOrderAtStore = () => {
    dispatch(addOrder(dishes));
    dispatch(clearItems());
    history.push("/personal-page");
  };

  return (
    <div className="cart">
      {dishes.length === 0
        ? (
          <div>
            В вашей корзине нету блюд, перейдите в
            {" "}
            <Link to="/page-menu">меню</Link>
            {" "}
            и добавьте товары в корзину
          </div>
        ) : (
          <>
            <Button className="order-link" title="Вернуться к меню" onClick={() => history.push("/page-menu")} />
            {dishes.map((dish, index) => (
              <CartItem dish={dish} index={index} key={index} />
            ))}

            <div className="take-order">
              <h2>
                Общая стоимость заказа :
                {total}
                {" "}
                $
              </h2>
              <Button className="order-link" title="Оформить заказ" onClick={addOrderAtStore} />
            </div>

          </>
        )}
    </div>
  );
}

export default Cart;
