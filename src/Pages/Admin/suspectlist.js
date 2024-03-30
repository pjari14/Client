import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SuspectList = () => {
  const [suspect, setSuspect] = useState([]);
  useEffect(() => {
    fetchSuspect();
  }, []);
  function fetchSuspect() {
    fetch("http://localhost:5000/suspect/showdata")
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

  function deleteSuspect(id) {
    fetch(`http://localhost:5000/suspect/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete complaint");
        } else {
          console.log("deleted successfuly");
        }
        // Refresh incident list after successful deletion
        fetchSuspect();
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
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Suspect List</h1>
            <Link
              to="/addSuspect"
              class="btn btn-outline-success"
              style={{ marginLeft: "1050px", marginTop: "-100px" }}
            >
              + Add New
            </Link>
            <hr />
            <div class="container table-responsive">
              <table class="table table-bordered table-hover my-1">
                <thead class="table-dark text-light">
                  <tr>
                    <th scope="col">Suspect Id</th>
                    <th scope="col">Incident ID</th>
                    <th scope="col">Suspect Name</th>
                    <th scope="col">Suspect Identity</th>
                    <th scope="col">Suspect Username/Number</th>
                    <th scope="col">Suspect Photograph</th>
                    <th scope="col">Additional Details</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                {suspect.map((e) => (
                  <>
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.incidentId}</td>
                      <td>{e.susname}</td>
                      <td>{e.sussocial}</td>
                      <td>{e.sususername}</td>
                      <td>
                        <img
                          src={`http://localhost:5000/suspect/` + e.susphoto}
                          style={{ width: "80px", height: "fit" }}
                          alt="suspectphoto"
                        />
                      </td>
                      <td>{e.otherdetails}</td>
                      <td>
                        <Link
                          to={`/updateSuspect?id=${e.id}`}
                          class="btn btn-outline-success"
                          id="updateSuspect"
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          class="btn btn-danger"
                          id="deleteSuspect"
                          onClick={() => deleteSuspect(e.id)}
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

export default SuspectList;
