/* 
1. Import createStore method from the Redux library
2. Set an initial state for the store
3. Create a reducer

*/
import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_STATE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  }
  if (action.type === "DECREMENT" && store.counter) {
    return { ...store, counter: store.counter - 1 };
  }
  if (action.type === "INCREMENTBYTWO") {
    return { ...store, counter: store.counter + action.payload };
  }
  if (action.type === "TOGGLE_PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
