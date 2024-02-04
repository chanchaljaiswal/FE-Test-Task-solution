// usersSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../Services/Users/userService';

// Define the initial state
const initialState = {
  userList: [],
  status: 'idle',
  error: null,
};

// Define an asynchronous thunk for fetching user data from the API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (searchTerm) => {
  try {
    const users = await getUsers(searchTerm); // Use getUsers function from userService
    return users;
  } catch (error) {
    throw Error(error.message);
  }
});

// Create a slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userList = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetUsers } = usersSlice.actions;

export default usersSlice.reducer;
