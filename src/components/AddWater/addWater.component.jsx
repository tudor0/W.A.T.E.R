import "./addWater.styles.css";
import React from "react";
const AddWater = (props) => {
  return (
    <div className="container">
      <div className="counter-container">
        <div className="water-counter">{props.waterCups}</div>
        <h3>Number of simple water cups: </h3>
        <button onClick={props.waterCupHandler}>
          I drank a simple water cup!
        </button>
      </div>
      <div className="counter-container">
        <div className="water-counter red">{props.waterWithSyrup}</div>
        <h3>
          Number of <span className="red">syrup</span> water cups:{" "}
        </h3>
        {props.counter === 2 && (
          <button onClick={props.syrupWaterCupHandler}>
            I drank a syrup water cup!
          </button>
        )}
      </div>
    </div>
  );
};
export default AddWater;
