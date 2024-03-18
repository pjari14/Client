import React from "react";
import { Link } from "react-router-dom";
const UpdateEvidence = () => {
  return (
    <>
      <div
        id="content container"
        className="d-flex flex-column container scrollable-content"
        style={{ marginTop: "-694px", marginLeft: "225px", height: "100vh" }}
      >
        <div id="content">
          <div class=" p-4  mb-1 fs-1 text-dark">Add Evidence </div>
          <hr />
          <form
            class="row g-3 shadow py-4 px-4 mx-5 my-5 "
            id="evidencedetails"
          >
            <div class="col-md-6">
              <label class="form-label">Type of Evidence :</label>
            </div>
            <div class="col-md-6">
              <input
                type="file"
                id="evidencetype"
                class="form-control"
                placeholder=""
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Description of evidence :</label>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                id="evidencedescription"
                class="form-control"
                placeholder="Description of evidence"
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Uploaded By :</label>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                id="uploadedby"
                class="form-control"
                placeholder="Username or ID of the uploader"
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Date & Time of Upload :</label>
            </div>
            <div class="col-md-3">
              <input
                type="date"
                id="dateofupload"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="col-md-3">
              <input
                type="time"
                id="timeofupload"
                class="form-control"
                placeholder=""
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Status :</label>
            </div>
            <div class="col-md-6">
              <select
                type="form-select"
                id="status"
                class="form-control"
                placeholder=""
              >
                <option value="">Select the status</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
                <option value="approved">Approved</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Additional Notes :</label>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                id="notes"
                class="form-control"
                placeholder="Enter Notes"
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Timestamp :</label>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                id="timestamp"
                class="form-control"
                placeholder="Enter Timestamps"
              />
            </div>
            <div class="row py-4 justify-content-end">
              <div class="col-3">
                <Link to="/evidencelist">
                  <button type="button" class="btn btn-lg btn-outline-success">
                    Update Evidence
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UpdateEvidence;
