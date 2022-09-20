import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div className="Buttons">
      {Array.from(Array(10).keys()).map((i) => (
        <div className="Numbers">
          <button onClick={() => props.click(props.current * 10 + i)}>
            {i}
          </button>
        </div>
      ))}
      ;
    </div>
  );
};
//==================================================================
export default Buttons;
