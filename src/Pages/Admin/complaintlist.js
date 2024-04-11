import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ComplaintList = () => {
  const [incident, setIncident] = useState([]);

  useEffect(() => {
    fetchIncident();
  }, []);
  function fetchIncident() {
    fetch("http://localhost:5000/incident")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.data);
        const transformUser = data.data.data.map((incidentData) => {
          return {
            id: incidentData._id,
            userId: incidentData.userId,
            category: incidentData.category,
            dateofcmp: incidentData.dateofcmp,
            state: incidentData.state,
            city: incidentData.city,
            dateofincident: incidentData.dateofincident,
            policestation: incidentData.policestation,
            reasonofdelay: incidentData.reasonofdelay,
            location: incidentData.location,
            evidence: incidentData.evidence,
            nameofsus: incidentData.nameofsus,
            additionalinfo: incidentData.additionalinfo,
            firstname: incidentData.firstname,
            lastname: incidentData.lastname,
            status: incidentData.status,
          };
        });

        setIncident(transformUser);
        console.log("this is incident", incident);
      });
  }
  const [searchText, setSearchText] = useState([]);
  function searchComplaint(name) {
    fetch(`http://localhost:5000/incident/search?firstname=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.data);
        const transformUser = data.data.data.map((incidentData) => {
          return {
            id: incidentData._id,
            userId: incidentData.userId,
            category: incidentData.category,
            dateofcmp: incidentData.dateofcmp,
            state: incidentData.state,
            city: incidentData.city,
            dateofincident: incidentData.dateofincident,
            policestation: incidentData.policestation,
            reasonofdelay: incidentData.reasonofdelay,
            location: incidentData.location,
            evidence: incidentData.evidence,
            nameofsus: incidentData.nameofsus,
            additionalinfo: incidentData.additionalinfo,
            firstname: incidentData.firstname,
            lastname: incidentData.lastname,
            status: incidentData.status,
          };
        });

        setIncident(transformUser);
        console.log("this is incident", incident);
      });
  }

  const [police, setPolice] = useState("");
  const [crime, setCrime] = useState("");
  const [status, setStatus] = useState("");
  function filterAll(policestation, crime, status) {
    let url = "http://localhost:5000/incident/search?";
    let filtersApplied = false;

    if (policestation) {
      url += `policestation=${policestation}&`;
      filtersApplied = true;
    }
    if (crime) {
      url += `category=${crime}&`;
      filtersApplied = true;
    }
    if (status) {
      url += `status=${status}&`;
      filtersApplied = true;
    }

    if (!filtersApplied) {
      fetchIncident();
      return;
    }

    if (url.endsWith("&")) url = url.slice(0, -1);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.data);
        const transformUser = data.data.data.map((incidentData) => {
          return {
            id: incidentData._id,
            userId: incidentData.userId,
            category: incidentData.category,
            dateofcmp: incidentData.dateofcmp,
            state: incidentData.state,
            city: incidentData.city,
            dateofincident: incidentData.dateofincident,
            policestation: incidentData.policestation,
            reasonofdelay: incidentData.reasonofdelay,
            location: incidentData.location,
            evidence: incidentData.evidence,
            nameofsus: incidentData.nameofsus,
            additionalinfo: incidentData.additionalinfo,
            firstname: incidentData.firstname,
            lastname: incidentData.lastname,
            status: incidentData.status,
          };
        });

        setIncident(transformUser);
        console.log("this is incident", incident);
      })
      .catch((error) => {
        console.error("Error filtering complaints:", error);
      });
  }

  function deleteComplaint(id) {
    const confirmation = window.confirm(
      "Are you sure you want to delete this complaint?"
    );
    if (confirmation) {
      fetch(`http://localhost:5000/incident/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete complaint");
          } else {
            console.log("deleted successfuly");
          }

          fetchIncident();
        })
        .catch((error) => {
          console.error("Error deleting complaint:", error);
        });
    }
  }

  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Complaint List</h1>
            {/* <Link
              to="/addComplaint"
              class="btn btn-outline-success"
              style={{ marginLeft: "1050px", marginTop: "-100px" }}
            >
              + Add New
            </Link> */}
            <div class="row mt-3 mb-4" style={{ width: "100%" }}>
              <div class="col-md-7">
                <input
                  type="text"
                  placeholder="Search by complainant's name"
                  class="form-control "
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                ></input>
              </div>
              <div class="col-md-5">
                <button
                  class="btn text-white btn-md px-5 py-2"
                  style={{ backgroundColor: "#062d4b" }}
                  onClick={() => searchComplaint(searchText)}
                >
                  Search
                </button>
                <button
                  class="btn btn-secondary text-white btn-md ml-3 px-5 py-2"
                  onClick={() => {
                    setSearchText("");
                    setPolice("");
                    setCrime("");
                    setStatus("");

                    fetchIncident();

                    document.getElementById(
                      "selectPoliceStation"
                    ).selectedIndex = 0;
                    document.getElementById("crimeSelect").selectedIndex = 0;
                    document.getElementById("statusSelect").selectedIndex = 0;
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div class="row mt-3 mb-5">
              <div class="col-md-3">
                <select
                  class="form-control"
                  id="selectPoliceStation"
                  onChange={(e) => {
                    // filterComplaint(e.target.value);
                    setPolice(e.target.value);
                  }}
                >
                  <option value="">Select Police Station</option>
                  <option value="Bhatar">Bhatar</option>
                  <option value="Athva">Athva</option>
                </select>
              </div>
              <div class="col-md-3">
                <select
                  class="form-control"
                  id="crimeSelect"
                  onChange={(e) => {
                    // filterCrimeType(e.target.value);
                    setCrime(e.target.value);
                  }}
                >
                  <option value="">Select Crime Type</option>
                  <option value="Cyber Crime">Cyber Crime</option>
                  <option value="Domestic Violence">Domestic Violence</option>
                  <option value="Abuse">Abuse</option>
                  <option value="Theft">Theft</option>
                  <option value="Robbery">Robbery</option>
                </select>
              </div>
              <div class="col-md-3">
                <select
                  class="form-control"
                  id="statusSelect"
                  onChange={(e) => {
                    // filterStatus(e.target.value);
                    setStatus(e.target.value);
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Closed">Closed</option>
                  <option value="Denied">Denied</option>
                </select>
              </div>
              <div class="col-md-3">
                <button
                  style={{
                    backgroundColor: "#062d4b",
                    marginTop: "-5px",
                    padding: "37px",
                  }}
                  class="btn text-white btn-md  py-2"
                  onClick={() => filterAll(police, crime, status)}
                >
                  Filter
                </button>
              </div>
            </div>

            <hr />
            <div class="container table-responsive">
              <table class="table table-bordered table-hover   py-1 my-1">
                <thead class="table-dark text-light">
                  <tr>
                    <th scope="col">Sr No</th>

                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>

                    <th scope="col">Crime Category</th>
                    <th scope="col">Complaint Date</th>
                    <th scope="col">Police Station</th>
                    <th scope="col">Status</th>

                    <th scope="col" colSpan={3}>
                      Options
                    </th>
                  </tr>
                </thead>
                {incident.map((e, index) => (
                  <>
                    <tr>
                      <td>{index + 1}</td>

                      <td>{e.firstname}</td>
                      <td>{e.lastname}</td>

                      <td>{e.category}</td>
                      <td>
                        {new Date(e.dateofcmp)
                          .toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })
                          .replace(/\//g, "-")}
                      </td>
                      <td>{e.policestation}</td>
                      {e.status === "Approved" ? (
                        <td class="text-success">Approved</td>
                      ) : e.status === "Closed" ? (
                        <td class="text-danger"> Closed</td>
                      ) : e.status === "Denied" ? (
                        <td class="text-danger"> Denied</td>
                      ) : (
                        <td class="text-secondary">Pending</td>
                      )}

                      <td>
                        <Link
                          to={`/viewcomplaint?id=${e.id}&userId=${e.userId}`}
                          class="btn btn-outline-secondary"
                          id="viewcomplaint"
                        >
                          View
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/updateComplaint?id=${e.id}`}
                          class="btn btn-outline-success"
                          id="updateComplaint"
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          class="btn btn-danger"
                          id="deleteComplaint"
                          onClick={() => deleteComplaint(e.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComplaintList;
