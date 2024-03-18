import React from "react";
import image from "../Assets/images/Sign up-pana (1).png";
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
    <section class="h-100 bg-light ">
      <form onSubmit={handleSubmit(signupUser)}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img
                      src={image}
                      alt="Sample"
                      class="img-fluid signup-img py-5 "
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div class="col-xl-6">
                    <div class="card-body p-md-5 my-5">
                      <h2
                        class="mb-5 text-uppercase text-danger"
                        style={{ fontWeight: "bold" }}
                      >
                        Register Yourself Here!
                      </h2>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="form3Example1m">
                              First name
                            </label>
                            <input
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
                              Last name
                            </label>
                            <input
                              type="text"
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
                              Address
                            </label>
                            <input
                              type="text"
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
                            Contact
                          </label>
                          <input
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
                              Email-ID
                            </label>
                            <input
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
                              Password
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

                      <div class="d-flex justify-content-end pt-3">
                        <button
                          type="reset"
                          class="btn text-light btn-lg "
                          style={{ backgroundColor: "#BA68C8" }}
                        >
                          Reset all
                        </button>
                        <button
                          type="submit"
                          class="btn btn-warning btn-lg ms-2"
                        >
                          Register
                        </button>
                      </div>
                      <hr />
                      <div class="container justify-content-center  align-items-cente ">
                        <h3>Already have an account?</h3>
                        <Link
                          to="/login"
                          class="btn btn-dark"
                          style={{ marginTop: "-80px", marginLeft: "420px" }}
                        >
                          Login now
                        </Link>
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
  );
};

export default Signup;
