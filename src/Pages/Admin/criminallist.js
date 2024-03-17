import React from "react";
import { Link } from "react-router-dom";
const CriminalList = () => {
  return (
    <>
      <div class="container mt-1 pt-1">
        <div class="col-sm-12">
          <div class=" p-1 text-center mb-1 fs-1" style={{ color: "#A7333F" }}>
            Criminals List
            <div class="container" style={{ marginLeft: "500px" }}>
              <Link to="/addCriminal">
                <button
                  type="button"
                  id="addCriminal"
                  style={{
                    width: "12%",
                    marginLeft: "10px",
                    backgroundColor: "#BA68C8",
                    borderStyle: "groove",
                    borderRadius: "5px 5px 5px 5px",
                    color: "white",
                    padding: "5px 10px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "18px",
                    margin: "4px 2px",
                    cursor: "pointer",
                  }}
                >
                  + Add New
                </button>
              </Link>
            </div>{" "}
          </div>
          <hr />
        </div>
        <div class="container">
          <table
            className="table table-bordered table-hover py-1 my-1"
            style={{ border: "2px solid black", borderCollapse: "collapse" }}
          >
            <thead style={{ backgroundColor: "#B5B2C2" }}>
              <tr>
                <th>Criminal Name</th>
                <th>Criminal Identity</th>
                <th>Criminal Photograph</th>
                <th>Additional Details</th>
                <th>Options</th>
              </tr>
            </thead>
            <tr>
              <td>AHBH</td>
              <td>wjdna</td>
              <td>JWND</td>
              <td>JFNCSAM</td>
              <td>
                <Link to="/updateCriminal">
                  <button
                    type="button"
                    id="updateCriminal"
                    style={{
                      backgroundColor: "#F5B700",
                      borderStyle: "groove",
                      borderRadius: "5px 5px 5px 5px",
                    }}
                  >
                    Update
                  </button>
                </Link>
                &nbsp;
                <button
                  type="button"
                  id="deleteCriminal"
                  style={{
                    backgroundColor: "#E54B4B",
                    borderStyle: "groove",
                    borderRadius: "5px 5px 5px 5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>AHBH</td>
              <td>wjdna</td>
              <td>JWND</td>
              <td>JFNCSAM</td>
              <td>
                <Link to="/updateCriminal">
                  <button
                    type="button"
                    id="updateCriminal"
                    style={{
                      backgroundColor: "#F5B700",
                      borderStyle: "groove",
                      borderRadius: "5px 5px 5px 5px",
                    }}
                  >
                    Update
                  </button>
                </Link>
                &nbsp;
                <button
                  type="button"
                  id="deleteCriminal"
                  style={{
                    backgroundColor: "#E54B4B",
                    borderStyle: "groove",
                    borderRadius: "5px 5px 5px 5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default CriminalList;
