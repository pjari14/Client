import React from "react";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <>
      <section class="bg-light py-3 py-md-5 py-xl-8">
        <div class="container overflow-hidden">
          <div class="row gy-4 gy-md-5 gy-lg-0 my-5 align-items-center">
            <div class="col-12 col-lg-5">
              <div class="row">
                <div class="col-12 col-xl-11">
                  <h2
                    class="display-5 mb-3 mb-xl-4"
                    style={{ color: "#062d4b" }}
                  >
                    Empower Yourself: Resources for a Safer Digital World
                  </h2>
                  <p class="mb-3 mb-xl-4">
                    We believe knowledge is a powerful tool in the fight against
                    crime. This Resources section equips you with the
                    information you need to stay safe online and informed about
                    cybercrime.
                  </p>
                  <a
                    href="/cybercrime"
                    class="btn bsb-btn-2xl  rounded-pill text-white"
                    style={{ backgroundColor: "#062d4b" }}
                  >
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
                        class="bi bi-shield-check text-primary mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                      <h4 class="mb-4">Cyber Safety Tips</h4>
                      <p class="mb-4 text-secondary">
                        Follow these essential cyber safety rules to protect
                        yourself and your family from digital threats.
                      </p>
                      <a
                        href="/cybersafety"
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
                        href="/cybercrime"
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
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="#0d6efd"
                            fill-rule="evenodd"
                            d="M1.25 2C.56 2 0 2.56 0 3.25v8.5C0 12.44.56 13 1.25 13H5c.896 0 1.475.205 1.809.448.317.23.441.51.441.802a.75.75 0 001.5 0c0-.292.124-.572.441-.802.334-.243.913-.448 1.809-.448h3.75c.69 0 1.25-.56 1.25-1.25v-8.5C16 2.56 15.44 2 14.75 2H11c-1.154 0-2.106.354-2.772 1-.081.08-.157.161-.228.246A3.131 3.131 0 007.772 3C7.106 2.354 6.154 2 5 2H1.25zm7.5 9.967c.61-.309 1.372-.467 2.25-.467h3.5v-8H11c-.846 0-1.394.253-1.728.577-.335.325-.522.787-.522 1.34v6.55zm-1.5 0v-6.55c0-.553-.187-1.015-.522-1.34C6.394 3.753 5.846 3.5 5 3.5H1.5v8H5c.878 0 1.64.158 2.25.467z"
                            clip-rule="evenodd"
                          ></path>
                        </g>
                      </svg>

                      <h4 class="mb-4">Citizen Manual</h4>
                      <p class="mb-4 text-secondary">
                        Step by step guide for citizens to report crime and keep
                        track on them online.
                      </p>
                      <a
                        href="/citizenmanual"
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
                        viewBox="0 0 24 24"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4 4.83164C4 3.24931 5.75049 2.29363 7.08152 3.14928L18.2323 10.3176C19.4569 11.1049 19.4569 12.8951 18.2323 13.6823L7.08152 20.8507C5.75049 21.7063 4 20.7506 4 19.1683V4.83164ZM17.1507 12L6 4.83164V19.1683L17.1507 12Z"
                            fill="#0d6efd"
                          ></path>
                        </g>
                      </svg>
                      <h4 class="mb-4">Media/Gallery</h4>
                      <p class="mb-4 text-secondary">
                        Know more about current crimes,helpline noumbers for
                        safety.
                      </p>
                      <a
                        href="/gallery"
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
    </>
  );
};
export default Cards;
