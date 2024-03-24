import React from "react";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <>
      <div class="container-fluid row ">
        <div class="container-fluid col-lg-3 col-sm-3">
          <div class="card mx-auto my-2 h-100 " style={{ width: "18rem" }}>
            <div class="card-body ">
              <h5 class="card-title">Cyber Safety Tips</h5>

              <p class="card-text">
                To stay safe in today's online world, follow these important
                cyber safety rules. They’ll help protect you and your family
                from threats that could harm your data and devices.
              </p>
            </div>
            <div class="card-footer">
              <Link
                to="/cybersafety"
                class="btn btn-lg w-100 btn-danger text-light"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div class="container-fluid col-lg-3 col-sm-3">
          <div class="card mx-auto my-2 h-100" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Cyber Awareness</h5>

              <p class="card-text">
                Cyber awareness is about understanding the risks and knowing how
                to protect yourself and others from cyber threats.
              </p>
            </div>
            <div class="card-footer ">
              <Link
                to="cybercrime"
                class="btn btn-lg w-100 btn-danger text-light"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div class="container-fluid col-lg-3 col-sm-3">
          <div class="card mx-auto my-2 h-100" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Citizen Manual</h5>

              <p class="card-text">
                Step by step guide for citizens to report crime and keep track
                on them online.
              </p>
            </div>
            <div class="card-footer">
              <Link
                to="citizenmanual"
                class="btn btn-lg w-100 btn-danger text-light "
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div class="container-fluid col-lg-3 col-sm-3">
          <div class="card mx-auto my-2 h-100" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Media/Gallery</h5>
              <h6 class="card-subtitle mb-2">
                {" "}
                Know more about current crimes,helpline noumbers for safety.
              </h6>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <Link
                to="/gallery"
                class="btn btn-lg w-100 btn-danger text-light"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
