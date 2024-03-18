import React from "react";
import { Link } from "react-router-dom";

const PersonalData = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class=" p-3 text-center mb-2 text-danger fs-1">
            File your complaint here!
          </div>
          <hr />
        </div>
        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="complaintdetails">
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Personal details</h2>
          </div>
          <hr />
          <div class="col-md-6">
            <label for="FName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="FName"
              placeholder="First Name"
              required
            />
          </div>

          <div class="col-md-6">
            <label for="LName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="LName"
              placeholder="Last Name"
              required
            />
          </div>

          <div class="col-md-6">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="example@email.com"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="contact" class="form-label">
              Contact No.
            </label>
            <input
              type="text"
              class="form-control"
              id="contact"
              placeholder="Contact Number"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="date" class="form-label">
              Date
            </label>
            <input type="date" class="form-control" id="date" />
          </div>
          <div class="col-md-6">
            <label for="Identityproof" class="form-label">
              Identity Proof(Adharcard/ Driving License/ PAN Card)
            </label>
            <input
              type="file"
              class="form-control"
              id="identityproof"
              placeholder="Upload here"
              required
            />
          </div>
          <div class="col "></div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              required
            />
          </div>

          <div class="col-md-4"></div>

          <div class="col-3 ">
            <button
              type="reset"
              id="btnclear"
              to=""
              class=" btn btn-outline-danger btn-smshadow-sm    w-100 bg-gradient  p-3 text-center  fw-bold "
            >
              Clear
            </button>
          </div>
          <div class="col-3 ">
            <button
              type="submit"
              href="/Incident"
              class=" btn btn-outline-danger shadow-sm button btn-sm  shadow-sm w-100 bg-gradient p-3 text-center  fw-bold "
            >
              <span>Next</span>
            </button>
          </div>
          <div class="col-4 text-end"></div>
        </form>
      </div>
    </>
  );
};
export default PersonalData;
