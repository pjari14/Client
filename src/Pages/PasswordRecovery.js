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
    <div className="recovery_bg font-[libre] text-center p-5">
      <section className="border-gray-700">
        <div className="container mx-auto d-flex flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full p-4 bg-white rounded-lg shadow-lg lg:max-w-xl">
            <h1 className="mb-3 text-4xl font-medium text-gray-800">
              Forgot your password?
            </h1>
            <p className="mb-12 text-gray-500 dark:text-gray-400">
              Don't fret! Just type in your email and we will send you a code to
              reset your password!
            </p>
            <form className="space-y-5" onSubmit={sendEmail} method="post">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Your email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border-gray-200 p-4 pl-10 text-gray-700 shadow-sm focus:border-blue-600 focus:ring-blue-300 sm:text-sm"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-medium text-center"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PasswordRecovery;
