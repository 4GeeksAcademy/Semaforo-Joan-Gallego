import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="container">
      <div className="traffic-light">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);

export default Home;