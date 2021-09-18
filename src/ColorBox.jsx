import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState(["deeppink", "yellow", "orange", "blue", "black"]);
  const changeColor = () => {
    const random = Math.floor(Math.random() * color.length);
    setColor(random);
  };
  return <div className="ColorBox" style={{ color }} onClick={changeColor}></div>;
}

export default ColorBox;
