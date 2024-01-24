import "./HamburguerMenu.scss";
import React from "react";

const HamburguerMenu = (props) => {
  return (
    <button onClick={props.onClick} className="hamburguerMenu">
      <div className="hamburguerMenu-line top bg-secondary" />
      <div className="hamburguerMenu-line bottom bg-secondary" />
    </button>
  );
};

export default HamburguerMenu;
