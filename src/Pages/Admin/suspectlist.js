import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SuspectList = () => {
  const [suspect, setSuspect] = useState([]);
  useEffect(() => {
    fetchSuspect();
  });
  function fetchSuspect() {
    fetch("http://localhost:5000/suspect")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.data);
        const transformSuspect = data.data.data.map((suspectData) => {
          return {
            susname: suspectData.susname,
            sussocial: suspectData.sussocial,
            sususername: suspectData.sususername,
            otherdetails: suspectData.otherdetails,
          };
        });

        setSuspect(transformSuspect);
      });
  }

  return (
    <>
      <div
        id="content "
        className="d-flex flex-column container scrollable-content"
        style={{ marginTop: "-694px", marginLeft: "225px", height: "100vh" }}
      >
        <div id="content">
          <div class=" p-4  mb-1 fs-1 text-dark">Suspect List</div>
          <Link
            to="/addSuspect"
            class="btn btn-outline-success"
            style={{ marginLeft: "1100px", marginTop: "-150px" }}
          >
            + Add New
          </Link>
          <hr />
          <div class="container table-responsive">
            <table class="table table-bordered table-hover  table-responsive py-1 my-1">
              <thead class="table-dark text-light">
                <tr>
                  <th scope="col">Suspect ID</th>
                  <th scope="col">Suspect Name</th>
                  <th scope="col">Suspect Identity</th>
                  <th scope="col">Suspect Photograph</th>
                  <th scope="col">Additional Details</th>
                  <th scope="col" colSpan={2}>
                    Options
                  </th>
                </tr>
              </thead>
              {suspect.map((e) => (
                <>
                  <tr>
                    <td>{e.susname}</td>
                    <td>{e.sussocial}</td>
                    <td>{e.sususername}</td>
                    <td>JWND</td>
                    <td>{e.otherdetails}</td>
                    <td>
                      <Link
                        to="/updateSuspect"
                        class="btn btn-outline-success"
                        id="updateSuspect"
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button class="btn btn-danger" id="deleteSuspect">
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
    </>
  );
};
export default SuspectList;
