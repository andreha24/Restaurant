import React, { useCallback, useState } from "react";

import SectionName from "./SectionName";

import Button from "../Button";
import OrderModal from "../OrderModal";

import "./index.css";

function Contacts() {
  const [modal, setModal] = useState(false);

  const changeModalView = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  return (
    <>
      { modal && <OrderModal closeModal={changeModalView} />}
      <div className="contacts">
        <SectionName title="КОНТАКТЫ" className="line" />
        <div className="contacts-container">
          <div className="contacts-delivery-time">
            <div className="delivery-time">
              <span>2</span>
              <span>мин</span>
              <p>из центра Киева</p>
            </div>
            <div className="delivery-time">
              <span>12</span>
              <span>мин</span>
              <p>из центра Днепра</p>
            </div>
            <div className="delivery-time">
              <span>42</span>
              <span>мин</span>
              <p>из центра Харькова</p>
            </div>
            <div className="delivery-time">
              <span>52</span>
              <span>мин</span>
              <p>из центра Львова</p>
            </div>
          </div>
          <div className="map">
            <div className="more-contacts">
              <div className="wrap">
                <div className="details">
                  <img src="/img/contacts/mark.png" alt="mark" />
                  <span>Киев, улица Шевченка 42</span>
                </div>
                <div className="details">
                  <img src="/img/contacts/phone.png" alt="mark" />
                  <span>+38(067)-231-23-24</span>
                </div>
                <span>Время работы</span>
                <div className="details">
                  <span>Вск-Чт</span>
                  <span>с 12:00 до 23:00</span>
                </div>
                <div className="details">
                  <span>Пт-Сб</span>
                  <span>с 12:00 до 03:00</span>
                </div>
                <div className="contacts-buttons">
                  <Button title="Бронь столика" className="order-link" onClick={changeModalView} />
                  <Button title="Задать вопрос" className="delivery-conditions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
