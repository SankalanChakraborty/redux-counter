/*

FOR ONLY REDUX

1. Import createStore method from the Redux library
2. Set an initial state for the store
3. Create a reducer

*/

/* REDUX

import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
  privacy: false,
  css: false,
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
  if (action.type === "TOGGLE_CSS") {
    return { ...store, css: !store.css };
  }
  return store;
};

const counterStore = createStore(counterReducer);

*/

// 1. import configureStore, createSlice from @reduxjs/toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 2. Create separate slices for separate app functionalities
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { countValue: 0 },
  reducers: {
    increment: (state) => {
      state.countValue += 1;
    },
    decrement: (state) => {
      state.countValue -= 1;
    },
    increaseBy: (state, action) => {
      state.countValue += action.payload;
    },
  },
});

const privacySlice = createSlice({
  name: "privacySlice",
  initialState: { privacy: false },
  reducers: {
    toggle: (state) => {
      state.privacy = !state.privacy;
    },
  },
});

const cssSlice = createSlice({
  name: "cssSlice",
  initialState: { css: false },
  reducers: {
    toggleCSS: (state) => {
      state.css = !state.css;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
    css: cssSlice.reducer,
  },
});

//3. Export slice actions and the store
export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export const cssActions = cssSlice.actions;
export default counterStore;
