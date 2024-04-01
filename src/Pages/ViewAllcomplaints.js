import React from "react";
import { Link } from "react-router-dom";
const ViewAllComplaints = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12 py-2">
          <div class=" p-3 text-center mb-2 fs-1">
            <h1 class="text-danger">My complaints</h1> <hr />
          </div>
          <div class="container table-responsive">
            <table class="table table-bordered table-hover  py-1 my-1">
              <thead class="table-light text-dark">
                <tr>
                  {/* <th scope="col">Com_ID</th> */}
                  <th scope="col">_id</th>
                  <th scope="col">Complaint Date</th>
                  <th scope="col">Crime Category</th>
                  <th scope="col">State</th>
                  <th scope="col">City</th>
                  <th scope="col">Date of Incident</th>
                  {/* <th scope="col">Time of Incident</th> */}

                  <th scope="col">Place of incident occurance</th>

                  <th scope="col">Additional Details</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewAllComplaints;
