import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams, useLocation } from "react-router-dom";
const ViewSuspect = () => {
  const [params] = useSearchParams();
  const [suspect, setSuspect] = useState([]);
  useEffect(() => {
    fetchSuspect();
  }, []);
  function fetchSuspect() {
    fetch(`http://localhost:5000/suspect/${params.get("id")}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const suspectData = data.data.data;
        setSuspect({
          id: suspectData._id,
          incidentId: suspectData.incidentId,
          susname: suspectData.susname,
          sussocial: suspectData.sussocial,
          sususername: suspectData.sususername,
          susphoto: suspectData.susphoto,
          otherdetails: suspectData.otherdetails,
        });
        console.log(data.data.data);
      });
  }
  return (
    <>
      <div class="container-fluid d-flex mt-5">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark  ">Suspect ID:</h1>
            <h3
              class="text-danger"
              style={{ marginLeft: "300px", marginTop: "-43px" }}
            >
              {suspect.id}
            </h3>
            <hr />{" "}
            <div class="col-sm-12">
              <h2 class="text text-secondary fw-3 mt-5 mb-3">
                Suspect details
              </h2>
              <div class="col-sm-12">
                <br></br>
                <table class="table">
                  <tr>
                    <th>Susphoto</th>
                    <td>
                      <img
                        src={
                          `http://localhost:5000/suspect/` + suspect.susphoto
                        }
                        style={{ width: "250px", height: "fit" }}
                        alt="suspectphoto"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>IncidentId</th>
                    <td>{suspect.incidentId}</td>
                  </tr>
                  <tr>
                    <th>Name of Suspect</th>
                    <td>{suspect.susname}</td>
                  </tr>
                  <tr>
                    <th>Suspect Identity Type</th>
                    <td>{suspect.sussocial}</td>
                  </tr>
                  <tr>
                    <th>Suspect Identity</th>
                    <td>{suspect.sususername}</td>
                  </tr>
                  <tr>
                    <th>Other Details</th>
                    <td>{suspect.otherdetails}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <div class="row">
                        <div class="col-md-8"></div>
                        <div class="col-md-4">
                          <Link
                            class="btn btn-secondary text-white"
                            to="/suspectlist"
                          >
                            Back
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewSuspect;
