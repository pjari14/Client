import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/user";
export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get(`${url}/get`, { withCredentials: true });
  return response.data;
});

export const logoutUser = createAsyncThunk("users/logoutUser", async () => {
  const response = await axios.get(`${url}/logout`, { withCredentials: true });
  return response.data;
});
const userslice = createSlice({
  name: "user",
  initialState: null,

  reducers: {
    setNull: (state) => {
      return (state = null);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload.success) {
        return (state = action.payload.user);
      }
    });
    builder.addCase(fetchUser.rejected, (state) => {
      return (state = null);
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      return (state = null);
    });
  },
});

export default userslice.reducer;
