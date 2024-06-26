import React from "react";
import image from "../Assets/images/logo(blue).png";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Link } from "react-router-dom";
import { fetchUser } from "../ReduxStore/Userslice/Userslice";
const Login = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loginUser = async (data) => {
    try {
      const url = "http://localhost:5000/user/login";
      const res = await axios.post(url, data, { withCredentials: true });
      if (res.data.success) {
        dispatch(fetchUser());
        console.log(user);
        window.location.href = "/";
      }
      reset();
    } catch (error) {
      console.error(error);
      alert("Please check email and password");
    }
  };

  return (
    <section className="py-5 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-4 align-items-center ">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="d-flex justify-content-center text-bg-primary">
              <div className="col-12 col-xl-9">
                <img
                  class="img-fluid rounded mb-4"
                  loading="lazy"
                  src={image}
                  width="245"
                  height="80"
                  alt="CyberIris   Logo"
                />
                <hr class="border-primary-subtle mb-4" />
                <h2 class="h2 mb-4" style={{ color: "#062D4B" }}>
                  Reporting incidents made easy. Sign in here
                </h2>
                <p class="lead m-0"></p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-5 ">
            <div className="card border-light-subtle shadow-sm rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <h3>Sign in</h3>
                      <p>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit(loginUser)}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          {...register("email", {
                            required: true,
                          })}
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
                          id="password"
                          {...register("password", {
                            required: true,
                          })}
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
                        <button
                          className=" btn bsb-btn-xl text-white "
                          style={{ backgroundColor: "#062D4B" }}
                          type="submit"
                        >
                          Log in now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                      <Link to="/user/accounts/reset">Forgot password</Link>
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

export default Login;
