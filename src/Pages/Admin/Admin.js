import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../ReduxStore/Userslice/Userslice";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../../Components/chart";
import UsersTable from "./registereduser";
import axios from "axios";

const Admin = () => {
  // const [totalUsers, setTotalUsers] = useState(0);
  // const [totalComplaints, setTottalComplaints] = useState(0);
  // const [totalSuspect, setTottalSuspect] = useState(0);
  // useEffect(() => {
  //   async function fetchCount() {
  //     try {
  //       const response = await axios.get(`${ADMIN_ROUTE}/count/all`, {
  //         withCredentials: true,
  //       });
  //       if (response.data.success) {
  //         setTotalUsers(response.data.totalusers);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchCount();
  // });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-1" id="content">
          <div class="container my-5 row col-12 p-3 ">
            <div class="card  col-3 mr-4 ml-2  p-5 " style={{ width: "30%" }}>
              total users
            </div>
            <div class="card col-3 mr-4 p-5 ml-3" style={{ width: "30%" }}>
              total complaints
            </div>
            <div class="card col-3 p-5 mr-4 ml-3 " style={{ width: "30%" }}>
              total closed complaints
            </div>
          </div>

          {/* <div class="container my-5 row col-12 ">
            <div class="card  col-6  p-5 m-1">hello</div>
            <div class="card col-6  m-1 p-5">hello</div>
          </div> */}
          <div class="container my-5">
            <Chart />
          </div>
          <div
            class="row"
            style={{ marginLeft: "-260px", marginTop: "-100px" }}
          >
            {/* <UsersTable /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
