import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Userslice/Userslice";
import Incidentslice from "./Incidentslice/Incidentslice";
const store = configureStore({
  reducer: {
    user: Userslice,
    incident: Incidentslice,
  },
});

export default store;
