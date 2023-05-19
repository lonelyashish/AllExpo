import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const store = createStore({
  reducer: rootReducer,
});

export default store;
