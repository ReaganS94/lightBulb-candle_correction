import { useEffect } from "react";
import { useState } from "react";

const Candle = () => {
  const [height, setHeight] = useState(80);
  const [isLit, setIsLit] = useState(false);

  // if it's lit, run the useEffect
  useEffect(() => {
    let intervalID;
    if (height > 10 && isLit) {
      intervalID = setInterval(() => {
        setHeight((prev) => prev - 0.8);
      }, 500);
    }
    return () => clearInterval(intervalID);
  }, [isLit]);

  return (
    <div className="block">
      <div>
        <h1>{height}</h1>
        <button onClick={() => setIsLit(true)}>Light up candle</button>
        <button onClick={() => setHeight(80)}>Replace with new candle</button>
      </div>
      <div className="block candleContainer">
        {height > 10 ? (
          <div className="candle" style={{ height: `${height}%` }}>
            <div className={isLit ? "flame" : null}>
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Candle;
