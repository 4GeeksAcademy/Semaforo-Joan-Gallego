import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";

const TrafficLight = () => {
  const [color, setColor] = useState("rojo");

  return (
    <div className="container">
      <div className="traffic-light">
        <div
          className={`luz roja ${color === "rojo" ? "resplandor" : ""}`}
          onClick={() => setColor("rojo")}
        ></div>
        <div
          className={`luz amarilla ${color === "amarillo" ? "resplandor" : ""}`}
          onClick={() => setColor("amarillo")}
        ></div>
        <div
          className={`luz verde ${color === "verde" ? "resplandor" : ""}`}
          onClick={() => setColor("verde")}
        ></div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);

export default Home;