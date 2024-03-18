import React from "react";
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const PersonalData = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const insertComplaint = async (data) => {
    try {
      const url = "http://localhost:5000/complaint/insert";
      const details = {
        fname: data.firstname,
        lname: data.lastname,
        email: data.email,
        contactno: data.contactno,
        address: data.address,
        // idproof: data.identityproof,
        // date: data.date,
        
      };
      const res = await axios.post(url, { details },{withCredentials: true});
      console.log(res);
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class=" p-3 text-center mb-2 text-danger fs-1">
            File your complaint here!
          </div>
          <hr />
        </div>
        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="complaintdetails" onSubmit={handleSubmit(insertComplaint)}>
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Personal details</h2>
          </div>
          <hr />
          <div class="col-md-6">
            <label for="firstname" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="First Name"
              {...register("firstname",{
                required:true,
              })}
            />
          </div>

          <div class="col-md-6">
            <label for="lastname" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Last Name"
              {...register("lastname",{
                required: true,
              })}
            />
          </div>

          <div class="col-md-6">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="example@email.com"
              {...register("email",{
                required: true
              })}
            />
          </div>
          <div class="col-md-6">
            <label for="contactno" class="form-label">
              Contact No.
            </label>
            <input
              type="text"
              class="form-control"
              id="contactno"
              placeholder="Contact Number"
              {...register("contactno",{
                required: true,
              })}
            />
          </div>
          <div class="col-md-6">
            <label for="date" class="form-label">
              Date
            </label>
            <input type="date" class="form-control" id="date"
              {...register("date",{
                required:true,
              })}
            />
          </div>
          <div class="col-md-6">
            <label for="idproof" class="form-label">
              Identity Proof(Adharcard/ Driving License/ PAN Card)
            </label>
            <input
              type="file"
              class="form-control"
              id="idproof"
              placeholder="Upload here"
              {...register("idproof",{
                required: true,
              })}
            />
          </div>
          <div class="col "></div>
          <div class="col-12">
            <label for="address" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              {...register("address",{
                required: true,
              })}
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
            {/* <Link
              to="/Incident"
              class="btn shadow-sm button btn-sm  shadow-sm w-100 bg-gradient p-3 text-center  fw-bold "
            > */}
              {/* <span>Next</span> */}
            {/* </Link> */}
            <button type="submit"> Insert</button>
          </div>
          <div class="col-4 text-end"></div>
        </form>
      </div>
    </>
  );
};
export default PersonalData;
