import React from "react";
import Services from "../Components/services";
import Contactus from "../Pages/Contactus";
import { Link } from "react-router-dom";
import OnlineComplaint from "../Components/OnlineComplaint";

import home from "../Assets/images/home2.jpg";
import Cards from "../Components/Cards";

const Home = () => {
  return (
    <div id="home">
      <section
        class="bsb-hero-5 px-3 py-5 bsb-overlay"
        style={{
          backgroundImage: `url(${home})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
        }}
      >
        <div class="container">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-12 col-md-11 col-lg-9 col-xl-8 col-xxl-7 ">
              <h2 class="display-6 text-white text-start fw-bold mb-4 my-4">
                Reporting incidents made easy
              </h2>
              <p class="lead text-white text-start mb-5 d-flex ">
                <span class="">
                  Crime doesn't stand a chance against a united community. This
                  platform is your voice, your chance to make a difference.
                </span>
              </p>
              <div class="d-grid gap-2 d-sm-flex ">
                <Link
                  to="/login"
                  class="btn bsb-btn-2xl text-white"
                  style={{ backgroundColor: "#062d4b", opacity: "80%" }}
                >
                  Report a Crime Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Cards />

      <Contactus />
    </div>
  );
};

export default Home;
