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
              <th scope="col">Evidence ID</th>
              <th scope="col">Complaint ID</th>
              <th scope="col">Type of Evidence</th>
              <th scope="col">Description</th>
              <th scope="col">Uploaded By</th>
              <th scope="col">Date of Upload</th>
              <th scope="col">Time of Upload</th>
              <th scope="col">Status</th>
              <th scope="col">Notes</th>
              <th scope="col">Timestamp</th>
              <th scope="col" colSpan={2}>
                Options
              </th>
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
                class="btn btn-outline-success"
                id="updateEvidence"
              >
                Update
              </Link>
            </td>
            <td>
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
