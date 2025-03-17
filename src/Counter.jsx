import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Counter = () => {
  const storeCounter = useSelector((store) => store.counter);
  const css = useSelector((store) => store.css);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDencrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleIncrementByTWO = () => {
    dispatch({ type: "INCREMENTBYTWO", payload: 2 });
  };

  return (
    <div className={css ? "flex flex-R" : ""}>
      <button
        className={css ? "btn-reset btn-inc" : ""}
        onClick={handleIncrement}
      >
        +
      </button>
      <h1>{storeCounter}</h1>
      <button
        className={css ? "btn-reset btn-dec" : ""}
        onClick={handleDencrement}
      >
        -
      </button>
      <button
        className={css ? "btn-reset btn-inc-by" : ""}
        onClick={handleIncrementByTWO}
      >
        INC BY 2
      </button>
    </div>
  );
};

export default Counter;
