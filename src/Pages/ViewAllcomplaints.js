import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const ViewAllComplaints = () => {
  const user = useSelector((state) => state.user);
  const [incident, setIncident] = useState([]);
  useEffect(() => {
    fetchIncident();
  }, []);
  function fetchIncident() {
    fetch(`http://localhost:5000/incident/mycomplaints?userId=${user._id}`)
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
            status: incidentData.status,
          };
        });

        setIncident(transformUser);
        console.log("this is incident", incident);
      });
  }
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12 py-2">
          <div class=" p-3 text-center mb-2 fs-1">
            <h1 class="text-danger">My complaints</h1> <hr />
          </div>
          <div class="container table-responsive">
            <table class="table table-bordered table-hover  py-1 my-1">
              <thead class="table-white  text-dark">
                <tr>
                  {/* <th scope="col">Com_ID</th> */}
                  <th scope="col">_id</th>
                  <th scope="col">Complaint Date</th>
                  <th scope="col">Crime Category</th>
                  <th scope="col">State</th>
                  <th scope="col">City</th>
                  <th scope="col">Date of Incident</th>
                  {/* <th scope="col">Time of Incident</th> */}

                  <th scope="col">Place of incident occurance</th>

                  {/*<th scope="col">Additional Details</th>*/}
                  <th scope="col">Status</th>

                  <th scope="col">View</th>
                </tr>
                {incident.map((e) => (
                  <>
                    <tr>
                      <td>{e.id}</td>
                      <td>
                        {new Date(e.dateofcmp)
                          .toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                          .replace(/\//g, "-")}
                      </td>
                      <td>{e.category}</td>
                      <td>{e.state}</td>
                      <td>{e.city}</td>
                      <td>
                        {" "}
                        {new Date(e.dateofincident)
                          .toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                          .replace(/\//g, "-")}
                      </td>
                      <td>{e.location}</td>
                      {/*<td>{e.additionalinfo}</td>*/}
                      {/* <td>{e.status}</td> */}
                      {/* <td>
                        {e.status === "Approved" && (
                          <p style={{ color: "green" }}>Approved</p>
                        )}
                        {e.status === "Closed" && (
                          <p style={{ color: "red" }}>Closed</p>
                        )}
                        {e.status === "Denied" && (
                          <p className="text-danger">Denied</p>
                        )}
                        {e.status !== "Approved" &&
                          e.status !== "Closed" &&
                          e.status !== "Denied" && (
                            <p className="text-muted">Pending</p>
                          )}
                      </td> */}

                      {e.status === "Approved" ? (
                        <td class="text-success">Approved</td>
                      ) : e.status === "Closed" ? (
                        <td class="text-danger"> Closed</td>
                      ) : e.status === "Denied" ? (
                        <td class="text-danger"> Denied</td>
                      ) : (
                        <td class="text-muted">Pending</td>
                      )}

                      <td>
                        <Link
                          //to={`/SinlgeComplaintUSer?id=${e.id}&userId=${e.userId}`}
                          class="btn btn-md btn-outline-secondary"
                          to="/SingleComplaintUser"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewAllComplaints;
