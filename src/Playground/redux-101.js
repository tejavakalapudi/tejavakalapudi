// https://redux.js.org/

import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      const incrementBy = actions.incrementBy ? actions.incrementBy : 1;
      return { count: state.count + incrementBy };

    case "DECREMENT":
      const decrementBy = actions.decrementBy ? actions.decrementBy : 1;
      return { count: state.count - decrementBy };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
  return state;
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());
