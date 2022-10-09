import React from "react";
import "../styles-shets/button.css";

function Button(props) {
  const itsOperator = (value) => {
    return (
      isNaN(value) &&
      value !== "." &&
      value !== "C" &&
      value !== "DEL" &&
      value !== "%"
    );
  };
  const itsZero = (value) => {
    return value === "0";
  };

  return (
    <div
      id={`${props.id}`}
      className={`button-container ${
        itsOperator(props.children) ? "operator" : null
      } ${itsZero(props.children) ? "zero" : ""}`.trimEnd()}
      onClick={() => props.mClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
