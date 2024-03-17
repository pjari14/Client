import React, { useState, useEffect } from "react";
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
            <label for="inputName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="First Name"
            />
          </div>

          <div class="col-md-6">
            <label for="inputName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Last Name"
            />
          </div>

          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="example@email.com"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Contact No.
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Contact Number"
            />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Date
            </label>
            <input type="date" class="form-control" id="inputZip" />
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
            />
          </div>

          <div class="col-md-4"></div>

          <div class="col-3 ">
            <button
              type="reset"
              id="btnclear"
              to=""
              class="btn btn-smshadow-sm    w-100 bg-gradient  p-3 text-center  fw-bold "
            >
              Clear
            </button>
          </div>
          <div class="col-3 ">
            <Link
              to="/Incident"
              class="btn shadow-sm button btn-sm  shadow-sm w-100 bg-gradient p-3 text-center  fw-bold "
            >
              <span>Next</span>
            </Link>
          </div>
          <div class="col-4 text-end"></div>
        </form>
      </div>
    </>
  );
};
export default PersonalData;
