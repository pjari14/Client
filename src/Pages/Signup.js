import React from "react";
import image from "../Assets/images/undraw_Sign_up_n6im.png";
const Signup = () => {
  return (
    <section class="h-100 ">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img
                    src={image}
                    alt="Sample photo"
                    class="img-fluid signup-img py-5 my-5"
                  />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Register Yourself Here!</h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m">
                            First name
                          </label>
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="form3Example1n"
                            class="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m1">
                            Email-ID
                          </label>
                          <input
                            type="text"
                            id="form3Example1m1"
                            class="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                            Contact
                          </label>
                          <input
                            type="text"
                            id="form3Example1n1"
                            class="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 class="mb-0 me-4">Gender: </h6>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                        />
                        <label class="form-check-label" for="femaleGender">
                          Female
                        </label>
                      </div>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label class="form-check-label" for="maleGender">
                          Male
                        </label>
                      </div>

                      <div class="form-check form-check-inline mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="option3"
                        />
                        <label class="form-check-label" for="otherGender">
                          Other
                        </label>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example8">
                        Address
                      </label>
                      <input
                        type="text"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button
                        type="reset"
                        class="btn btn-light btn-lg text-dark"
                      >
                        Reset all
                      </button>
                      <button type="button" class="btn btn-warning btn-lg ms-2">
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
