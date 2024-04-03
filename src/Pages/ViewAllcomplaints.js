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
              <thead class="table-light text-dark">
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

                  <th scope="col">Additional Details</th>
                  <th scope="col">View</th>
                </tr>
                {incident.map((e) => (
                  <>
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.dateofcmp}</td>
                      <td>{e.category}</td>
                      <td>{e.state}</td>
                      <td>{e.city}</td>
                      <td>{e.dateofincident}</td>
                      <td>{e.location}</td>
                      <td>{e.additionalinfo}</td>
                      <td>
                        <button class="btn btn-md btn-secondary text-white">
                          View
                        </button>
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
