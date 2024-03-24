import React from "react";
import image from "../Assets/images/logo(blue).png";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Link } from "react-router-dom";
const Signup = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const signupUser = async (data) => {
    try {
      const url = "http://localhost:5000/user/register";
      const user = {
        firstname: data.fname,
        lastname: data.lname,
        address: data.address,
        contact: data.contact,
        email: data.email,
        password: data.password,
      };
      const res = await axios.post(url, { user }, { withCredentials: true });
      console.log(res);
      alert("User registered successfully!");
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section class="h-100  ">
        <form onSubmit={handleSubmit(signupUser)}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="container">
                <div class="card border-light-subtle shadow-sm">
                  <div class="row g-0">
                    <div class="col-12 col-md-6 text-bg-primary">
                      <div class="d-flex align-items-center justify-content-center h-100">
                        <div class="col-10 col-xl-8">
                          <img
                            class="img-fluid rounded mb-4"
                            loading="lazy"
                            src={image}
                            width="245"
                            height="80"
                            alt="BootstrapBrain Logo"
                          />
                          <hr class="border-primary-subtle mb-4" />
                          <h2 class="h2 mb-3">Create Your Account </h2>
                          <p class="lead m-0">
                            Report Crimes Quickly and Securely
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="card-body p-md-5 ">
                        <h2 class="h3">Registration</h2>
                        <h3 class="fs-6 fw-normal text-secondary m-0">
                          Enter your details to register
                        </h3>
                        <div class="row my-5 overflow-hidden">
                          <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1m">
                                  First name<span class="text-danger">*</span>
                                </label>
                                <input
                                  placeholder="First name"
                                  type="text"
                                  id="fname"
                                  class="form-control form-control-lg"
                                  {...register("fname", {
                                    required: true,
                                  })}
                                />
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1n">
                                  Last name<span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Last name"
                                  id="lname"
                                  class="form-control form-control-lg"
                                  {...register("lname", {
                                    required: true,
                                  })}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example8">
                                  Address<span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Full Address"
                                  id="address"
                                  class="form-control form-control-lg"
                                  {...register("address", {
                                    required: true,
                                  })}
                                />
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <label class="form-label" for="form3Example1n1">
                                Contact<span class="text-danger">*</span>
                              </label>
                              <input
                                placeholder="Contact"
                                type="text"
                                id="contact"
                                class="form-control form-control-lg"
                                {...register("contact", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1m1">
                                  Email-ID<span class="text-danger">*</span>
                                </label>
                                <input
                                  placeholder="example@gmail.com"
                                  type="text"
                                  id="email"
                                  class="form-control form-control-lg"
                                  {...register("email", {
                                    required: true,
                                  })}
                                />
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1n1">
                                  Password<span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="password"
                                  class="form-control form-control-lg"
                                  {...register("password", {
                                    required: true,
                                  })}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                name="iAgree"
                                id="iAgree"
                                required
                              />
                              <label
                                class="form-check-label text-secondary"
                                for="iAgree"
                              >
                                I agree to the{" "}
                                <a
                                  href="#!"
                                  class="link-primary text-decoration-none"
                                >
                                  terms and conditions
                                </a>
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="d-grid my-4">
                              <button
                                type="submit"
                                class=" btn bsb-btn-xl text-white "
                                style={{ backgroundColor: "#062D4B" }}
                              >
                                Register
                              </button>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-12">
                              <hr class="border-secondary-subtle" />
                              <p class="m-0 text-secondary text-center">
                                Already have an account?{" "}
                                <Link
                                  to="/login"
                                  class="link-primary text-decoration-none"
                                >
                                  Sign in
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
