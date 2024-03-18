import React from "react";
import { Link } from "react-router-dom";
const SuspectList = () => {
  return (
    <>
      <div class=" p-4 text-center mb-1 fs-1 text-danger">Complaints List</div>
      <hr />

      <Link
        to="/addSuspect"
        class="btn btn-success text-light"
        style={{ marginLeft: "1280px" }}
      >
        + Add New
      </Link>

      <div class="container table-responsive">
        <table class="table table-bordered table-hover py-1 my-1">
          <thead class="table-dark text-light">
            <tr>
              <th>Suspect ID</th>
              <th>Suspect Name</th>
              <th>Suspect Identity</th>
              <th>Suspect Photograph</th>
              <th>Additional Details</th>
              <th>Options</th>
            </tr>
          </thead>
          <tr>
            <td>1</td>
            <td>AHBH</td>
            <td>wjdna</td>
            <td>JWND</td>
            <td>JFNCSAM</td>
            <td>
              <Link
                to="/updateSuspect"
                class="btn btn-warning"
                id="updateSuspect"
              >
                Update
              </Link>
              &nbsp;
              <button class="btn btn-danger text-light" id="deleteSuspect">
                Delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default SuspectList;
