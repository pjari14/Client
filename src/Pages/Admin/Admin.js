import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../ReduxStore/Userslice/Userslice";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../Components/sidebar";

const Admin = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div id="wrapper"></div>
    </>
  );
};

export default Admin;
