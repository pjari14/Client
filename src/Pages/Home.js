import React from "react";
import Services from "../Components/services";
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

      <section class="py-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center">Services</h2>
              <p class="text-secondary mb-5 text-center">
                CyberIris empowers you to report incidents directly to law
                enforcement, 24/7, from any internet-connected device. We make
                the reporting process as simple and stress-free as possible.
              </p>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="text-center px-xl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-1-circle-fill text-primary mb-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"
                  />
                </svg>
                <h5 class="m-2">Fast and Easy Reporting</h5>
                <p class="m-0 text-secondary">
                  Fill out a secure online form in a matter of minutes, saving
                  you valuable time and a trip to the station.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="text-center px-xl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-2-circle-fill text-primary mb-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                </svg>
                <h5 class="m-2">Security</h5>
                <p class="m-0 text-secondary">
                  Our platform utilizes industry-standard security protocols to
                  ensure your privacy and the confidentiality of your report.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="text-center px-xl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-3-circle-fill text-primary mb-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                </svg>
                <h5 class="m-2">Track Your Report</h5>
                <p class="m-0 text-secondary">
                  Once submitted, you'll receive a confirmation number for
                  reference and (if applicable) the ability to track the
                  progress of your report online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light py-3 py-md-5 py-xl-8">
        <div class="container overflow-hidden">
          <div class="row gy-4 gy-md-5 gy-lg-0 align-items-center">
            <div class="col-12 col-lg-5">
              <div class="row">
                <div class="col-12 col-xl-11">
                  <h2 class="display-5 mb-3 mb-xl-4">
                    Empower Yourself: Resources for a Safer Digital World
                  </h2>
                  <p class="mb-3 mb-xl-4">
                    We believe knowledge is a powerful tool in the fight against
                    crime. This Resources section equips you with the
                    information you need to stay safe online and informed about
                    cybercrime.
                  </p>
                  <a href="#!" class="btn bsb-btn-2xl btn-primary rounded-pill">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-7 overflow-hidden">
              <div class="row gy-4">
                <div class="col-12 col-sm-6">
                  <div class="card border-0 border-bottom border-primary shadow-sm">
                    <div class="card-body text-center p-4 p-xxl-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-textarea-resize text-primary mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z" />
                      </svg>
                      <h4 class="mb-4">Cyber Safety Tips</h4>
                      <p class="mb-4 text-secondary">
                        For a secure online experience, follow these essential
                        cyber safety rules to safeguard yourself and your family
                        from digital threats.
                      </p>
                      <a
                        href="#!"
                        class="fw-bold text-decoration-none link-primary"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="card border-0 border-bottom border-primary shadow-sm">
                    <div class="card-body text-center p-4 p-xxl-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-tablet text-primary mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      <h4 class="mb-4">Cyber Awareness</h4>
                      <p class="mb-4 text-secondary">
                        Cyber awareness is about understanding the risks and
                        knowing how to protect yourself and others from cyber
                        threats.
                      </p>
                      <a
                        href="#!"
                        class="fw-bold text-decoration-none link-primary"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="card border-0 border-bottom border-primary shadow-sm">
                    <div class="card-body text-center p-4 p-xxl-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-repeat text-primary mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                      </svg>
                      <h4 class="mb-4">Citizen Manual</h4>
                      <p class="mb-4 text-secondary">
                        Step by step guide for citizens to report crime and keep
                        track on them online.
                      </p>
                      <a
                        href="#!"
                        class="fw-bold text-decoration-none link-primary"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="card border-0 border-bottom border-primary shadow-sm">
                    <div class="card-body text-center p-4 p-xxl-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-shield-check text-primary mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                      <h4 class="mb-4">Media/Gallery</h4>
                      <p class="mb-4 text-secondary">
                        Know more about current crimes,helpline noumbers for
                        safety.
                      </p>
                      <a
                        href="#!"
                        class="fw-bold text-decoration-none link-primary"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
