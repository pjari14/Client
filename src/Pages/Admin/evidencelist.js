import React from "react";
import { Link } from "react-router-dom";
const EvidenceList = () => {
  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Evidence List</h1>
            <Link
              to="/addEvidence"
              class="btn btn-outline-success"
              style={{ marginLeft: "1050px", marginTop: "-100px" }}
            >
              + Add New
            </Link>
            <hr />

            <div class="container">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default EvidenceList;
