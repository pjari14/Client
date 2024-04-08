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

  function filterComplaint(name) {
    fetch(`http://localhost:5000/incident/search?policestation=${name}`)
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
  function filterStatus(name) {
    fetch(`http://localhost:5000/incident/search?status=${name}`)
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
  function filterStatus(name) {
    fetch(`http://localhost:5000/incident/search?status=${name}`)
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
  function filterCrimeType(name) {
    fetch(`http://localhost:5000/incident/search?category=${name}`)
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
  const [police, setPolice] = useState([]);
  const [crime, setCrime] = useState([]);
  const [status, setStatus] = useState([]);

  function filterAll(policestation, crime, status) {
    fetch(
      `http://localhost:5000/incident/search?policestation=${policestation}&category=${crime}&status=${status}`
    )
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

  // const [user, setUser] = useState({
  //   firstname: "",
  //   lastname: "",
  //   address: "",
  //   contactno: "",
  //   email: "",
  // });
  // function fetchUser() {
  //   fetch(`http://localhost:5000/user/${}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const userData = data.data.data;
  //       setUser({
  //         firstname: userData.firstname,
  //         lastname: userData.lastname,
  //         address: userData.address,
  //         contact: userData.contact,
  //         email: userData.email,
  //         city: userData.city,
  //       });
  //       console.log("this is user", data.data.data);
  //     });
  // }
  function deleteComplaint(id) {
    fetch(`http://localhost:5000/incident/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete complaint");
        } else {
          console.log("deleted successfuly");
        }
        // Refresh incident list after successful deletion
        fetchIncident();
      })
      .catch((error) => {
        console.error("Error deleting complaint:", error);
      });
  }

  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Complaint List</h1>
            <Link
              to="/addComplaint"
              class="btn btn-outline-success"
              style={{ marginLeft: "1050px", marginTop: "-100px" }}
            >
              + Add New
            </Link>
            <div class="row mt-3 mb-4">
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="search by name"
                  class="form-control"
                  style={{ height: "50px" }}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                ></input>
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-success"
                  style={{ height: "50px", color: "white" }}
                  onClick={() => searchComplaint(searchText)}
                >
                  Search
                </button>
                <button
                  class="btn btn-secondary ml-3"
                  style={{ height: "50px", color: "white" }}
                  onClick={() => {
                    fetchIncident();
                    setSearchText("");
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
                    filterComplaint(e.target.value);
                    setPolice(e.target.value);
                  }}
                >
                  <option value="nothing">Select Police Station</option>
                  <option value="Bhatar">Bhatar</option>
                  <option value="Athva">Athva</option>
                </select>
              </div>
              <div class="col-md-3">
                <select
                  class="form-control"
                  id="crimeSelect"
                  onChange={(e) => {
                    filterCrimeType(e.target.value);
                    setCrime(e.target.value);
                  }}
                >
                  <option value="nothing">Select Crime Type</option>
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
                    filterStatus(e.target.value);
                    setStatus(e.target.value);
                  }}
                >
                  <option value="nothing">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Closed">Closed</option>
                  <option value="Denied">Denied</option>
                </select>
              </div>
              <div class="col-md-3">
                <button
                  style={{ color: "white" }}
                  class="btn btn-success"
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
                    {/* <th scope="col">Com_ID</th> */}
                    {/* <th scope="col">_id</th> */}
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>

                    {/* <th scope="col">UserId</th> */}
                    <th scope="col">Complaint Category</th>
                    <th scope="col">Complaint Date</th>
                    <th scope="col">Police Station</th>
                    <th scope="col">Status</th>
                    {/* <th scope="col">State</th> */}
                    {/* <th scope="col">City</th> */}
                    {/* <th scope="col">Date of Incident</th> */}
                    {/* <th scope="col">Time of Incident</th> */}

                    {/* <th scope="col">Reason for delay</th> */}
                    {/* <th scope="col">Place of incident occurance</th> */}

                    {/* <th scope="col">Suspect person or company name</th> */}
                    {/* <th scope="col">Additional Details</th> */}
                    {/* <th scope="col">Evidence</th> */}
                    <th scope="col">View</th>

                    <th scope="col" colSpan={2}>
                      Options
                    </th>
                  </tr>
                </thead>
                {incident.map((e, index) => (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      {/* <td>{e.id}</td> */}
                      <td>{e.firstname}</td>
                      <td>{e.lastname}</td>
                      {/* <td>{e.userId}</td> */}
                      <td>{e.category}</td>
                      <td>{e.dateofcmp}</td>
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
                      {/* <td>{e.state}</td> */}
                      {/* <td>{e.city}</td> */}
                      {/* <td>{e.dateofincident}</td> */}

                      {/* <td>{e.reasonofdelay}</td> */}
                      {/* <td>{e.location}</td> */}

                      {/* <td>{e.nameofsus}</td> */}
                      {/* <td>{e.additionalinfo}</td> */}
                      {/* <td>
                        <img
                          src={`http://localhost:5000/evidence/` + e.evidence}
                          style={{ width: "80px", height: "fit" }}
                          alt="evidence"
                        />
                      </td> */}
                      {/* <td>JFNCSAM</td>
                <td>JFNCSAM</td> */}
                      <td>
                        <Link
                          to={`/viewcomplaint?id=${e.id}&userId=${e.userId}`}
                          class="btn btn-outline-warning"
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
