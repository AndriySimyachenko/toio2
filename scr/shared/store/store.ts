import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/TodoSlice";
const store = configureStore({
  reducer: {
    daysList: todoReducer,
  },
});

export default store;

// import { combineReducers } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

// const rootReducer = combineReducers({});

// export const store = () => {
//   return configureStore({
//     reducer: rootReducer,
//   });
// };

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store>;
// export type AppDispatch = AppStore["dispatch"];
