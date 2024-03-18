import React, { useState } from "react";
import { Link } from "react-router-dom";
import IndiaCities from "../Components/incidancities";
import {
  CCContent,
  DVContent,
  RBContent,
  THContent,
  ABContent,
} from "../Components/crimecomponent";
import axios from "axios";
import { useForm } from "react-hook-form";
const crimeTypes = [
  { id: "CC", label: "Cyber Crime" },
  { id: "DV", label: "Domestic Violence" },
  { id: "AB", label: "Abuse" },
  { id: "TH", label: "Theft" },
  { id: "RB", label: "Robbery" },
];


const crimeDetails = {
  CC: {
    title: "Cyber Crime",
    component: CCContent,
  },
  DV: {
    title: "Domestic Violence",
    component: DVContent,
  },
  AB: {
    title: "Abuse",
    component: ABContent,
  },
  TH: {
    title: "Theft",
    component: THContent,
  },
  RB: {
    title: "Robbery",
    component: RBContent,
  },
};

const Incident = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [policestation, setPoliceStation] = useState("");


  const handleCrimeChange = (e) => {
    setSelectedCrime(e.target.value);
  };

  const renderCrimeDetails = () => {
    const CrimeDetailComponent = crimeDetails[selectedCrime].component;
    return CrimeDetailComponent ? <CrimeDetailComponent /> : null;
  };

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const insertIncident = async (data) => {
    try {
      const url = "http://localhost:5000/incident/insert";
      const incident = {
        category: data.category,
        state: selectedState,
        city: cities[0],
        // policestation: policestation,
        dateofincident: data.dateofincident,
        reasonofdelay: data.reasonofdelay,
        location: data.location,
        nameofsus: data.nameofsus,
        additionalinfo: data.additionalinfo,
      };
      console.log(data,incident,cities,selectedState);
      const res = await axios.post(url, { incident }, { withCredentials: true });
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
        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="complaintdetails" onSubmit={handleSubmit(insertIncident)}>
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Complaint/Incident details</h2>
          </div>
          <hr />
          <div class="col-md-6">
            <label class="form-label"> Category of complaint:</label>
          </div>
          <div class="col-md-6">
            <select
              class="form-select"
              id="ctype"
              name="crimeType"
              value={selectedCrime}
              onChange={handleCrimeChange}
              {...register("category",{
                required: true,
              })}
            >
              {" "}
              <option value="">Select a crime type</option>
              {crimeTypes.map((crime) => (
                <option key={crime.id} value={crime.label}>
                  {crime.label}
                </option>
              ))}
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Date of complaint:</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="date" name="doc" id="cdate" />
          </div>
          <IndiaCities selectedState={selectedState} cities={cities} setCities={setCities} setSelectedState={setSelectedState} />

          <div class="col-md-6">
            <label class="form-label">
              Approximate date & time of incident:
            </label>
          </div>
          <div class="col-md-4">
            <input type="date" class="form-control" id="dateofincident" 
              {...register("dateofincident",{
                required: true,
              })}
            />
          </div>
          
          <div class="col-md-2">
            <input type="time" class="form-control" />
          </div>
          <div class="col-md-6">
            <label for="policestation" class="form-label">
              Select Police Station
            </label>
          </div>
          <div class="col-md-6">
            <select id="policestation"
            value={policestation}
            onChange={(evt) => setPoliceStation(evt.target.value)}  
>
              <option value="Athva">Athva</option>
              <option value="Bhatar">Bhatar</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="reasonofdelay" class="form-label">
              Reason of delay in report:
            </label>
          </div>
          <div class="col-md-6">
            <input
              type="textarea"
              placeholder="Enter reason of delay"
              class="form-control"
              id="reasonofdelay"
              {...register("reasonofdelay")}
            />
          </div>
          <div class="col-md-6">
            <label for="location" class="form-label">
              Where did the incident occur?
            </label>
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Enter where did the incident occur"
              id="location"
              {...register("location")}
            />
          </div>
          <div class="col-md-6">
            <label for="evidence" class="form-label">
              Supporting Evidence
            </label>
          </div>
          <div class="col-md-6">
            <input type="file" class="form-control" id="evidence" 
            {...register("evidence")}
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">
              Name of the person/company against which/whom the complaint is
              filed:
            </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" name="suspect" type="text" id="nameofsus"
            {...register("nameofsus")}
            />
          </div>
          <div class="col-md-6">
            <label for="additionalinfo" class="form-label">
              Please provide any additional information:
            </label>
          </div>
          <div class="col-md-6">
            <textarea class="form-control" id="additionalinfo" rows="3"
              {...register("additionalinfo")}
            />
          </div>

          <div class="col-md-12 mx-3 text-danger">
            <input
              class="form-check-input "
              type="checkbox"
              value=""
              id="check"
            />
            <label class="form-check-label" for="flexCheckDefault">
              *I confirm that the information I've given is accurate and true.
            </label>
          </div>
          <div class="row py-4 ">
            <div class="col-4 ">
              <button
                type="reset"
                class="btn btn-sm shadow-sm  btn-dark   bg-gradient  p-3 text-center  fw-bold "
              >
                Clear
              </button>
            </div>
            <div class="col-4 ">
              <Link
                to="/personaldata"
                class="btn shadow-sm  btn-sm  shadow-sm bg-gradient p-3 text-center fw-bold "
              >
                <span>Back</span>
              </Link>
            </div>
            <div class="col-4 ">
              <Link
                to="/suspect"
                class="btn shadow-sm button btn-sm  shadow-sm bg-gradient p-3 text-center fw-bold "
              >
                <span>Next</span>
              </Link>
              <button type="submit">Insert</button>
            </div>
          </div>
          <div class="col-4 text-end"></div>
        </form>
        <div class="container py-3 text-center ">
          <h2>IPC sections</h2>
          {selectedCrime && renderCrimeDetails()}
        </div>
      </div>
    </>
  );
};
export default Incident;
