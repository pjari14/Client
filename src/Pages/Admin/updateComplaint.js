import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import IndiaCities from "../../Components/incidancities";
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

const UpdateComplaint = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);

  const handleCrimeChange = (e) => {
    setSelectedCrime(e.target.value);
  };

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [params] = useSearchParams();
  const renderCrimeDetails = () => {
    const CrimeDetailComponent = crimeDetails[selectedCrime].component;
    return CrimeDetailComponent ? <CrimeDetailComponent /> : null;
  };

  const [incident, setIncident] = useState({
    id: "",
    userId: "",
    category: "",
    dateofcmp: "",
    state: "",
    city: "",
    dateofincident: "",
    policestaion: "",
    reasonofdelay: "",
    location: "",
    evidence: "",
    nameofsus: "",
    additionalinfo: "",
  });
  const [dateofincident, setDateofincident] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchIncident();
  }, []);
  function fetchIncident() {
    fetch(`http://localhost:5000/incident/${params.get("id")}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const incidentData = data.data.data;
        setIncident({
          id: incidentData._id,
          userId: incidentData.userId,
          category: incidentData.category,
          dateofcmp: incidentData.dateofcmp,
          state: incidentData.state,
          city: incidentData.city,
          dateofincident: incidentData.dateofincident,
          policestaion: incidentData.policestaion,
          reasonofdelay: incidentData.reasonofdelay,
          location: incidentData.location,
          evidence: incidentData.evidence,
          nameofsus: incidentData.nameofsus,
          additionalinfo: incidentData.additionalinfo,
        });
        setDateofincident(incident.dateofincident); // Assuming `dateofincident` is the attribute for Date of Incident
        setCategory(incident.category);
      });
  }

  const updateComplaint = () => {
    fetch(`http://localhost:5000/incident/${incident.id}`, {
      method: "PATCH", // Use PATCH method for partial updates
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        dateofcmp: incident.dateofcmp, // Assuming you don't update dateofcmp
        state: incident.state, // Assuming you don't update state
        city: incident.city, // Assuming you don't update city
        // dateofincident: dateofincident,
        // policestation: incident.policestation, // Assuming you don't update policestation
        reasonofdelay: incident.reasonofdelay,
        location: incident.location,
        evidence: incident.evidence, // Assuming you don't update evidence
        nameofsus: incident.nameofsus,
        additionalinfo: incident.additionalinfo,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update complaint");
        }
        console.log("Complaint updated successfully");
        // You might want to redirect the user to a different page upon successful update
      })
      .catch((error) => {
        console.error("Error updating complaint:", error);
      });
  };
  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Update Complaint</h1>
            <hr />
            <form
              class="row g-3 shadow py-4 px-4 mx-5 my-5 "
              id="complaintdetails"
            >
              <div class="col-md-6">
                <label class="form-label">Complaint ID:</label>
              </div>
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="text"
                  name="cmpid"
                  value={params.get("id")}
                  id="cmpid"
                />
              </div>
              <div class="col-md-6">
                <label class="form-label"> Category of complaint:</label>
              </div>
              <div class="col-md-6">
                <select
                  class="form-select"
                  id="ctype"
                  name="crimeType"
                  value={incident.category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select a crime type</option>
                  {/*crimeTypes.map((crime) => (
                    <option key={crime.id} value={crime.id}>
                      {crime.label}
                    </option>
                  ))*/}
                  <option>Cyber Crime</option>
                  <option>Domestic Violence </option>
                  <option>Abuse </option>
                  <option>Theft</option>
                  <option>Robbery</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Date of complaint:</label>
              </div>
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="date"
                  name="doc"
                  id="cdate"
                  // value={cdate}
                  // onChange={(e) => setCdate(e.target.value)}
                />
              </div>
              {/*<IndiaCities />*/}

              <div class="col-md-6">
                <label class="form-label">
                  Approximate date & time of incident:
                </label>
              </div>
              <div class="col-md-4">
                <input
                  type="date"
                  class="form-control"
                  id="dtincident"
                  value={incident.dateofincident}
                  onChange={(e) => setDateofincident(e.target.value)}
                />
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
                  value={incident.reasonofdelay}
                  onChange={(e) =>
                    setIncident({ ...incident, reasonofdelay: e.target.value })
                  }
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
                  value={incident.location}
                  onChange={(e) =>
                    setIncident({ ...incident, location: e.target.value })
                  }
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
                <input
                  class="form-control"
                  name="suspect"
                  type="text"
                  id=""
                  value={incident.nameofsus}
                  onChange={(e) =>
                    setIncident({ ...incident, nameofsus: e.target.value })
                  }
                />
              </div>
              <div class="col-md-6">
                <label for="additionalinfo" class="form-label">
                  Please provide any additional information:
                </label>
              </div>
              <div class="col-md-6">
                <textarea
                  class="form-control"
                  id="additionalinfo"
                  rows="3"
                  value={incident.additionalinfo}
                  onChange={(e) =>
                    setIncident({ ...incident, additionalinfo: e.target.value })
                  }
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
                      onClick={updateComplaint}
                    >
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateComplaint;
