import React from "react";
import { Link } from "react-router-dom";
const EvidenceList = () => {
  return (
    <>
      <div class=" p-4 text-center mb-1 fs-1 text-danger">Complaints List</div>
      <hr />

      <Link
        to="/addEvidence"
        class="btn btn-success text-light"
        style={{ marginLeft: "1280px" }}
      >
        + Add New
      </Link>

      <div class="container table-responsive">
        <table class="table table-bordered table-hover py-1 my-1">
          <thead class="table-dark text-light">
            <tr>
              <th>Evidence ID</th>
              <th>Complaint ID</th>
              <th>Type of Evidence</th>
              <th>Description</th>
              <th>Uploaded By</th>
              <th>Date of Upload</th>
              <th>Time of Upload</th>
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
            <td>JFNCSAM</td>
            <td>
              <Link
                to="/updateEvidence"
                class="btn btn-warning"
                id="updateEvidence"
              >
                Update
              </Link>
              &nbsp;
              <button class="btn btn-danger " id="deleteEvidence">
                Delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default EvidenceList;
