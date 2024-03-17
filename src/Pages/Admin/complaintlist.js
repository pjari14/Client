import React from "react";
import { Link } from "react-router-dom";
const ComplaintList = () => {
  return (
    <>
      <div class="container mt-1 pt-1">
        <div class="col-sm-12">
          <div class=" p-1 text-center mb-1 fs-1" style={{ color: "#827191" }}>
            Complaints List
            <div class="container" style={{ marginLeft: "500px" }}>
              <Link to="/addComplaint">
                <button
                  type="button"
                  id="addComplaint"
                  style={{
                    width: "12%",
                    marginLeft: "10px",
                    backgroundColor: "#BA68C8",
                    borderStyle: "groove",
                    borderRadius: "5px 5px 5px 5px",
                    color: "white",
                    padding: "5px 10px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "18px",
                    margin: "4px 2px",
                    cursor: "pointer",
                  }}
                >
                  + Add New
                </button>
              </Link>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
        <table
          className="table table-bordered table-hover py-1 my-1"
          style={{ border: "2px solid black", borderCollapse: "collapse" }}
        >
          <thead style={{ backgroundColor: "#B5B2C2" }}>
            <tr>
              <th>Complaint Category</th>
              <th>Complaint Date</th>
              <th>State</th>
              <th>City</th>
              <th>Date of Incident</th>
              <th>Time of Incident</th>
              <th>Reason for delay</th>
              <th>Place of incident occurance</th>
              <th>Evidence</th>
              <th>Suspect person or company name</th>
              <th>Additional Details</th>
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
              <Link to="/updateComplaint">
                <button
                  type="button"
                  id="updateComplaint"
                  style={{
                    backgroundColor: "#F5B700",
                    borderStyle: "groove",
                    borderRadius: "5px 5px 5px 5px",
                  }}
                >
                  Update
                </button>
              </Link>
              <br></br> &nbsp;&nbsp;
              <button
                type="button"
                id="deleteComplaint"
                style={{
                  borderStyle: "groove",
                  backgroundColor: "#E54B4B",
                  borderRadius: "5px 5px 5px 5px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </table>
        </div>
      </div>
    </>
  );
};
export default ComplaintList;
