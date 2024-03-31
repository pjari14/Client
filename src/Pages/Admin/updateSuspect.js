import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";

const UpdateSuspect = () => {
  const [params] = useSearchParams();

  const [suspect, setSuspect] = useState({
    id: "",
    susname: "",
    sussocial: "",
    sususername: "",
    susphoto: "",
    otherdetails: "",
  });

  const [identity, setIdentity] = useState("");

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
          susphoto: suspectData.photo,
          otherdetails: suspectData.otherdetails,
        });
        console.log("this is suspect", suspect);
        // setDateofincident(incident.dateofincident); // Assuming `dateofincident` is the attribute for Date of Incident
        setIdentity(suspect.sussocial);
      });
  }

  const updateSuspect = () => {
    fetch(`http://localhost:5000/suspect/${params.get("id")}`, {
      method: "PATCH", // Use PATCH method for/ partial updates
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        susname: suspect.susname,
        sussocial: suspect.sussocial,
        susphoto: suspect.susphoto, // Assuming you don't update dateofcmp
        sususername: suspect.sususername,
        otherdetails: suspect.otherdetails,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update suspect");
        }
        console.log("Suspect updated successfully");
        // You might want to redirect the user to a different page upon successful update
      })
      .catch((error) => {
        console.error("Error updating suspect:", error);
      });
  };

  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Update Suspect</h1>
            <hr />

            <form
              class="row g-3 shadow py-4 px-4 mx-5 my-5 "
              id="suspectdetails"
            >
              <div class="col-md-6">
                <label class="form-label">Suspect Name :</label>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="suspectname"
                  class="form-control"
                  placeholder="Suspect Name"
                  value={suspect.susname}
                  onChange={(e) =>
                    setSuspect({ ...suspect, susname: e.target.value })
                  }
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Suspect Identity :</label>
              </div>
              <div class="col-md-6">
                <select
                  class="form-control"
                  value={suspect.sussocial}
                  onChange={(e) =>
                    setSuspect({ ...suspect, sussocial: e.target.value })
                  }
                  // onChange={(e) => setIdentity(e.target.value)}
                >
                  <option value="Select">Select Suspect Identity</option>
                  <option value="Instagram id">Instagram id</option>
                  <option value="Mobile number">Mobile Contact</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Email-id">Email-id</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="suspectinfo"
                  placeholder=""
                  class="form-control"
                  value={suspect.sususername}
                  onChange={(e) =>
                    setSuspect({ ...suspect, sususername: e.target.value })
                  }
                ></input>
              </div>

              <div class="col-md-6">
                <label class="form-label">Suspect Photograph :</label>
              </div>
              <div class="col-md-6">
                <input type="file" class="form-control" id="suspectphoto" />

                <h6>
                  Please provide any photograph of suspect(Upload JPG/PNG file
                  of max 5MB)
                </h6>
              </div>
              <div class="col-md-6">
                <label class="form-label">Any other details:</label>
              </div>

              <div class="col-md-6">
                <textarea
                  className="form-control"
                  rows="3"
                  value={suspect.otherdetails}
                  onChange={(e) =>
                    setSuspect({ ...suspect, otherdetails: e.target.value })
                  }
                />
              </div>
              <div class="row py-4 justify-content-end">
                <div class="col-3 ">
                  <Link to="/suspectlist">
                    <button
                      type="button"
                      class="btn btn-lg w-100 btn-outline-success"
                      onClick={updateSuspect}
                    >
                      Update
                    </button>
                  </Link>
                </div>
              </div>
              <div class="col-4 text-end"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateSuspect;
