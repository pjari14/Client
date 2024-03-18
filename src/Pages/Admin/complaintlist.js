import React from "react";
import { Link } from "react-router-dom";
const ComplaintList = () => {
  return (
    <>
      <div class=" p-4 text-center mb-1 fs-1 text-danger">Complaints List</div>
      <hr />

      <Link
        to="/addComplaint"
        class="btn btn-success"
        style={{ marginLeft: "1000px" }}
      >
        + Add New
      </Link>

      <div class="container table-responsive">
        <table class="table table-bordered table-hover py-1 my-1">
          <thead class="table-dark text-light">
            <tr>
              <th scope="col">Complaint Category</th>
              <th scope="col">Complaint Date</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Date of Incident</th>
              <th scope="col">Time of Incident</th>
              <th scope="col">Reason for delay</th>
              <th scope="col">Place of incident occurance</th>
              <th scope="col">Evidence</th>
              <th scope="col">Suspect person or company name</th>
              <th scope="col">Additional Details</th>
            </tr>
          </thead>
          <tr>
            <td>AHBH</td>
            <td>wjdna</td>
            <td>JWND</td>
            <td>JFNCSAM</td>
            <td>JFNCSAM</td>
            <td>JFNCSAM</td>
            <td>JFNCSAM</td>
            <td>JFNCSAM</td>
            <td>JFNCSAM</td>
            <td>JFNCSAM</td>
            <td>
              <Link
                to="/updateComplaint"
                class="btn btn-warning btn-outline-warning"
                id="updateComplaint"
              >
                Update
              </Link>
              <br></br> &nbsp;&nbsp;
              <button class="btn btn-danger" id="deleteComplaint">
                Delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default ComplaintList;
