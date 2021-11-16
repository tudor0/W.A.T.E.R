import "./Info.style.css";

import { useEffect, useState } from "react";

const Info = (props) => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [lWater, setLWater] = useState(0);
  const [lSyrupWater, setLSyrupWater] = useState(0);
  const [totalWater, setTotalWater] = useState(0);
  const [totalCups, setTotalCups] = useState(0);

  useEffect(() => {
    setTotalWater((0.4 * (props.waterWithSyrup + props.waterCups)).toFixed(1));
    setTotalCups(props.waterCups + props.waterWithSyrup);
  }, [props.waterCups, props.waterWithSyrup]);

  useEffect(() => {
    setLWater((0.4 * props.waterCups).toFixed(1));
  }, [props.waterCups]);
  useEffect(() => {
    setLSyrupWater((0.4 * props.waterWithSyrup).toFixed(1));
  }, [props.waterWithSyrup]);

  return (
    <>
      <div className="info-container">
        <div className="date">
          <h1>{date}</h1>
        </div>
        <div className="drinking-info">
          <h3>
            You drank {props.waterCups} water cups and {props.waterWithSyrup}{" "}
            <span className="red">syrup</span> water cups
          </h3>
          <h3>
            In total, that is {totalCups} cups, of which {lWater} liters of
            plain water, and {lSyrupWater} liters of syrup water, totalling{" "}
            {totalWater} liters
          </h3>
        </div>
        <div className="credits">
          <h3>MADE C/O "TUDOR"</h3>
        </div>
      </div>
    </>
  );
};
export default Info;
