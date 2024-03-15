import React from "react";
import { Link } from "react-router-dom";

const Suspect = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class=" p-3 text-center mb-2 text-success fs-1">
            Report complaint annonymously!
          </div>
          <hr />
        </div>

        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="personaldata">
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Suspect details</h2>
            <h6 class="text-white bg-primary py-2 my-2 px-2">
              Please provide details of suspect.Any information provided will be
              kept confidential and may help during the investigation.
            </h6>
          </div>
          <hr />
          <div class="col-md-3">
            <input
              type="text"
              id="suspectname"
              class="form-control"
              placeholder="Suspect Name"
            />
          </div>
          <div class="col-md-3">
            <select class="form-control">
              <option value="Select">Select</option>
              <option value="Instagram id">Instagram id</option>
              <option value="Mobile number">Mobile Contact</option>
              <option value="Facebook">Facebook</option>
              <option value="Email-id">Email-id</option>
              <option value="Twitter">Twitter</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="col-md-3">
            <input
              type="Text"
              id="suspectinfo"
              class="form-control"
              placeholder=""
            />
          </div>
          <div class="col-md-3">
            <button class="btn btn-md btn-dark">Add</button>
          </div>
          <div class="col-md-6">
            <h6>
              Please provide any photograph of suspect(Upload JPG/PNG file of
              max 5MB)
            </h6>
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
            <div class="col-3 ">
              <Link
                to="/reportannonymously"
                class="btn shadow-sm  btn-sm btn-warning shadow-sm w-100 bg-gradient p-3 text-center text-white fw-bold "
              >
                <span>Back</span>
              </Link>
            </div>

            <div class="col-3 ">
              <Link
                to="/previewcomplaint"
                class="btn shadow-sm button btn-sm btn-info shadow-sm w-100 bg-gradient p-3 text-center text-white fw-bold "
              >
                <span>Preview & Next</span>
              </Link>
            </div>
          </div>
          <div class="col-4 text-end"></div>
        </form>
      </div>
    </>
  );
};
export default Suspect;
