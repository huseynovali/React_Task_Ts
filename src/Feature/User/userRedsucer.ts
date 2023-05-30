import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserState } from "../../models/userModel";
import axios from "axios";

const initialState: UserState = {
  userList: [],
  loading: true,
  err: ""
};

export const fetchUser = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userList = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.err = action.error.message;


    });
  }
});

export const { } = userReducer.actions;

export default userReducer.reducer;
