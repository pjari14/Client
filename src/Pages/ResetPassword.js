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
    <div className="bg-dark p-5 d-flex justify-content-center">
      <div className="card shadow-lg rounded-3 p-4">
        <form onSubmit={handleSubmit(SubmitData)}>
          <h1 className="font-mhiora text-center text-dark my-5">
            Change Password
          </h1>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="newPass">
              New Password
            </label>
            <input
              type="password"
              placeholder="•••••••"
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
              className="px-2 py-2 w-full  my-3 rounded-3 bg-secondary focus:border-primary focus:border-2 duration-150"
            />
            {errors.newPassword && (
              <h1 className="text-danger">{errors.newPassword.message}</h1>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="confirmPass">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="•••••••"
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
              className="px-2 py-2 w-full  my-3 rounded-3 bg-secondary focus:border-primary focus:border-2 duration-150"
            />
            {errors.confirmPass && (
              <h1 className="text-danger">{errors.confirmPass.message}</h1>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 my-4 font-libre"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
