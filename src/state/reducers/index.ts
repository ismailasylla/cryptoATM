import { combineReducers } from "redux";
import cryptoAtmsReducer from "./cryptoAtmsReducer";

const reducers = combineReducers({
  cryptoAtms: cryptoAtmsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;