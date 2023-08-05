import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import OrderModal from "../../../components/OrderModal";
import Button from "../../../components/Button";

import "./index.css";

function PersonalAccount() {
  const [toggleModal, setToggleModal] = useState(false);
  const [orderModalView, setOrderModalView] = useState(false);

  const changeModalView = () => {
    setToggleModal((prev) => !prev);
  };

  const email = localStorage.getItem("email");
  const {
    username, phoneNumber, table, guests, data,
  } = useSelector((state) => state.userReducer.userTable);

  const userOrder = useSelector((state) => state.userReducer.userOrder);

  return (
    <>
      {toggleModal && <OrderModal closeModal={changeModalView} />}

      {email === null
        ? (
          <div>
            Для того чтобы пользоваться аккаунтом вам нужно
            <Link to="/login-page">войти</Link>
            {" "}
            в него
            {" "}
          </div>
        )
        : (
          <div className="user-wrapper">
            <div className="user-container">
              <div className="user-profile">

                <img src="/img/other/account.png" alt="user" className="user-img" />

                <div className="user-info">
                  <span>Почта: </span>
                  <span>{email}</span>
                </div>
              </div>

              <div className="user-preferences">
                <div className="user-table-wrapper">
                  {guests === undefined
                    ? (
                      <>
                        <h3>У вас нет забронированного столика, забронируйте нажав на кнопку ниже</h3>
                        <Button
                          className="order-link"
                          onClick={() => setToggleModal(true)}
                          title="Забронировать столик"
                        />
                      </>
                    )
                    : (
                      <>
                        <h4>Информация про забронированный столик</h4>

                        <div className="user-table">
                          <div className="user-table-detail">
                            <span>Имя:</span>
                            <span>{username}</span>
                          </div>
                          <div className="user-table-detail">
                            <span>Номер телефона:</span>
                            <span>{phoneNumber}</span>
                          </div>
                          <div className="user-table-detail">
                            <span>Количество гостей:</span>
                            <span>{guests}</span>
                          </div>
                          <div className="user-table-detail">
                            <span>Номер столика:</span>
                            <span>{table}</span>
                          </div>
                          <div className="user-table-detail">
                            <span>Дата/время:</span>
                            <span>{data}</span>
                          </div>
                        </div>
                      </>
                    )}
                  {userOrder.length === 0
                    ? (
                      <span>
                        <Link to="/page-menu">Перейти в меню</Link>
                        {" "}
                        чтобы сделать заказ
                      </span>
                    )
                    : <Button title="Ваш заказ" className="user-order-btn" onClick={() => setOrderModalView(true)} />}
                </div>
              </div>
            </div>
          </div>
        )}

      {
                orderModalView
                && (
                <div className="user-order-modal-wrapper">
                  <button type="button" onClick={() => setOrderModalView(false)}>X</button>
                  <div className="user-order-modal">
                    {userOrder.map(({ title, price, countOfDishes }, index) => (
                      <div key={index} className="user-order-dish">
                        <span>{title}</span>
                        <div>
                          <span>
                            Кол-во:
                            {countOfDishes}
                          </span>
                          <span>
                            {price}
                            $
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                )
            }

    </>

  );
}

export default PersonalAccount;
