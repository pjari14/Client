import React from "react";
import { Link } from "react-router-dom";
const AddEvidence = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="evidencedetails">
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Evidence details</h2>
          </div>
          <hr />

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
            <br></br>
            <h6>
              Please provide any photograph/video/document of evidence(Upload
              JPG/PNG/mp4/mp3/txt file of max 5MB)
            </h6>
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
            ><option value="">Select the status</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="approved">Approved</option></select>
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
          <div class="col-6">
            <Link to="/evidencelist">
            <button type="button" class="btn btn-danger" style={{fontSize:"25px"}}>Add</button></Link>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddEvidence;
