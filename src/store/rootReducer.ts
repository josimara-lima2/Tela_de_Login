import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./reducers/reducer";

const rootReducer = combineReducers({
  reducer: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
