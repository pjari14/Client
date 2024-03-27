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
            policestaion: incidentData.policestaion,
            reasonofdelay: incidentData.reasonofdelay,
            location: incidentData.location,
            evidence: incidentData.evidence,
            nameofsus: incidentData.nameofsus,
            additionalinfo: incidentData.additionalinfo,
          };
        });

        setIncident(transformUser);
        console.log("this is incident", incident);
      });
  }

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

            <hr />
            <div class="container table-responsive">
              <table class="table table-bordered table-hover  table-responsive py-1 my-1">
                <thead class="table-dark text-light">
                  <tr>
                    {/* <th scope="col">Com_ID</th> */}
                    <th scope="col">_id</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Complaint Category</th>
                    <th scope="col">Complaint Date</th>
                    <th scope="col">State</th>
                    <th scope="col">City</th>
                    <th scope="col">Date of Incident</th>
                    {/* <th scope="col">Time of Incident</th> */}

                    <th scope="col">Reason for delay</th>
                    <th scope="col">Place of incident occurance</th>
                    <th scope="col">Evidence</th>
                    <th scope="col">Suspect person or company name</th>
                    <th scope="col">Additional Details</th>
                    <th scope="col">Evidence</th>

                    <th scope="col" colSpan={2}>
                      Options
                    </th>
                  </tr>
                </thead>
                {incident.map((e) => (
                  <>
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.userId}</td>
                      <td>{e.category}</td>
                      <td>{e.dateofcmp}</td>
                      <td>{e.state}</td>
                      <td>{e.city}</td>
                      <td>{e.dateofincident}</td>

                      <td>{e.reasonofdelay}</td>
                      <td>{e.location}</td>
                      <td>JFNCSAM</td>
                      <td>{e.nameofsus}</td>
                      <td>{e.additionalinfo}</td>
                      <td>
                        <img
                          src={`http://localhost:5000/evidence/` + e.evidence}
                          style={{ width: "80px", height: "fit" }}
                          alt="evidence"
                        />
                      </td>
                      {/* <td>JFNCSAM</td>
                <td>JFNCSAM</td> */}
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
