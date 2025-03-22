import "./App.css";
import Counter from "./Counter";
import CounterHide from "./CounterHide";
import { useSelector, useDispatch } from "react-redux";
import { privacyActions, cssActions } from "./store";

function App() {
  const privacy = useSelector((store) => store.privacy.privacy);
  const css = useSelector((store) => store.css.css);
  const dispatch = useDispatch();
  const toggleCounter = () => {
    dispatch(privacyActions.toggle());
  };

  const toggleStyle = () => {
    dispatch(cssActions.toggleCSS());
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
        <button className="btn-reset btn-grad" onClick={toggleStyle}>
          Apply CSS ✅
        </button>
      ) : (
        <button className="btn-reset btn-rm-grad" onClick={toggleStyle}>
          Remove CSS ❌
        </button>
      )}
    </div>
  );
}

export default App;
