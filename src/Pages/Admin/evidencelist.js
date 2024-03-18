import React from "react";
import { Link } from "react-router-dom";
const EvidenceList = () => {
    return(
        <>
        <div class="container mt-1 pt-1">
        <div class="col-sm-12">
          <div class=" p-1 text-center mb-1 fs-1" style={{ color: "#F45D01" }}>
            Evidence List
            <div class="container" style={{ marginLeft: "500px" }}>
              <Link to="/addEvidence">
                <button
                  type="button"
                  id="addEvidence"
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
        <table className="table table-bordered table-hover py-1 my-1"
            style={{ border: "2px solid black", borderCollapse: "collapse" }}
          ><thead style={{ backgroundColor: "#B5B2C2" }}>
          <tr>
            <th>Evidence ID</th>
            <th>Complaint ID</th>
            <th>Type of Evidence</th>
            <th>Description</th>
            <th>Uploaded By</th>
            <th>Date Uploaded</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Timestamp</th>
            <th>Options</th>
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
              <td>
                <Link to="/updateEvidence">
                  <button
                    type="button"
                    id="updateEvidence"
                    style={{
                      backgroundColor: "#F5B700",
                      borderStyle: "groove",
                      borderRadius: "5px 5px 5px 5px",
                    }}
                  >
                    Update
                  </button>
                </Link>
                &nbsp;
                <button
                  type="button"
                  id="deleteEvidence"
                  style={{
                    backgroundColor: "#E54B4B",
                    borderStyle: "groove",
                    borderRadius: "5px 5px 5px 5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr></table>
        </div>
        </div>
        </>
    );
};
export default EvidenceList;