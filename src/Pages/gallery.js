import React from "react";
import { Link } from "react-router-dom";
import image1 from "../Assets/images/child_abuse.jpg";
import image2 from "../Assets/images/child_abuse1.jpg";
import image3 from "../Assets/images/women_abuse.jpg";
import image4 from "../Assets/images/finance_fraud.jpg";
import image5 from "../Assets/images/cyber_crime.jpg";
import image6 from "../Assets/images/finance_1.jpg";
import video1 from "../Assets/images/password_theft.mp4";
import video2 from "../Assets/images/whatsapp.mp4";
import video3 from "../Assets/images/stalking.mp4";
import video4 from "../Assets/images/debit&credit.mp4";
import video5 from "../Assets/images/game_fraud.mp4";
import video6 from "../Assets/images/investment.mp4";
import audio1 from "../Assets/images/Email_Scam.mp3";
import audio2 from "../Assets/images/Obscene.mp3";
import audio3 from "../Assets/images/cyber_audio.mp3";
const Gallery = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12 my-5">
          <div class="p-1 text-center mb-1 text-secondary fs-3">
            ━━━ Media Gallery ━━━
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body ">
                <img
                  src={image1}
                  style={{ paddingTop: "1px", width: "100%", height: "290px" }}
                ></img>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#1B512D",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Silence hides the violence."
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <img
                  src={image6}
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                ></img>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#1B512D",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Dollars and sense: Make every cent count."
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <img
                  src={image3}
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                ></img>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#1B512D",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Women faces alarming crime rates."
                </h6>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row my-3">
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body ">
                <img
                  src={image2}
                  style={{ paddingTop: "1px", width: "100%", height: "290px" }}
                ></img>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#D62828",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Break the chains of domestic abuse."
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <img
                  src={image5}
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                ></img>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#D62828",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Digital Intrusion Chronicles"
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <img
                  src={image4}
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                ></img>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#D62828",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Illusions of Wealth: Navigating Financial Deceit"
                </h6>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div class="col-sm-12 my-5">
          <div class="p-1 text-center mb-1 text-secondary fs-3">
            ━━━ Video Gallery ━━━
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <video
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                  controls
                >
                  <source src={video1} type="video/mp4"></source>
                </video>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#1985A1",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Password Theft"
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <video
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                  controls
                >
                  <source src={video2} type="video/mp4"></source>
                </video>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#1985A1",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Whatsapp Lottery Scam"
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <video
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                  controls
                >
                  <source src={video3} type="video/mp4"></source>
                </video>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#1985A1",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Cyber Stalking"
                </h6>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row my-3">
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <video
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                  controls
                >
                  <source src={video4} type="video/mp4"></source>
                </video>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#E9B872",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Debit & Credit Card Fraud"
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <video
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                  controls
                >
                  <source src={video5} type="video/mp4"></source>
                </video>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#E9B872",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Online Games Fraud"
                </h6>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card mx-auto my-2 h-100 "
              style={{
                width: "20rem",
                borderStyle: "groove",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <div class="card-body">
                <video
                  style={{
                    paddingTop: "1px",
                    width: "100%",
                    height: "290px",
                  }}
                  controls
                >
                  <source src={video6} type="video/mp4"></source>
                </video>
                <hr
                  style={{
                    paddingTop: "1px",
                    color: "#E9B872",
                    opacity: "90%",
                    width: "100%",
                    height: "1%",
                  }}
                ></hr>
                <h6 class="card-title text-danger" style={{ fontSize: "20px" }}>
                  "Online Investment Fraud"
                </h6>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="col-sm-12 my-5">
          <div class="p-1 text-center mb-1 text-secondary fs-3">
            ━━━ Radio Jingles ━━━
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div class="card-body">
              <div
                class="card mx-auto my-2 h-100 "
                style={{
                  width: "20rem",

                  borderStyle: "groove",
                  borderWidth: "2px",
                  borderColor: "black",
                }}
              >
                <audio
                  style={{ paddingTop: "15px", paddingLeft: "15px" }}
                  controls
                >
                  <source src={audio1} type="audio/mp3"></source>
                </audio>
                <br></br>
                <h6
                  class="card-title text-danger"
                  style={{
                    fontSize: "20px",
                    paddingLeft: "15px",
                  }}
                >
                  "Email Scam & Phishing"
                </h6>
              </div>
            </div>
          </div>

          <div class="col-sm">
            <div class="card-body">
              <div
                class="card mx-auto my-2 h-100 "
                style={{
                  width: "20rem",
                  borderStyle: "groove",
                  borderWidth: "2px",
                  borderColor: "black",
                }}
              >
                <audio
                  style={{ paddingTop: "15px", paddingLeft: "15px" }}
                  controls
                >
                  <source src={audio2} type="audio/mp3"></source>
                </audio>
                <br></br>
                <h6
                  class="card-title text-danger"
                  style={{
                    fontSize: "20px",
                    paddingLeft: "15px",
                  }}
                >
                  "Obscene Content"
                </h6>
              </div>
            </div>
          </div>

          <div class="col-sm">
            <div class="card-body">
              <div
                class="card mx-auto my-2 h-100 "
                style={{
                  width: "20rem",
                  borderStyle: "groove",
                  borderWidth: "2px",
                  borderColor: "black",
                }}
              >
                <audio
                  style={{ paddingTop: "15px", paddingLeft: "15px" }}
                  controls
                >
                  <source src={audio3} type="audio/mp3"></source>
                </audio>
                <br></br>
                <h6
                  class="card-title text-danger"
                  style={{
                    fontSize: "20px",
                    paddingLeft: "15px",
                  }}
                >
                  "Cyber Crime"
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
