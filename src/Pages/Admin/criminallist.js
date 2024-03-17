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
                  borderStyle: "solid",
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
        <table
          class="row g-3 shadow py-4 px-4 mx-2 my-1 table table-striped"
          style={{ width: "98%", height: "100%", textAlign: "center" }}
        >
          <tr>
            <th rowspan="2" style={{ border: "1px solid black",backgroundColor:"gray",color:"white" }}>Index</th>
            <th style={{ border: "1px solid black",backgroundColor:"gray",color:"white" }}>
              Criminal Name
            </th>
            <th style={{ border: "1px solid black",backgroundColor:"gray",color:"white" }}>
              Criminal Identity
            </th>
            <th style={{ border: "1px solid black",backgroundColor:"gray",color:"white" }}>
              Criminal Photograph
            </th>
            <th style={{ border: "1px solid black",backgroundColor:"gray",color:"white" }}>
              Evidence against criminal
            </th>
            <th style={{ border: "1px solid black",backgroundColor:"gray",color:"white" }}>Options</th>
          </tr>
          <tr>
            <td>ehwfewj</td>
            <td>ehwfewj</td>
            <td>ehwfewj</td>
            <td>ehwfewj</td>
            <td>ehwfewj</td>
            <td>ehwfewj</td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default CriminalList;
