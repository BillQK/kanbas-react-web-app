import { configureStore } from "@reduxjs/toolkit";
import ModulesReducer from "../Courses/Modules/ModulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
const store = configureStore({
  reducer: {
    ModulesReducer,
    assignmentsReducer,
  },
});

export default store;
