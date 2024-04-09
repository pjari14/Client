import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams, useLocation } from "react-router-dom";
const ViewSuspect = () => {
  const [params] = useSearchParams();
  //   useEffect(() => {
  //     fetchSuspect();
  //   }, []);

  const [suspect, setSuspect] = useState([]);

  //   function fetchSuspect() {
  //     fetch(
  //       `http://localhost:5000/suspect/singlesus?incidentId=${params.get("id")}`
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const transformUser = data.data.data.map((suspectData) => {
  //           return {
  //             id: suspectData._id,
  //             incidentId: suspectData.incidentId,
  //             susname: suspectData.susname,
  //             sussocial: suspectData.sussocial,
  //             sususername: suspectData.sususername,
  //             susphoto: suspectData.susphoto,
  //             otherdetails: suspectData.otherdetails,
  //           };
  //         });

  //         setSuspect(transformUser);
  //         // console.log("this is incident", suspect);
  //       });
  //   }

  return (
    <>
      <div class="container-fluid d-flex">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
          <div className="overflow-auto">
            <h1 class=" my-5  mb-1 fs-1 text-dark ">Suspect ID:</h1>
            {/* <h3
              class="text-danger"
              style={{ marginLeft: "300px", marginTop: "-43px" }}
            >
            suspectid 
            </h3>*/}
            <hr />{" "}
            <form
              class="row g-3 shadow py-4 px-4 mx-5 my-5 "
              id="complaintdetails"
            >
              <div class="col-sm-12">
                <h2 class="text text-secondary fw-3">Suspect details</h2>
                <div class="col-sm-12">
                  <br></br>
                  <table class="table">
                    <tr>
                      {/* <th class="col-6">First Name:</th> */}

                      {/* <td class="col-6">{user.firstname}</td> */}
                    </tr>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewSuspect;
