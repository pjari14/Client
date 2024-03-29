import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SuspectList = () => {
  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Suspect List</h1>
            <Link
              to="/addSuspect"
              class="btn btn-outline-success"
              style={{ marginLeft: "1050px", marginTop: "-100px" }}
            >
              + Add New
            </Link>
            <hr />
            <div class="container table-responsive">
              <table class="table table-bordered table-hover my-1">
                <thead class="table-dark text-light">
                  <tr>
                    <th scope="col">Suspect ID</th>
                    <th scope="col">Suspect Name</th>
                    <th scope="col">Suspect Identity</th>
                    <th scope="col">Suspect Photograph</th>
                    <th scope="col">Additional Details</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>

                <>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link
                        class="btn btn-success w-100"
                        id="addcriminal"
                        to="/addcriminal"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                </>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuspectList;
