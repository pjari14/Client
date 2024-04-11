import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IndiaCities from "../Components/incidancities";
import { createIncident } from "../ReduxStore/Incidentslice/Incidentslice";
import {
  CCContent,
  DVContent,
  RBContent,
  THContent,
  ABContent,
} from "../Components/crimecomponent";
import IPCsection from "../Components/IPCsection";
import { useForm } from "react-hook-form";
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

// const policeStations = [
//   {
//     name: "Adajan Police Station",
//     address:
//       "Behind Gangeshwar Mahadev Temple, Honey Park Road, Adajan, Surat, Gujarat 395009",
//   },
//   {
//     name: "Amroli Police Station",
//     address:
//       "Near Fire Station, Sayan Rd, Amroli Char Rasta, Amroli, Surat, Gujarat 39410",
//   },
//   { name: "Athwa Police Station", address: "Nanavat, Surat, Gujarat 395003" },
//   {
//     name: "Chowkbazar Police Station",
//     address: "Near Primary School No.77, Parsiwad, Ranitalao, Surat",
//   },
//   {
//     name: "Dindoli Police Station",
//     address: "Near Madhuram Circle, Kharvasa Road, Dindoli, Surat",
//   },
//   {
//     name: "Dumas Police Station",
//     address: "Opp. Primary Health Centre, Dumas Village, Surat",
//   },
//   {
//     name: "Hajira Police Station",
//     address: "Hajiragam Road, Near Essar Company, Surat",
//   },
//   {
//     name: "Ichchhapor Police Station",
//     address: "Kawas Patiya, Hazira Road, Surat",
//   },
//   {
//     name: "Jahangirpura Police Station",
//     address: "Morabhagal Police Chowky Building, Morabhagal, Rander, Surat",
//   },
//   {
//     name: "Kapodra Police Station",
//     address: "Opp. Tapi Eng.College, Kapodra, Surat",
//   },
//   {
//     name: "Katargam Police Station",
//     address: "Opp. Idgah Dargah, Katargam Main Road, Katargam, Surat",
//   },
//   {
//     name: "Khatodra Police Station",
//     address: "Near Jogani Mata Temple, Udhana Magdalla Road, Khatodra, Surat",
//   },
//   {
//     name: "Lalgate Police Station",
//     address:
//       "Opp.Pratik Arcade, Pratap Press Gali, School Number 144. Bhagatalav, Surat",
//   },
//   {
//     name: "Limbayat Police Station",
//     address: "Near Marutinagar Char Rasta, Limbayat, Surat",
//   },
//   {
//     name: "Mahidharpura Police Station",
//     address: "Station Main Road.,Mahidharpura, Surat",
//   },
//   {
//     name: "Marin Police Station",
//     address: "Near Haziragam, Haziragam Main Road. Hazira, Surat",
//   },
//   {
//     name: "Pandesara Police Station",
//     address: "GIDC Main Rd, Pandesara GIDC, Surat",
//   },
//   {
//     name: "Punagam Police Station",
//     address: "Bombay Market-Punagam Rd, Near Puna Bus Stop, Punagam, Surat",
//   },
//   {
//     name: "Rander Police Station",
//     address:
//       "Tadwadi Police Chowky Building, Near Gomti Nagat, Causeway Road, Rander Surat",
//   },
//   {
//     name: "Sachin Police Station",
//     address: "Surat – Navsari Rd, Tirupati Nagar, Pardi Kande, Sachin, Surat",
//   },
//   {
//     name: "Sachin GIDC Police Station",
//     address: "Prohibition Office, Surat, Gujarat, India",
//   },
//   {
//     name: "Salabatpura Police Station",
//     address:
//       "Salabatpura Main Rd, Opposite Circle, Moti Begumwadi, Salabatpura, Surat",
//   },
//   {
//     name: "Sarthana Police Station",
//     address: "Vajra Chowk, Simada Road, Sarthana, Surat",
//   },
//   {
//     name: "Singanpor Police Station",
//     address: "Ved Rd, Near School No.188-Old Building, Singanpor Gam, Surat",
//   },
//   {
//     name: "Udhana Police Station",
//     address: "Rd No 1 MG Rd, Udhana GIDC, Udhna Udhyog Nagar, Udhna, Surat",
//   },
//   {
//     name: "Umra Police Station",
//     address: "Behind Police Parade Ground, Athwalines, Umra",
//   },
//   {
//     name: "Varachha Police Station",
//     address:
//       "Surat – Kamrej Hwy, Sadhna Society, Laxman Nagar, Varachha, Surat, Gujarat 395006",
//   },
// ];

const Incident = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
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
  const navigate = useNavigate();
  const insertIncident = async (data) => {
    try {
      const formData = new FormData();
      formData.append("category", data.category);
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
            <label className="form-label">
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
              <option value="Athva">Athva</option>
              <option value="Bhatar">Bhatar</option>
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
            <label className="form-check-label" htmlFor="flexCheckDefault">
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
          <IPCsection />
          {/* {selectedCrime && renderCrimeDetails()} */}
        </div>
      </div>
    </>
  );
};
export default Incident;
