import React, { useState, useEffect } from "react";
import "./App.css";
import TheHeader from "./components/TheHeader/TheHeader.component";
import AddWater from "./components/AddWater/addWater.component";
import Info from "./components/Info/Info.component";
const App = () => {
  const [waterCups, setWaterCups] = useState(0);
  const [waterWithSyrup, setWaterWithSyrup] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("Simple Water", waterCups);
    localStorage.setItem("Syrup Water", waterWithSyrup);
    localStorage.setItem("Counter", counter);
  }, [waterCups, waterWithSyrup, counter]);
  const simple = +localStorage.getItem("Simple Water");
  const syrup = +localStorage.getItem("Syrup Water");
  const localcounter = +localStorage.getItem("Counter");
  useEffect(() => {
    setWaterCups(simple);
    setWaterWithSyrup(syrup);
    setCounter(localcounter);
    //eslint-disable-next-line
  }, []);

  const waterCupHandler = () => {
    setWaterCups(waterCups + 1);
    incrementCounter();
  };

  const syrupWaterCupHandler = () => {
    setWaterWithSyrup(waterWithSyrup + 1);
    incrementCounter();
  };
  const incrementCounter = () => {
    setCounter(counter + 1);
    if (counter >= 3) setCounter(1);
  };
  return (
    <React.Fragment>
      <TheHeader></TheHeader>
      <AddWater
        waterCupHandler={waterCupHandler}
        waterWithSyrup={waterWithSyrup}
        syrupWaterCupHandler={syrupWaterCupHandler}
        counter={counter}
        waterCups={waterCups}
      ></AddWater>
      <Info waterWithSyrup={waterWithSyrup} waterCups={waterCups}></Info>
    </React.Fragment>
  );
};

export default App;
