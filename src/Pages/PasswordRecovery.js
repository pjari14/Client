import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");

  // To send emails to the email
  const sendEmail = async (evt) => {
    evt.preventDefault();
    if (email === "") {
    }
    try {
      const data = await axios.post(
        "http://localhost:5000/user/password/reset",
        { email },
        { withCredentials: true }
      );
      if (data.data.success) {
        const link = `http://localhost:3000/accounts/user/${data.data.action_url}`;
        emailjs
          .send(
            "service_3zlkhzd",
            "template_6g29rky",
            {
              action_url: link,
              name: data.data.name,
              to_email: email,
            },
            "q9jrcxE5uNtqvkuM2"
          )
          .then((result) => {
            console.log(result.text);
            setEmail("");
          });
      }
    } catch (error) {
      console.log(error);
      setEmail("");
    }
    setEmail("");
  };

  return (
    <>
      <section class="h-100 text-center">
        <div className="p-5 d-flex justify-content-center">
          <div className="card p-5 shadow-sm  rounded-4 p-4 w-50">
            <h2 class="h2 mb-3">Forgot your password?</h2>
            <p className="mb-0">
              Please Enter your email address you'd like your password reset
              information sent to
            </p>
            <form onSubmit={sendEmail} method="post" class="mt-3 p-2 ">
              <div>
                <label htmlFor="email" className=" form-label block mb-3 h5 ">
                  Enter Your email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded-lg form-control "
                  style={{ marginLeft: "15%", width: "70%" }}
                  placeholder="name@company.com"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </div>

              <button
                type="submit"
                className=" btn mt-3 text-white"
                style={{ backgroundColor: "#062d4b", width: "70%" }}
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PasswordRecovery;
