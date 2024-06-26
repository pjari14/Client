import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";

const Suspect = () => {
  const [image, setImage] = useState([]);
  const incident = useSelector((state) => state.incident);
  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const insertSuspect = async (data) => {
    try {
      const url = "http://localhost:5000/suspect/insert";
      // const suspect = {
      //   susname: data.susname,
      //   incidentId: incident._id,
      //   sussocial: data.sussocial,
      //   sususername: data.sususername,
      //   // susphoto: data.susphoto,
      //   otherdetails: data.otherdetails,

      // };
      // console.log(data, incident, cities, selectedState);
      const formData = new FormData();
      if (
        data.susname === "" &&
        data.sussocial === "" &&
        data.sususername === "" &&
        image === "" &&
        data.otherdetails === ""
      ) {
        // alert("can't send empty form!!");
        enqueueSnackbar({
          message: "Can't Send Empty Form!",
          style: {
            backgroundColor: "#dc3545",
          },
        });
      } else {
        formData.append("susname", data.susname);
        formData.append("incidentId", incident._id);
        formData.append("sussocial", data.sussocial);
        formData.append("sususername", data.sususername);
        formData.append("susphoto", image);
        formData.append("otherdetails", data.otherdetails);
        enqueueSnackbar({
          message: "Complaint Sent SUccessfully",
          style: {
            backgroundColor: "#198754",
          },
        });

        // console.log(data, incident, cities, selectedState);
        // dispatch(createIncident(formData));
        const res = await axios.post(url, formData, { withCredentials: true });
        console.log(res);
        // navigate("/preview");
        reset();
        setImage("");
      }
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
        <form
          class="row g-3 shadow py-4 px-4 mx-5 my-5 "
          id="complaintdetails"
          onSubmit={handleSubmit(insertSuspect)}
        >
          <div class="col-sm-12">
            <h2 class="text text-secondary fw-3">Suspect details</h2>
            <h6 class="text-danger bg-light py-2 my-2 px-2">
              Please provide details of suspect.Any information provided will be
              kept confidential and may help during the investigation.
            </h6>
          </div>
          <hr />
          <div class="col-md-4">
            <input
              type="text"
              id="susname"
              class="form-control"
              placeholder="Suspect Name"
              {...register("susname")}
            />
          </div>
          <div class="col-md-4">
            <select
              class="form-control"
              id="sussocial"
              {...register("sussocial")}
            >
              <option value="">Select Suspect Identity</option>
              <option value="Instagram id">Instagram id</option>
              <option value="Mobile number">Mobile Contact</option>
              <option value="Facebook">Facebook</option>
              <option value="Email-id">Email-id</option>
              <option value="Twitter">Twitter</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="col-md-4">
            <input
              type="Text"
              id="sususername"
              class="form-control"
              placeholder=""
              {...register("sususername")}
            />
          </div>

          <div class="col-md-6">
            <h6 class="text-danger">
              *Please provide any photograph of suspect(Upload JPG/PNG file of
              maximum 5MB)
            </h6>
          </div>

          <div class="col-md-6">
            <input
              type="file"
              className="form-control"
              id="evidence"
              onChange={handleUpload}
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">Any other details:</label>
          </div>
          <div class="col-md-6">
            <textarea
              className="form-control"
              rows="3"
              id="otherdetails"
              {...register("otherdetails")}
            />
          </div>
          <div class="row py-4 mt-4 ml-4">
            <div class="col-4 ">
              <Link
                to="/Incident"
                class=" btn btn-outline-secondary shadow-sm  btn-sm  shadow-sm  bg-gradient p-3 text-center  fw-bold "
              >
                <span>Back</span>
              </Link>
            </div>

            <div class="col-4">
              <button
                type="submit"
                class="btn btn-outline-danger button btn-sm  shadow-sm  bg-gradient p-3 text-center  fw-bold "
                onClick={() => insertSuspect()}
              >
                Add
              </button>
            </div>
            <div class="col-4">
              <button
                // type="submit"
                onClick={() => navigate("/preview")}
                class="btn btn-outline-success shadow-sm button btn-sm  shadow-sm  bg-gradient p-3 text-center  fw-bold "
              >
                Preview and submit
              </button>
            </div>
          </div>
          <div class="col-4 text-start text-danger h5">Note:</div>
          <h6>
            1. Add multiple suspects (if applicable) using the "Add" button.
            <br />
            <br />
            2. Click the "Preview" button to review your complaint.
          </h6>
        </form>
      </div>
    </>
  );
};
export default Suspect;
