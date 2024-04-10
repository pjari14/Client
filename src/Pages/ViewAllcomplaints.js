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
            <table class="table table-bordered table-hover  py-2 my-2">
              <thead class="table-white  text-dark">
                <tr style={{ fontSize: "17px" }}>
                  <th scope="col">Sr No.</th>
                  <th scope="col">Complaint Date</th>
                  <th scope="col">Crime Category</th>
                  <th scope="col">Status</th>

                  <th scope="col">View</th>
                </tr>
                {incident.map((e, index) => (
                  <>
                    <tr>
                      <td>{index + 1}</td>
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
                          class="btn btn-md btn-outline-secondary"
                          to={`/SingleComplaintUser?id=${e.id}&userId=${e.userId}`}
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
