import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams, useLocation } from "react-router-dom";
const SingleComplaintUSer = () => {
  const [params] = useSearchParams();
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

  useEffect(() => {
    fetchIncident();
    fetchSuspect();
    fetchUser();
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
          policestaion: incidentData.policestation,
          reasonofdelay: incidentData.reasonofdelay,
          location: incidentData.location,
          evidence: incidentData.evidence,
          nameofsus: incidentData.nameofsus,
          additionalinfo: incidentData.additionalinfo,
          status: incidentData.status,
        });
        console.log(data.data.data);
      });
  }
  const [suspect, setSuspect] = useState([]);

  function fetchSuspect() {
    fetch(
      `http://localhost:5000/suspect/singlesus?incidentId=${params.get("id")}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformUser = data.data.data.map((suspectData) => {
          return {
            id: suspectData._id,
            incidentId: suspectData.incidentId,
            susname: suspectData.susname,
            sussocial: suspectData.sussocial,
            sususername: suspectData.sususername,
            susphoto: suspectData.susphoto,
            otherdetails: suspectData.otherdetails,
          };
        });

        setSuspect(transformUser);
        // console.log("this is incident", suspect);
      });
  }
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    contactno: "",
    email: "",
  });
  function fetchUser() {
    fetch(`http://localhost:5000/user/${params.get("userId")}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const userData = data.data.data;
        setUser({
          firstname: userData.firstname,
          lastname: userData.lastname,
          address: userData.address,
          contact: userData.contact,
          email: userData.email,
          city: userData.city,
        });
        console.log("this is user", data.data.data);
      });
  }
  const updateStatus = (status) => {
    fetch(`http://localhost:5000/incident/${params.get("id")}`, {
      method: "PATCH", // Use PATCH method for partial updates
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update complaint");
        }
        // Update local state with the new status
        setIncident((prevIncident) => ({
          ...prevIncident,
          status: status,
        }));
        console.log("Complaint updated successfully");
      })
      .catch((error) => {
        console.error("Error updating complaint:", error);
      });
  };
  return (
    <>
      <div class="container-fluid d-flex">
        <div class=" ms-sm-auto  px-md-5" id="content">
          <div className="overflow-auto  col-md-12">
            <h1
              class=" my-5  mb-1 fs-1 text-dark col-md-6 text-end"
              style={{ marginLeft: "-40px" }}
            >
              Complaint ID:
            </h1>

            <h3
              class="text-danger  text-end col-md-6"
              style={{ marginTop: "-42px", marginLeft: "380px" }}
            >
              {incident.id}
            </h3>
            <hr />
          </div>
          <form class="row shadow py-5 px-5 mx-5 my-5 " id="complaintdetails">
            <div class="col-sm-12">
              <h2 class="text text-secondary fw-3">Personal details</h2>
              <div>
                <br></br>
                <table class="table">
                  <tr>
                    <th class="col-6">First Name:</th>

                    <td class="col-6">{user.firstname}</td>
                  </tr>
                  <tr>
                    <th>Last Name:</th>
                    <td>{user.lastname}</td>
                  </tr>
                  <tr>
                    <th>Address:</th>
                    <td>{user.address}</td>
                  </tr>
                  <tr>
                    <th>Contact No:</th>
                    <td>{user.contact}</td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td>{user.email}</td>
                  </tr>
                </table>
              </div>
            </div>
            <hr />
            <div class="col-sm-12">
              <h2 class="text text-secondary fw-3">Incident details</h2>
              <div>
                <br></br>
                <table class="table">
                  <tr>
                    <th class="col-6">Complaint Id</th>
                    <td class="col-6">{incident.id}</td>
                  </tr>
                  <tr>
                    <th>Category:</th>
                    <td>{incident.category}</td>
                  </tr>
                  <tr>
                    <th>Date of Comp:</th>

                    <td>
                      {new Date(incident.dateofcmp)
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
                  </tr>
                  <tr>
                    <th>State:</th>
                    <td>{incident.state}</td>
                  </tr>
                  <tr>
                    <th>City:</th>
                    <td>{incident.city}</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th>Police Station:</th>
                    <td>{incident.policestaion}</td>
                  </tr>
                  <tr>
                    <th>Date of Incident:</th>
                    <td>
                      {new Date(incident.dateofincident)
                        .toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                        .replace(/\//g, "-")}
                    </td>
                  </tr>

                  <tr>
                    <th>Reason of Delay:</th>
                    <td>{incident.reasonofdelay}</td>
                  </tr>
                  <tr>
                    <th>Location:</th>
                    <td>{incident.location}</td>
                  </tr>
                  <tr>
                    <th>Evidence:</th>

                    <td>
                      <img
                        src={
                          `http://localhost:5000/evidence/` + incident.evidence
                        }
                        style={{ width: "250px", height: "auto" }}
                        alt="evidence"
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <th class="col-6">Name of Suspect:</th>
                    <td class="col-6">{incident.nameofsus}</td>
                  </tr>
                  <tr>
                    <th>Additional Information:</th>
                    <td>{incident.additionalinfo}</td>
                  </tr>
                  <tr>
                    <th>Status:</th>
                    <td class="table-danger">{incident.status}</td>
                  </tr>
                </table>
              </div>
            </div>
            <hr />
            <div class="col-sm-12">
              <h2 class="text text-secondary fw-3">Suspect details</h2>
              <div class="col-sm-12">
                <br></br>
                {suspect.map((e, index) => (
                  <>
                    <table class="table ">
                      <div key={index}>
                        <h5 class="text-danger p-2">
                          Suspect No:
                          {index + 1}
                        </h5>
                      </div>
                      {e.susphoto && (
                        <>
                          <tr>
                            <th class="col-6">Suspect Photo:</th>
                            <td class="col-6">
                              <img
                                src={
                                  `http://localhost:5000/suspect/` + e.susphoto
                                }
                                style={{ width: "200px", height: "auto" }}
                                alt="suspectphoto"
                              />
                            </td>
                          </tr>
                        </>
                      )}
                      {e.susname && (
                        <>
                          <tr>
                            <th>Suspect Name:</th>
                            <td>{e.susname}</td>
                          </tr>
                        </>
                      )}
                      {e.sussocial && (
                        <>
                          <tr>
                            <th>Suspect Social Identity:</th>
                            <td>{e.sussocial}</td>
                          </tr>
                        </>
                      )}
                      {e.sususername && (
                        <>
                          <tr>
                            <th>Suspect Username/email/other:</th>
                            <td>{e.sususername}</td>
                          </tr>
                        </>
                      )}
                      {e.otherdetails && (
                        <>
                          <tr>
                            <th>Other Details:</th>
                            <td>{e.otherdetails}</td>
                          </tr>
                        </>
                      )}

                      {index !== suspect.length - 1 && <hr />}
                      <br />
                      <br />
                    </table>
                  </>
                ))}
                <div class="row">
                  <div class="col-md-6"></div>
                  <div class="col-md-6 mb-5">
                    <Link
                      to="/ViewAllComplaints"
                      class="btn btn-outline-secondary  px-5 btn-lg"
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </form>
        </div>
      </div>
    </>
  );
};
export default SingleComplaintUSer;
