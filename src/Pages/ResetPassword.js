import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm();

  const SubmitData = async (data) => {
    if (data.newPassword !== data.confirmPass) {
      return;
    } else {
      try {
        const response = await axios.put(
          "http://localhost:5000/user/password/reset",
          { token, newPassword: data.newPassword },
          { withCredentials: true }
        );
        if (response.status === 200 && response.data.success) {
          return navigate("/login");
        }
      } catch (error) {}
    }
    reset();
  };

  return (
    <div className="p-5 d-flex justify-content-center">
      <div className="card p-5 shadow-sm  rounded-4 p-4 w-50">
        <form onSubmit={handleSubmit(SubmitData)}>
          <h2 className="text-center my-2">Change Password</h2>
          <hr />
          <div className="mb-4 mt-5">
            <label className="form-label " htmlFor="newPass">
              New Password:
            </label>
            <input
              type="password"
              id="newPass"
              {...register("newPassword", {
                required: {
                  value: true,
                  message: "New Password is Required!",
                },
                pattern: {
                  value: /([A-Z0-9a-z@_-]){8,}/g,
                  message:
                    "New Password must contain at least 8 characters and should contain alphanumeric characters and @,-,_!",
                },
              })}
              className=" form-control  py-2 w-full mt-2 rounded-3 "
            />
            {errors.newPassword && (
              <h6 className="text-danger mt-2">{errors.newPassword.message}</h6>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="confirmPass">
              Confirm password:
            </label>
            <input
              type="password"
              id="confirmPass"
              {...register("confirmPass", {
                required: {
                  value: true,
                  message: "Confirm Password is Required!",
                },
                pattern: {
                  value: /([A-Z0-9a-z@_-]){8,}/g,
                  message:
                    "New Password must contain at least 8 characters and should contain alphanumeric characters and @,-,_!",
                },
              })}
              className="px-2 py-2 w-full mt-2 rounded-3 form-control"
            />
            {errors.confirmPass && (
              <h6 className="text-danger  mt-2">
                {errors.confirmPass.message}
              </h6>
            )}
          </div>
          <button
            type="submit"
            className="btn text-white w-100 my-2 "
            style={{ backgroundColor: "#062d4b" }}
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
