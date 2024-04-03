import React from "react";
import { Link } from "react-router-dom";
import image from "../Assets/images/logo.png";
const Footer = () => {
  return (
    <>
      <style>
        {`
          @media print {
            .no-print {
              display: none;
            }
          }
        `}
      </style>
      <footer class="footer no-print">
        <div class="bg-dark text-white py-3 py-md-5 py-xl-8 border-top border-light-subtle">
          <div class="container overflow-hidden">
            <div class="row gy-3 gy-md-5 gy-xl-0 align-items-sm-center">
              <div class="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
                <div class="footer-logo-wrapper text-center text-sm-start">
                  <a href="#!">
                    <img
                      src={image}
                      alt="Cyberiris Logo"
                      height="50%"
                      width="50%"
                    />
                  </a>
                </div>
              </div>

              <div class="col-xs-12 col-xl-6 order-2 order-xl-1 ">
                <ul class="nav justify-content-center">
                  <li class="nav-item ">
                    <Link
                      className="nav-link link-light px-2 px-md-3"
                      to={"/cybercrime"}
                    >
                      Resources
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className="nav-link link-light px-2 px-md-3"
                      to={"/contactus"}
                    >
                      Contact
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/FAQS"
                      className="nav-link link-light px-2 px-md-3"
                    >
                      FAQ's
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/citizenmanual"
                      className="nav-link link-light px-2 px-md-3"
                    >
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
                <div class="footer-copyright-wrapper text-white text-center">
                  &copy; 2024.{" "}
                  <Link class="text-light" to="/">
                    CYBERIRIS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-dark py-3 py-md-5 border-top border-light-subtle">
          <div class="container overflow-hidden">
            <div class="row">
              <div class="col">
                <div class="footer-info-wrapper text-white text-center">
                  <p class="h6">
                    Visit the CyberIris Crime Reporting Portal to report
                    incidents and contribute to a safer environment. Together,
                    we can combat cybercrime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
