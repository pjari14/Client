import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams, useLocation } from "react-router-dom";
const ViewComplaint = () => {
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
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Complaint ID:</h1>

            <h3
              class="text-danger"
              style={{ marginLeft: "300px", marginTop: "-42px" }}
            >
              12345
            </h3>
            <hr />
          </div>
          <form
            class="row g-3 shadow py-4 px-4 mx-5 my-5 "
            id="complaintdetails"
          >
            <div class="col-sm-12">
              <h2 class="text text-secondary fw-3">Personal details</h2>
              <div>
                <br></br>
                <table class="table">
                  <tr>
                    <th>First Name:</th>

                    <td>{user.firstname}</td>
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
                    <th>Complaint Id</th>
                    <td>{incident._id}</td>
                  </tr>
                  <tr>
                    <th>Category:</th>
                    <td>{incident.category}</td>
                  </tr>
                  <tr>
                    <th>Date of Comp:</th>

                    <td>{incident.dateofcmp}</td>
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
                    <td>{incident.dateofincident}</td>
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
                    <th>Name of Suspect:</th>
                    <td>{incident.nameofsus}</td>
                  </tr>
                  <tr>
                    <th>Additional Information:</th>
                    <td>{incident.additionalinfo}</td>
                  </tr>
                  <tr>
                    <th>Status:</th>
                    <td>{incident.status}</td>
                  </tr>
                </table>
              </div>
            </div>
            <hr />
            <div class="col-sm-12">
              <h2 class="text text-secondary fw-3">Suspect details</h2>
              <div>
                <br></br>
                <table class="table">
                  {suspect.map((e) => (
                    <>
                      <tr>
                        <th>Susname:</th>
                        <td>{e.susname}</td>
                      </tr>
                      <tr>
                        <th>sussocial:</th>
                        <td>{e.sussocial}</td>
                      </tr>
                      <tr>
                        <th>sususername:</th>
                        <td>{e.sususername}</td>
                      </tr>
                      <tr>
                        <th>susphoto:</th>
                        <td>
                          <img
                            src={`http://localhost:5000/suspect/` + e.susphoto}
                            style={{ width: "250px", height: "auto" }}
                            alt="suspectphoto"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>otherdetails:</th>
                        <td>{e.otherdetails}</td>
                      </tr>
                    </>
                  ))}
                  <tr>
                    <td></td>

                    <td>
                      {incident.status === "Approved" ? (
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            updateStatus("Closed");
                          }}
                        >
                          Close Complaint
                        </button>
                      ) : incident.status === "Closed" ? (
                        <span class="text-danger"> Complaint is Closed</span>
                      ) : incident.status === "Denied" ? (
                        <span class="text-danger">Complaint is Denied</span>
                      ) : (
                        <>
                          <button
                            className="btn btn-success"
                            onClick={(e) => {
                              e.preventDefault();
                              updateStatus("Approved");
                            }}
                          >
                            Approve
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              updateStatus("Denied");
                            }}
                          >
                            Deny
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <hr />
          </form>
        </div>
      </div>
    </>
  );
};
export default ViewComplaint;
