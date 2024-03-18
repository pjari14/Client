import React from "react";

import image from "../Assets/images/Contact2.jpg";

const contactus = () => {
  return (
    <>
      <div class="container py-4">
        <div class="container">
          <img
            className="img-fluid rounded mx-auto d-block"
            loading="lazy"
            src={image}
            width="60%"
            height="60%"
            alt="Contact us"
          />
        </div>
        <form id="contactForm">
          <div class="mb-3">
            <label class="form-label" for="name">
              Name
            </label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label" for="emailAddress">
              Email Address
            </label>
            <input
              class="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label" for="message">
              Message
            </label>
            <textarea
              class="form-control"
              id="message"
              type="text"
              placeholder="Message"
              style={{ height: " 10rem" }}
              required
            ></textarea>
          </div>

          <div class="d-none" id="submitSuccessMessage">
            <div class="text-center mb-3">Form submission successful!</div>
          </div>

          <div class="d-grid">
            <button
              class=" btn btn-outline-danger btn-lg "
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default contactus;
