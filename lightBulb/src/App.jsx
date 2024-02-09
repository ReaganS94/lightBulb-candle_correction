import { useEffect, useState } from "react";
import Instructions from "./instructions/Instructions";
import "./styles.css";

export default function App() {
  const [isLit, setIsLit] = useState(false);
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    if (isLit) {
      setIsLit(false); // TRIGGER RE-RENDER
    } else if (counter < 10) {
      setIsLit(true);
      setCounter((prev) => prev + 1);
    } else {
      alert("THINK ABOUT THE PLANET, YOU MONSTER");
    }
  };

  useEffect(() => {
    const timerID = setTimeout(() => {
      // is it's lit, turn it off
      // isLit ? setIsLit(false) : null;
      isLit && setIsLit(false);
    }, 2000);

    return () => clearTimeout(timerID);
  }, [isLit]);

  return (
    <div className="App">
      <Instructions />
      <div className={isLit ? "block night" : "block"}>
        <h1 style={{ color: "blue" }}>{counter}</h1>
        <button onClick={clickHandler}>
          {isLit ? "Turn me off" : "Light me up"}
        </button>
        <div className="container">
          <div className="bulb-light">
            <div id="light" />

            <div id="bulb">
              <div className="bulb-top">
                <div className="reflection" />
              </div>
              <div className="bulb-middle-1" />
              <div className="bulb-middle-2" />
              <div className="bulb-middle-3" />
              <div className="bulb-bottom" />
            </div>

            <div id="base">
              <div className="screw-top" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-c" />
              <div className="screw-d" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
