import React from "react";
import { useHistory } from "react-router";

import Button from "../../../../components/Button";
import "./index.css";

const Dish = ({ type }) => {
  const history = useHistory();
  const navigateToDetail = (dishHash) => {
    history.push(`/page-menu/${dishHash}`);
  };

  return (
    type.map((dish, index) => (
      <div className="dish" key={index}>
        <img src={dish.image} alt="" />
        <div className="dish-info">
          <h3>{dish.title}</h3>
          <div className="dish-action">
            <span className="dish-price">{dish.price}</span>
            <Button title="Детали" className="order-link" onClick={() => navigateToDetail(dish.hash)} />
          </div>
        </div>
      </div>
    ))
  );
};

export default Dish;
