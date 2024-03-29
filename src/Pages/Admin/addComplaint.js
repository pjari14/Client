import React, { useState } from "react";
import { Link } from "react-router-dom";
import IndiaCities from "../../Components/incidancities";
import admin from "./Admin";
import {
  CCContent,
  DVContent,
  RBContent,
  THContent,
  ABContent,
} from "../../Components/crimecomponent";
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

const AddComplaint = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);

  const handleCrimeChange = (e) => {
    setSelectedCrime(e.target.value);
  };

  const renderCrimeDetails = () => {
    const CrimeDetailComponent = crimeDetails[selectedCrime].component;
    return CrimeDetailComponent ? <CrimeDetailComponent /> : null;
  };

  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Add Complaint </h1>
            <hr />
            <form
              class="row g-3 shadow py-4 px-4 mx-5 my-5 "
              id="complaintdetails"
            >
              <div class="col-md-6">
                <label class="form-label"> Category of complaint:</label>
              </div>
              <div class="col-md-6">
                <select
                  class="form-select"
                  id="ctype"
                  name="crimeType"
                  //value={selectedCrime}
                  //onChange={handleCrimeChange}
                >
                  {" "}
                  <option value="">Select a crime type</option>
                  {/*crimeTypes.map((crime) => (
                    <option key={crime.id} value={crime.id}>
                      {crime.label}
                    </option>
                  ))*/}
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Date of complaint:</label>
              </div>
              <div class="col-md-6">
                <input class="form-control" type="date" name="doc" id="cdate" />
              </div>
              {/*
              <IndiaCities />
                */}
              <div class="col-md-6">
                <label class="form-label">
                  Approximate date & time of incident:
                </label>
              </div>
              <div class="col-md-4">
                <input type="date" class="form-control" id="dtincident" />
              </div>
              <div class="col-md-2">
                <input type="time" class="form-control" />
              </div>

              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Reason of delay in report:
                </label>
              </div>
              <div class="col-md-6">
                <input
                  type="textarea"
                  placeholder="Enter reason of delay"
                  class="form-control"
                  id="reasonindelay"
                />
              </div>
              <div class="col-md-6">
                <label for="inputIncidentplace" class="form-label">
                  Where did the incident occur?
                </label>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter where did the incident occur"
                  id="inputIncidentplace"
                />
              </div>
              <div class="col-md-6">
                <label for="supportingevidence" class="form-label">
                  Supporting Evidence
                </label>
              </div>
              <div class="col-md-6">
                <input
                  type="file"
                  class="form-control"
                  id="supportingevidence"
                />
              </div>
              <div class="col-md-6">
                <label class="form-label">
                  Name of the person/company against which/whom the complaint is
                  filed:
                </label>
              </div>
              <div class="col-md-6">
                <input class="form-control" name="suspect" type="text" id="" />
              </div>
              <div class="col-md-6">
                <label for="additionalinfo" class="form-label">
                  Please provide any additional information:
                </label>
              </div>
              <div class="col-md-6">
                <textarea class="form-control" id="additionalinfo" rows="3" />
              </div>

              <div class="col-md-12 mx-3 text-danger">
                <input
                  class="form-check-input "
                  type="checkbox"
                  value=""
                  id="check"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  *I confirm that the information I've given is accurate and
                  true.
                </label>
              </div>
              <div class="row py-4 justify-content-end">
                <div class="col-3">
                  <Link to="/complaintlist">
                    <button
                      type="button"
                      class="btn btn-lg w-100 btn-outline-success"
                    >
                      Add
                    </button>
                  </Link>
                </div>
              </div>
              <div class="col-4 text-end"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddComplaint;
