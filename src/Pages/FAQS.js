import React from "react";
const FAQS = () => {
  return (
    <section class="bsb-faq-3 py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 class="mb-4 display-5 text-center">
              Frequently Asked Questions
            </h2>
            <p class="text-secondary text-center lead fs-4">
              Welcome to our FAQ page, your one-stop resource for answers to
              commonly asked questions.
            </p>
            <p class="mb-5 text-center">
              Whether you're a new customer looking to learn more about what we
              offer or a long-time user seeking clarification on specific
              topics, this page has clear and concise information about our
              products and services.
            </p>
            <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div class="mb-8">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-xl-10">
              <div class="d-flex align-items-end mb-5">
                <i class="bi bi-person-gear me-3 lh-1 display-5"></i>
                <h3 class="m-0">Your Account</h3>
              </div>
            </div>
            <div class="col-11 col-xl-10">
              <div class="accordion accordion-flush" id="faqAccount">
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading2">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse2"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse2"
                    >
                      How do I create an account?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading2"
                  >
                    <div class="accordion-body">
                      <p>
                        To create an account, visit the website or application
                        and look for a "Sign Up" or "Create Account" button.
                        Follow the instructions to enter your information and
                        create a username and password.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading3">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse3"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse3"
                    >
                      How do I secure my account?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading3"
                  >
                    <div class="accordion-body">
                      <p>
                        To secure your account, use a robust and unique
                        password, enable two-factor authentication if available,
                        and be cautious about sharing your login information.
                        Regularly update your password and avoid using easily
                        guessable information like birthdays or names.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading4">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse4"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse4"
                    >
                      What should I do if I forget my password?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading4"
                  >
                    <div class="accordion-body">
                      <p>
                        If you forget your password, most websites and services
                        offer a "Forgot Password" or "Reset Password" option.
                        Follow the steps to reset your password, often involving
                        an email or SMS verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8 my-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-xl-10">
              <div class="d-flex align-items-end mb-5">
                <i class="bi bi-cart-plus me-3 lh-1 display-5"></i>
                <h3 class="m-0">Reporting a Complaint</h3>
              </div>
            </div>
            <div class="col-11 col-xl-10">
              <div class="accordion accordion-flush" id="faqOrder">
                <div class="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading1">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse1"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse1"
                    >
                      Do I need to create an account to report a complaint?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading1"
                  >
                    <div class="accordion-body">
                      <p>
                        Yes, creating an account is required to report a
                        complaint on our website. This helps ensure the
                        legitimacy of reports and allows for secure
                        communication between you and law enforcement officials.
                        It also allows you to track the progress of your report.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading2">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse2"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse2"
                    >
                      What types of crimes can I report online?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading2"
                  >
                    <div class="accordion-body">
                      <p>
                        You can report crime online for non-emergency crimes
                        such as: Theft (petty theft, stolen phone, etc.) Fraud
                        (identity theft, credit card fraud, etc.)CyberCrime,
                        Harassment (online harassment, stalking, etc.) Vandalism
                        Property damage
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading3">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse3"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse3"
                    >
                      What information will I need to provide when filing a
                      report online?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading3"
                  >
                    <div class="accordion-body">
                      <p>
                        You will typically need to provide the following
                        information when filing a report online:
                        <li>Your name and contact information</li>
                        <li>The date, time, and location of the crime </li>
                        <li>A detailed description of the crime</li>
                        <li>
                          Any suspect information (if available) Evidence
                          (screenshots, photos, etc.)
                        </li>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading4">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse4"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse4"
                    >
                      Is online crime reporting anonymous?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading4"
                  >
                    <div class="accordion-body">
                      <p>
                        No, online crime reporting is not anonymous. You will be
                        required to provide your name and contact information.
                        This information is necessary for law enforcement to
                        investigate the crime.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading5">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse5"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse5"
                    >
                      What happens after I file a report online?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading5"
                  >
                    <div class="accordion-body">
                      <p>
                        Once you file a report online, a law enforcement officer
                        may contact you for further information. You may also be
                        asked to come to the police station to file a formal
                        report in person.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading6">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse6"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse6"
                    >
                      Should I still call 911 for emergencies?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse6"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading6"
                  >
                    <div class="accordion-body">
                      <p>
                        Yes, online crime reporting is not intended for
                        emergencies. If you are in immediate danger, or if a
                        crime is in progress, you should always call 911.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading7">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse7"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse"
                    >
                      What are the benefits of filing a report online?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse7"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading7"
                  >
                    <div class="accordion-body">
                      <p>
                        There are several benefits to filing a report online,
                        including:
                        <li>
                          Convenience: You can file a report at any time, from
                          anywhere with an internet connection.
                        </li>
                        <li>
                          Safety: You can report a crime without having to go to
                          the police station in person.
                        </li>
                        <li>
                          Time-saving: Online reporting can often be quicker
                          than filing a report in person.
                        </li>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading8">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse8"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse8"
                    >
                      What if I'm unsure if I should file a report?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse8"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading8"
                  >
                    <div class="accordion-body">
                      <p>
                        If you are unsure whether or not you should file a
                        report, it is always best to err on the side of caution
                        and file a report. The police can then determine if a
                        crime has been committed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQS;
