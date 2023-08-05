import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Button from "../../../../components/Button";
import OrderModal from "../../../../components/OrderModal";
import "./index.css";

function Navigation() {
  const [modal, setModal] = useState(false);

  const isEnter = localStorage.getItem("email");

  const changeModalView = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="right-bar">
        <ul className="navigation">
          <Link to="/page-menu"><li>Меню</li></Link>
          <Link to="/cart-page">
            {" "}
            <li>Корзина</li>
            {" "}
          </Link>
          <Link to="/personal-page"><li>Личный кабинет</li></Link>
          {isEnter !== null
            ? <Link to="/login-page"><button type="button" onClick={() => localStorage.clear()}>Выйти</button></Link>
            : <Link to="/login-page"><li>Войти</li></Link>}
          <Button className="order-link" title="Бронь столика" onClick={changeModalView} />
        </ul>

        <h1 className="main-phrase">Видовой ресторан Food Exxe Relo на Крестовском острове</h1>
      </div>

      <CSSTransition
        in={modal}
        timeout={600}
        classNames="order-modal"
        unmountOnExit
      >
        <OrderModal closeModal={changeModalView} />
      </CSSTransition>
    </>
  );
}

export default Navigation;
