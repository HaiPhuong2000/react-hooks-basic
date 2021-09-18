import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

//get random color;
const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "yellow", "orange", "blue", "black"];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length); // Math.trunc: lấy phần nguyên
  return COLOR_LIST[randomIndex];
};

//initializati hook state store variable then initializati function changeColor,
// it will setState by function getrandomColor everytime click in box
function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });
  const changeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    // use localStorage to set item is last change color
    localStorage.setItem("box_color", newColor);
  };
  return <div className="color-box" style={{ backgroundColor: color }} onClick={changeColor}></div>;
}

export default ColorBox;
