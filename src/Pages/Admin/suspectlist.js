import React from "react";
import { Link } from "react-router-dom";
const SuspectList = () => {
  return (
    <>
      <div
        id="content "
        className="d-flex flex-column container scrollable-content"
        style={{ marginTop: "-694px", marginLeft: "225px", height: "100vh" }}
      >
        <div id="content">
          <div class=" p-4  mb-1 fs-1 text-dark">Suspect List</div>
          <Link
            to="/addSuspect"
            class="btn btn-outline-success"
            style={{ marginLeft: "1100px", marginTop: "-150px" }}
          >
            + Add New
          </Link>
          <hr />
          <div class="container table-responsive">
            <table class="table table-bordered table-hover  table-responsive py-1 my-1">
              <thead class="table-dark text-light">
                <tr>
                  <th scope="col">Suspect ID</th>
                  <th scope="col">Suspect Name</th>
                  <th scope="col">Suspect Identity</th>
                  <th scope="col">Suspect Photograph</th>
                  <th scope="col">Additional Details</th>
                  <th scope="col" colSpan={2}>
                    Options
                  </th>
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
                    class="btn btn-outline-success"
                    id="updateSuspect"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button class="btn btn-danger" id="deleteSuspect">
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuspectList;
