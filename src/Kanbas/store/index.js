import { configureStore } from "@reduxjs/toolkit";
import ModulesReducer from "../Courses/Modules/ModulesReducer";

const store = configureStore({
  reducer: {
    ModulesReducer,
  },
});

export default store;
