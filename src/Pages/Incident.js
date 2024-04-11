import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IndiaCities from "../Components/incidancities";
import { createIncident } from "../ReduxStore/Incidentslice/Incidentslice";
import { useForm } from "react-hook-form";
import {
  CCContent,
  DVContent,
  RBContent,
  THContent,
  ABContent,
} from "../Components/crimecomponent";

const crimeTypes = [
  { id: "CC", label: "Cyber Crime" },
  { id: "DV", label: "Domestic Violence" },
  { id: "AB", label: "Abuse" },
  { id: "TH", label: "Theft" },
  { id: "RB", label: "Robbery" },
];

const crimeDetails = {
  CC: {
    title: "Cyber Crime",
    component: CCContent,
  },
  DV: {
    title: "Domestic Violence",
    component: DVContent,
  },
  AB: {
    title: "Abuse",
    component: ABContent,
  },
  TH: {
    title: "Theft",
    component: THContent,
  },
  RB: {
    title: "Robbery",
    component: RBContent,
  },
};

const Incident = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [crimetype, setCrimeType] = useState("");
  const [image, setImage] = useState(null);
  // const [policestation, setPoliceStation] = useState("");
  const user = useSelector((state) => state.user);
  const incident = useSelector((state) => state.incident);
  const dispatch = useDispatch();
  const handleCrimeChange = (e) => {
    setSelectedCrime(e.target.value);
  };

  const renderCrimeDetails = () => {
    const CrimeDetailComponent = crimeDetails[selectedCrime].component;
    return CrimeDetailComponent ? <CrimeDetailComponent /> : null;
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();
  // if (selectedCrime === "CC") {
  //   setCrimeType("Cyber Crime");
  // } else if (selectedCrime === "DV") {
  //   setCrimeType("Domestic Violence");
  // } else if (selectedCrime === "AB") {
  //   setCrimeType("Abuse");
  // } else if (selectedCrime === "TH") {
  //   setCrimeType("Theft");
  // } else if (selectedCrime === "RB") {
  //   setCrimeType("Robbery");
  // } else {
  //   alert("Select Crime Type");
  // }
  const navigate = useNavigate();
  const insertIncident = async (data) => {
    //  if (!selectedCrime) {
    //   // Display an alert message or set an error message to be displayed
    //   alert("Please select a crime type.");
    //   return;
    // }
    try {
      const formData = new FormData();
      formData.append("category", crimetype);
      formData.append("state", selectedState);
      formData.append("city", city ? city : cities[0]);
      formData.append("userId", user._id);
      formData.append("firstname", user.firstname);
      formData.append("lastname", user.lastname);
      formData.append("policestation", data.policestation);
      formData.append("dateofincident", data.dateofincident);
      formData.append("reasonofdelay", data.reasonofdelay);
      formData.append("location", data.location);
      formData.append("nameofsus", data.nameofsus);
      formData.append("additionalinfo", data.additionalinfo);
      formData.append("evidence", image);
      // if (city) {
      //   console.log(city);
      // }
      // console.log(city);
      // console.log(cities[0]);
      // console.log(data, incident, cities, selectedState);
      dispatch(createIncident(formData));
      // console.log(incident);
      navigate("/suspect");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container mt-2 pt-2">
        <div className="col-sm-12">
          <div className=" p-3 text-center mb-2 text-danger fs-1">
            File your complaint here!
          </div>
          <hr />
        </div>
        <form
          className="row g-3 shadow py-4 px-4 mx-5 my-5 "
          id="complaintdetails"
          encType="multipart/form-data"
          onSubmit={handleSubmit(insertIncident)}
        >
          <div className="col-sm-12">
            <h2 className="text text-secondary fw-3">
              Complaint/Incident details
            </h2>
          </div>
          <hr />
          <div className="col-md-6">
            {/* <label className="form-label">
              {" "}
              Category of complaint
              <span style={{ fontSize: "20px" }} class="text-danger ml-1">
                *
              </span>
            </label>
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              id="ctype"
              name="crimeType"
              value={selectedCrime}
              onChange={handleCrimeChange}
              // {...register("category", {
              //   required: { value: true, message: "Category is Required!" },
              // })}
            >
              <option value="">Select a crime type</option>
              {crimeTypes.map((crime) => (
                <option key={crime.id} value={crime.label}>
                  {crime.label}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-danger py-2">
                {errors.category.message}
              </span>
            )} */}
            <label class="form-label">Select Crime Type:</label>
          </div>
          <div class="col-md-6">
            <select
              class="form-select"
              id="ctype"
              name="crimeType"
              value={selectedCrime}
              onChange={(e) => {
                const selectedCrimeType = crimeTypes.find(
                  (crime) => crime.id === e.target.value
                );
                if (selectedCrimeType) {
                  setCrimeType(selectedCrimeType.label);
                } else {
                  setCrimeType("");
                }
                handleCrimeChange(e);
              }}
            >
              <option value="">Select a crime type</option>
              {crimeTypes.map((crime) => (
                <option key={crime.id} value={crime.id}>
                  {crime.label}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-danger py-2">
                {errors.category.message}
              </span>
            )}
          </div>

          <IndiaCities
            selectedState={selectedState}
            cities={cities}
            city={city}
            setCity={setCity}
            setCities={setCities}
            setSelectedState={setSelectedState}
          />

          <div className="col-md-6">
            <label className="form-label">
              Approximate date & time of incident:
              <span style={{ fontSize: "20px" }} class="text-danger ml-1">
                *
              </span>
            </label>
          </div>
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              id="dateofincident"
              {...register("dateofincident", {
                required: {
                  value: true,
                  message: "Date of incident is Required!",
                },
              })}
            />
            {errors.dateofincident && (
              <span className="text-danger py-2">
                {errors.dateofincident.message}
              </span>
            )}
          </div>

          <div className="col-md-2">
            <input type="time" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="policestation" className="form-label">
              Select Police Station
              <span style={{ fontSize: "20px" }} class="text-danger ml-1">
                *
              </span>
            </label>
          </div>
          <div className="col-md-6">
            <select
              className="form-control"
              id="policestation"
              // value={policestation}
              // onChange={(evt) => setPoliceStation(evt.target.value)}
              {...register("policestation", {
                required: {
                  value: true,
                  message: "Police Station is Required!",
                },
              })}
            >
              <option value="">Select a Police Station</option>

              {/* Andhra Pradesh */}

              <optgroup label="Hyderabad">
                <option value="HyderabadCP">
                  Hyderabad City Police Station
                </option>
                <option value="Goshamahal">Goshamahal Police Station</option>
                <option value="Banjara Hills">
                  Banjara Hills Police Station
                </option>
              </optgroup>

              <optgroup label="Visakhapatnam">
                <option value="VisakhapatnamCP">
                  Visakhapatnam City Police Station
                </option>
                <option value="Gopalapatnam">
                  Gopalapatnam Police Station
                </option>
                <option value="Malkapuram">Malkapuram Police Station</option>
              </optgroup>

              <optgroup label="Vijayawada">
                <option value="VijayawadaCP">
                  Vijayawada City Police Station
                </option>
                <option value="Benz Circle">Benz Circle Police Station</option>
                <option value="Governorpet">Governorpet Police Station</option>
              </optgroup>

              <optgroup label="Itanagar">
                <option value="ItanagarPS">Itanagar Police Station</option>
                <option value="Naharlagun">Naharlagun Police Station</option>
                <option value="Harmuty">Harmuty Police Station</option>
              </optgroup>

              <optgroup label="Ziro">
                <option value="ZiroPS">Ziro Police Station</option>
                <option value="Hapoli">Hapoli Police Station</option>
                <option value="Yachuli">Yachuli Police Station</option>
              </optgroup>

              <optgroup label="Pasighat">
                <option value="PasighatPS">Pasighat Police Station</option>
                <option value="Mebo">Mebo Police Station</option>
                <option value="Ruksin">Ruksin Police Station</option>
              </optgroup>

              <optgroup label="Dispur">
                <option value="DispurPS">Dispur Police Station</option>
                <option value="Pan Bazaar">Pan Bazaar Police Station</option>
                <option value="Basistha">Basistha Police Station</option>
              </optgroup>

              <optgroup label="Guwahati">
                <option value="GuwahatiCP">Guwahati Police Station</option>
                <option value="Paltan Bazaar">
                  Paltan Bazaar Police Station
                </option>
                <option value="Bharalumukh">Bharalumukh Police Station</option>
              </optgroup>

              <optgroup label="Jorhat">
                <option value="JorhatPS">Jorhat Police Station</option>
                <option value="Mariani">Mariani Police Station</option>
                <option value="Titabar">Titabar Police Station</option>
              </optgroup>

              <optgroup label="Patna">
                <option value="PatnaPS">Patna Police Station</option>
                <option value="Kadamkuan">Kadamkuan Police Station</option>
                <option value="Gandhi Maidan">
                  Gandhi Maidan Police Station
                </option>
              </optgroup>

              <optgroup label="Gaya">
                <option value="GayaPS">Gaya Police Station</option>
                <option value="Dumaria">Dumaria Police Station</option>
                <option value="Tikari">Tikari Police Station</option>
              </optgroup>

              <optgroup label="Muzaffarpur">
                <option value="MuzaffarpurPS">
                  Muzaffarpur Police Station
                </option>
                <option value="Ahiyapur">Ahiyapur Police Station</option>
                <option value="Saraiya">Saraiya Police Station</option>
              </optgroup>

              {/* Chhattisgarh */}
              <optgroup label="Chhattisgarh">
                <option value="Raipur">Raipur Police Station</option>
                <option value="Bilaspur">Bilaspur Police Station</option>
                <option value="Durg">Durg Police Station</option>
              </optgroup>
              {/* Goa */}
              <optgroup label="Goa">
                <option value="Panaji">Panaji Police Station</option>
                <option value="Margao">Margao Police Station</option>
                <option value="Vasco da Gama">
                  Vasco da Gama Police Station
                </option>
              </optgroup>
              {/* Gujarat */}
              <optgroup label="Gujarat">
                <option value="Ahmedabad">Ahmedabad Police Station</option>
                <option value="Surat">Surat Police Station</option>
                <option value="Vadodara">Vadodara Police Station</option>
              </optgroup>
              {/* Haryana */}
              <optgroup label="Haryana">
                <option value="Chandigarh">Chandigarh Police Station</option>
                <option value="Gurgaon">Gurgaon Police Station</option>
                <option value="Faridabad">Faridabad Police Station</option>
              </optgroup>
              {/* Himachal Pradesh */}
              <optgroup label="Himachal Pradesh">
                <option value="Shimla">Shimla Police Station</option>
                <option value="Dharamshala">Dharamshala Police Station</option>
                <option value="Mandi">Mandi Police Station</option>
              </optgroup>
              {/* Jharkhand */}
              <optgroup label="Jharkhand">
                <option value="Ranchi">Ranchi Police Station</option>
                <option value="Jamshedpur">Jamshedpur Police Station</option>
                <option value="Dhanbad">Dhanbad Police Station</option>
              </optgroup>
              {/* Karnataka */}
              <optgroup label="Karnataka">
                <option value="Bangalore">Bangalore City Police Station</option>
                <option value="Mysore">Mysore Police Station</option>
                <option value="Hubli">Hubli Police Station</option>
              </optgroup>
              {/* Kerala */}
              <optgroup label="Kerala">
                <option value="Thiruvananthapuram">
                  Thiruvananthapuram City Police Station
                </option>
                <option value="Kochi">Kochi City Police Station</option>
                <option value="Kozhikode">Kozhikode City Police Station</option>
              </optgroup>
              {/* Madhya Pradesh */}
              <optgroup label="Madhya Pradesh">
                <option value="Bhopal">Bhopal Police Station</option>
                <option value="Indore">Indore Police Station</option>
                <option value="Gwalior">Gwalior Police Station</option>
              </optgroup>
              {/* Maharashtra */}
              <optgroup label="Maharashtra">
                <option value="Mumbai">Mumbai Police Station</option>
                <option value="Pune">Pune Police Station</option>
                <option value="Nagpur">Nagpur Police Station</option>
              </optgroup>
              {/* Manipur */}
              <optgroup label="Manipur">
                <option value="Imphal">Imphal Police Station</option>
                <option value="Bishnupur">Bishnupur Police Station</option>
                <option value="Chandel">Chandel Police Station</option>
              </optgroup>
              {/* Meghalaya */}
              <optgroup label="Meghalaya">
                <option value="Shillong">Shillong Police Station</option>
                <option value="Tura">Tura Police Station</option>
                <option value="Nongpoh">Nongpoh Police Station</option>
              </optgroup>
              {/* Mizoram */}
              <optgroup label="Mizoram">
                <option value="Aizawl">Aizawl Police Station</option>
                <option value="Lunglei">Lunglei Police Station</option>
                <option value="Champhai">Champhai Police Station</option>
              </optgroup>
              {/* Nagaland */}
              <optgroup label="Nagaland">
                <option value="Kohima">Kohima Police Station</option>
                <option value="Dimapur">Dimapur Police Station</option>
                <option value="Mokokchung">Mokokchung Police Station</option>
              </optgroup>
              {/* Odisha */}
              <optgroup label="Odisha">
                <option value="Bhubaneswar">Bhubaneswar Police Station</option>
                <option value="Cuttack">Cuttack Police Station</option>
                <option value="Puri">Puri Police Station</option>
              </optgroup>
              {/* Punjab */}
              <optgroup label="Punjab">
                <option value="Chandigarh">Chandigarh Police Station</option>
                <option value="Amritsar">Amritsar Police Station</option>
                <option value="Ludhiana">Ludhiana Police Station</option>
              </optgroup>
              {/* Rajasthan */}
              <optgroup label="Rajasthan">
                <option value="Jaipur">Jaipur Police Station</option>
                <option value="Jodhpur">Jodhpur Police Station</option>
                <option value="Kota">Kota Police Station</option>
              </optgroup>
              {/* Sikkim */}
              <optgroup label="Sikkim">
                <option value="Gangtok">Gangtok Police Station</option>
                <option value="Pelling">Pelling Police Station</option>
                <option value="Rumtek">Rumtek Police Station</option>
              </optgroup>
              {/* Tamil Nadu */}
              <optgroup label="Tamil Nadu">
                <option value="Chennai">Chennai City Police Station</option>
                <option value="Madurai">Madurai City Police Station</option>
                <option value="Coimbatore">
                  Coimbatore City Police Station
                </option>
              </optgroup>
              {/* Telangana */}
              <optgroup label="Telangana">
                <option value="Hyderabad">Hyderabad City Police Station</option>
                <option value="Warangal">Warangal Police Station</option>
                <option value="Nizamabad">Nizamabad Police Station</option>
              </optgroup>
              {/* Tripura */}
              <optgroup label="Tripura">
                <option value="Agartala">Agartala Police Station</option>
                <option value="Dharmanagar">Dharmanagar Police Station</option>
                <option value="Kailashahar">Kailashahar Police Station</option>
              </optgroup>
              {/* Uttar Pradesh */}
              <optgroup label="Uttar Pradesh">
                <option value="Lucknow">Lucknow Police Station</option>
                <option value="Kanpur">Kanpur Police Station</option>
                <option value="Agra">Agra Police Station</option>
              </optgroup>
              {/* Uttarakhand */}
              <optgroup label="Uttarakhand">
                <option value="Dehradun">Dehradun Police Station</option>
                <option value="Mussoorie">Mussoorie Police Station</option>
                <option value="Nainital">Nainital Police Station</option>
              </optgroup>
              {/* West Bengal */}
              <optgroup label="West Bengal">
                <option value="Kolkata">Kolkata Police Station</option>
                <option value="Siliguri">Siliguri Police Station</option>
                <option value="Durgapur">Durgapur Police Station</option>
              </optgroup>
              {/* Andaman and Nicobar Islands */}
              <optgroup label="Andaman and Nicobar Islands">
                <option value="Port Blair">Port Blair Police Station</option>
                <option value="Havelock">Havelock Police Station</option>
                <option value="Neil Island">Neil Island Police Station</option>
              </optgroup>
              {/* Chandigarh */}
              <optgroup label="Chandigarh">
                <option value="Chandigarh">Chandigarh Police Station</option>
              </optgroup>
              {/* Dadra and Nagar Haveli and Daman and Diu */}
              <optgroup label="Dadra and Nagar Haveli and Daman and Diu">
                <option value="Daman">Daman Police Station</option>
                <option value="Silvassa">Silvassa Police Station</option>
              </optgroup>
              {/* Delhi */}
              <optgroup label="Delhi">
                <option value="Delhi">Delhi Police Station</option>
              </optgroup>
              {/* Lakshadweep */}
              <optgroup label="Lakshadweep">
                <option value="Kavaratti">Kavaratti Police Station</option>
                <option value="Minicoy">Minicoy Police Station</option>
                <option value="Agatti">Agatti Police Station</option>
              </optgroup>
              {/* Puducherry */}
              <optgroup label="Puducherry">
                <option value="Puducherry">Puducherry Police Station</option>
              </optgroup>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="reasonofdelay" className="form-label">
              Reason of delay in report:
            </label>
          </div>
          <div className="col-md-6">
            <input
              type="textarea"
              placeholder="Enter reason of delay"
              className="form-control"
              id="reasonofdelay"
              {...register("reasonofdelay")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="location" className="form-label">
              Where did the incident occur?
            </label>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter where did the incident occur"
              id="location"
              {...register("location")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="evidence" className="form-label">
              Supporting Evidence
            </label>
          </div>
          <div className="col-md-6">
            <input
              type="file"
              className="form-control"
              id="evidence"
              onChange={handleUpload}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Name of the person/company against which/whom the complaint is
              filed:
            </label>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              name="suspect"
              type="text"
              id="nameofsus"
              {...register("nameofsus")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="additionalinfo" className="form-label">
              Please provide any additional information:
            </label>
          </div>
          <div className="col-md-6">
            <textarea
              className="form-control"
              id="additionalinfo"
              rows="3"
              {...register("additionalinfo")}
            />
          </div>

          <div className="col-md-12 mx-3 text-danger">
            <input
              className="form-check-input "
              type="checkbox"
              value=""
              id="check"
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              required
            >
              *I confirm that the information I've given is accurate and true.
            </label>
          </div>
          <div className="row py-4 ">
            <div className="col-4 ">
              <button
                type="reset"
                className=" btn btn-outline-secondary btn-sm shadow-sm   bg-gradient  p-3 text-center  fw-bold "
              >
                Clear
              </button>
            </div>
            <div className="col-4 ">
              <Link
                to="/personaldata"
                className="  btn  btn-outline-danger shadow-sm  btn-sm  shadow-sm bg-gradient p-3 text-center fw-bold "
              >
                <span>Back</span>
              </Link>
            </div>
            <div className="col-4 ">
              <button
                type="submit"
                to="/suspect"
                className=" btn btn-outline-success shadow-sm button btn-sm  shadow-sm bg-gradient p-3 text-center fw-bold "
              >
                <span>Next</span>
              </button>
            </div>
          </div>
          <div className="col-4 text-end"></div>
        </form>
        <div className="container py-3 text-center ">
          <h2>IPC sections</h2>

          {selectedCrime && renderCrimeDetails()}
        </div>
      </div>
    </>
  );
};
export default Incident;
