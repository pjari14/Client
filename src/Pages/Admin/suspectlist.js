import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SuspectList = () => {
  const [suspect, setSuspect] = useState([]);
  console.log(fetch("http://localhost:5000/suspect"));
  // useEffect(() => {
  //   const fetchSuspect = async () => {
  //     const response = await fetch("http://localhost:5000/suspect");
  //     console.log(response);
  //     // fetch("http://localhost:5000/suspect")
  //     //   .then(async (data) => {
  //     //     console.log(data);
  //     //   })
  //     //   .then((response) => {
  //     //     return response.json();
  //     //   })
  //     //   .then((data) => {
  //     //     console.log(data.data.data);
  //     //     const transformUser = data.data.data.map((suspectData) => {
  //     //       return {
  //     //         // id: suspectData._id,
  //     //         susname: suspectData.susname,
  //     //         sussocial: suspectData.sussocial,
  //     //         sususername: suspectData.sususername,
  //     //         otherdetails: suspectData.otherdetails,
  //     //       };
  //     //     });

  //     //     setSuspect(transformUser);
  //     //     console.log("this is suspect", suspect);
  //     //   });
  //   };
  //   fetchSuspect();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // function fetchSuspect() {
  //   fetch("http://localhost:5000/suspect")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {});
  // fetch("http://localhost:5000/suspect")
  // // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data.data.data);
  //   const transformUser = data.data.data.map((suspectData) => {
  //     return {
  //       susname: suspectData.susname,
  //       sussocial: suspectData.sussocial,
  //       sususername: suspectData.sususername,
  //       otherdetails: suspectData.otherdetails,
  //       // susphoto: suspectData.susphoto,
  //     };
  //   });
  //   setSuspect(transformUser);
  // });
  // }

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

                <>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuspectList;
