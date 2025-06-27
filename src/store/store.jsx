import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./UsersSlice"
export default configureStore({
  reducer: {
    users:UsersReducer
  },
})