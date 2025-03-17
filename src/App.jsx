import "./App.css";
import Counter from "./Counter";
import CounterHide from "./CounterHide";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  const css = useSelector((store) => store.css);
  const dispatch = useDispatch();
  const toggleCounter = () => {
    dispatch({ type: "TOGGLE_PRIVACY" });
  };
  const applyCSS = () => {
    dispatch({ type: "TOGGLE_CSS" });
  };
  const removeCSS = () => {
    dispatch({ type: "TOGGLE_CSS" });
  };

  return (
    <div className={css ? "flex flex-C" : ""}>
      <h1 className={css ? "heading" : ""}>Counter</h1>
      {!privacy ? (
        <>
          <Counter />{" "}
          <button
            className={css ? "btn-reset toggle-btn" : ""}
            onClick={toggleCounter}
          >
            Hide
          </button>
        </>
      ) : (
        <>
          <CounterHide />{" "}
          <button
            className={css ? "btn-reset toggle-btn" : ""}
            onClick={toggleCounter}
          >
            Show
          </button>
        </>
      )}
      {!css ? (
        <button className="btn-reset btn-grad" onClick={applyCSS}>
          Apply CSS ✅
        </button>
      ) : (
        <button className="btn-reset btn-rm-grad" onClick={removeCSS}>
          Remove CSS ❌
        </button>
      )}
    </div>
  );
}

export default App;
