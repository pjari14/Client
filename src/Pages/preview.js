import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PDFPreview from "../Components/PDFPreview";
const Preview = () => {
  const user = useSelector((state) => state.user);
  const incident = useSelector((state) => state.incident);

  const [suspect, setSuspect] = useState([]);
  useEffect(() => {
    fetchSuspect();
  }, []);
  function fetchSuspect() {
    fetch(`http://localhost:5000/suspect/singlesus?incidentId=${incident._id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.data);
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
        console.log("this is incident", suspect);
      });
  }
  const handlePrintPreview = (event) => {
    event.preventDefault(); // Prevent page reload
    window.print(); // Open print dialog
  };
  return (
    <>
      <style>
        {`
          @media print {
            .no-print {
              display: none;
            }
          }
        `}
      </style>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class=" p-3 text-center mb-2 text-danger fs-1 ">
            Preview Details
          </div>
          <hr />
        </div>
        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="complaintdetails">
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Personal details</h2>
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
            <h2 class="text text-danger fw-3">Incident details</h2>
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
                  <td></td>
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
              </table>
            </div>
          </div>
          <hr />
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Suspect details</h2>
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
              </table>
            </div>
          </div>
          <hr />
          <div class="col-md-6 text-end">
            <Link
              class="btn btn-lg px-5 btn-secondary text-white no-print"
              to="/suspect"
            >
              Back
            </Link>
          </div>
          <div class="col-md-6 text-start no-print">
            <Link
              class="btn btn-lg px-5  text-white"
              to="/ViewAllComplaints"
              style={{ backgroundColor: "#062d4b" }}
            >
              Okay
            </Link>

            <button class="btn btn-muted" onClick={handlePrintPreview}>
              Print Preview
            </button>

            {/* <PDFPreview user={user} incident={incident} suspect={suspect} /> */}
          </div>
        </form>
      </div>
    </>
  );
};
export default Preview;
