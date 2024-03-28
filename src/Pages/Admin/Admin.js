import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../ReduxStore/Userslice/Userslice";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../../Components/chart";
import UsersTable from "./registereduser";
const Admin = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-1" id="content">
          <div class="container my-5">
            <Chart />
          </div>
          <div
            class="row"
            style={{ marginLeft: "-250px", marginTop: "-100px" }}
          >
            <UsersTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
