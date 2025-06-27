import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", username: "user", password:"user"},  
];

const UsersSlice = createSlice({
  name: "users",
  initialState:{
    entities: initialState,
  },

  reducers: {
    add(state, action) {
      state.entities.push(action.payload);
    }    
  },
});

export const { add } = UsersSlice.actions;

export default UsersSlice.reducer;
