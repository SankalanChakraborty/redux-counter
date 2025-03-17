import "./App.css";
import Counter from "./Counter";
import CounterHide from "./CounterHide";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  const dispatch = useDispatch();
  const toggleCounter = () => {
    dispatch({ type: "TOGGLE_PRIVACY" });
  };
  return (
    <div className="flex flex-C">
      <h1>Counter</h1>
      {!privacy ? (
        <>
          <Counter />{" "}
          <button className="btn-reset toggle-btn" onClick={toggleCounter}>
            Hide
          </button>
        </>
      ) : (
        <>
          <CounterHide />{" "}
          <button className="btn-reset toggle-btn" onClick={toggleCounter}>
            Show
          </button>
        </>
      )}
    </div>
  );
}

export default App;
