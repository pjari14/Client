import React from "react";
import { Link } from "react-router-dom";
const CheckStatus = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12 py-2 px-5">
          <div class=" p-3 text-center mb-2 fs-1">
            <h2 class="text-danger">Track your complaint status</h2> <hr />
          </div>

          <form
            class="row g-3 shadow border border-info py-5 px-4 mx-1 my-4 "
            id="checkstatus"
          >
            <div class="row py-4 px-3">
              <div class="col-sm-4">
                <label for="inputName" class="form-label mx-3">
                  Complaint ID*
                </label>
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Enter complaint no. here"
                  required
                />
              </div>
              <div class="col-sm-4">
                <Link
                  to=""
                  class=" btn btn-outline-danger btn-sm   py-2 px-3 mx-2"
                >
                  Search
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CheckStatus;
