import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../ReduxStore/Userslice/Userslice";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../../Components/chart";
import UsersTable from "./registereduser";
import axios from "axios";
import UserIcon from "../../Assets/icons/man.png";
import ComplaintsIcon from "../../Assets/icons/feedback.png";
import ClosedComplaintsIcon from "../../Assets/icons/check.png";
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
            <div
              class="card col-12 col-md-3 mr-4 ml-2 bg-gradient text-white shadow-lg p-3 d-flex flex-row align-items-center"
              style={{
                width: "30%",
                height: "150px",
                backgroundColor: "#345771",
              }}
            >
              <img
                src={UserIcon}
                class="ml-3"
                style={{ width: "90px", height: "90px" }}
              ></img>
              <div class="flex-grow-1">
                <h4 class="ml-4 mt-3">Total Users</h4>
                <h4 class="ml-4">20</h4>
              </div>
            </div>
            <div
              class="card col-12 col-md-3 mr-4 ml-2 text-white bg-gradient shadow-lg p-3 d-flex flex-row align-items-center"
              style={{
                width: "30%",
                height: "150px",
                backgroundColor: "#345771",
              }}
            >
              <img
                src={ComplaintsIcon}
                class="ml-2"
                style={{ width: "85x", height: "85px" }}
              ></img>
              <div class="flex-grow-1">
                <h4 class=" mt-3">Total Complaints</h4>
                <h4 class="">20</h4>
              </div>
            </div>
            <div
              class="card col-12 col-md-3 mr-4 ml-2 text-white  bg-gradient shadow-lg p-3 d-flex flex-row align-items-center"
              style={{
                width: "30%",
                height: "150px",
                backgroundColor: "#345771",
              }}
            >
              <img
                src={ClosedComplaintsIcon}
                class="ml-3"
                style={{ width: "65px", height: "65px" }}
              ></img>
              <div class="flex-grow-1">
                <h4 class="ml-4 mt-3">Case Solved</h4>
                <h4 class="ml-4">20</h4>
              </div>
            </div>
          </div>

          <div class="container my-3">
            <Chart />
          </div>
          <div class="row" style={{ marginLeft: "-260px", marginTop: "-50px" }}>
            <UsersTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
