import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";

const AdminLogin = () => {
  return (
    <section class="h-100 bg-light ">
      <form>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img
                      src=""
                      alt="Sample"
                      class="img-fluid signup-img py-5 "
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div class="col-xl-6">
                    <div
                      class="card-body "
                      style={{ marginTop: "100px", padding: "100px" }}
                    >
                      <h3 class="text-center">Admin Login</h3>
                      <form class="py-5">
                        <div className="row gy-3 overflow-hidden">
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                              />
                              <label for="email" className="form-label">
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                required
                              />
                              <label for="password" className="form-label">
                                Password
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <Link
                                className=" btn btn-success text-light btn-gradient btn-lg"
                                type="submit"
                                to="/admin"
                              >
                                Log in now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
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
export default AdminLogin;
