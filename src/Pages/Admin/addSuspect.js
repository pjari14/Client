import React from "react";
import { Link } from "react-router-dom";
const AddSuspect = () => {
  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Add Suspect </h1>
            <hr />

            <form
              class="row g-3 shadow py-4 px-4 mx-5 my-5 "
              id="suspectdetails"
            >
              <div class="col-md-6">
                <label class="form-label">Suspect Name :</label>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="suspectname"
                  class="form-control"
                  placeholder="Suspect Name"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Suspect Identity :</label>
              </div>
              <div class="col-md-6">
                <select class="form-control">
                  <option value="Select">Select Suspect Identity</option>
                  <option value="Instagram id">Instagram id</option>
                  <option value="Mobile number">Mobile Contact</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Email-id">Email-id</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="suspectinfo"
                  placeholder=""
                  class="form-control"
                ></input>
              </div>

              <div class="col-md-6">
                <label class="form-label">Suspect Photograph :</label>
              </div>
              <div class="col-md-6">
                <input type="file" class="form-control" id="suspectphoto" />
              </div>

              <div class="col-md-6">
                <label class="form-label">Any other details:</label>
              </div>

              <div class="col-md-6">
                <textarea className="form-control" rows="3" />
              </div>
              <div class="row py-4 justify-content-end">
                <div class="col-3">
                  <Link to="/suspectlist">
                    <button
                      type="button"
                      class="btn btn-lg w-100 btn-outline-success"
                    >
                      Add suspect
                    </button>
                  </Link>
                </div>
              </div>
              <div class="col-4 text-end"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddSuspect;
