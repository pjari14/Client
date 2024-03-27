import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../ReduxStore/Userslice/Userslice";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../../Components/chart";
const Admin = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div id="wrapper">
        <div class="container-fluid d-flex">
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
            <div className="overflow-auto col-md-6">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
