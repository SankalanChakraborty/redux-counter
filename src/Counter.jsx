import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterActions } from "./store";

const Counter = () => {
  const storeCounter = useSelector((store) => store.counter.countValue);
  const css = useSelector((store) => store.css.css);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDencrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleIncrementByTWO = () => {
    dispatch(counterActions.increaseBy(2));
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
