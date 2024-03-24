import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/incident";
export const createIncident = createAsyncThunk(
  "incident/createIncident",
  async (incident) => {
    const response = await axios.post(
      `${url}/insert`,
      { incident },
      { withCredentials: true }
    );
    return response.data;
  }
);

const incidentSlice = createSlice({
  name: "incident",
  initialState: null,

  reducers: {
    setNull: (state) => {
      return (state = null);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createIncident.fulfilled, (state, action) => {
      if (action.payload.success) {
        return (state = action.payload.incident);
      }
    });
    builder.addCase(createIncident.rejected, (state) => {
      return (state = null);
    });
  },
});
export default incidentSlice.reducer;
