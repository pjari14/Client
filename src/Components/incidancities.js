import React, { useState } from "react";

const IndiaCities = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const states = [
    {
      name: "Andhra Pradesh",
      cities: ["Hyderabad", "Visakhapatnam", "Vijayawada"],
    },
    { name: "Arunachal Pradesh", cities: ["Itanagar", "Ziro", "Pasighat"] },
    { name: "Assam", cities: ["Dispur", "Guwahati", "Jorhat"] },
    { name: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur"] },
    { name: "Chhattisgarh", cities: ["Raipur", "Bilaspur", "Durg"] },
    { name: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama"] },
    { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara"] },
    { name: "Haryana", cities: ["Chandigarh", "Gurgaon", "Faridabad"] },
    { name: "Himachal Pradesh", cities: ["Shimla", "Dharamshala", "Mandi"] },
    { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad"] },
    { name: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli"] },
    { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode"] },
    { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Gwalior"] },
    { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
    { name: "Manipur", cities: ["Imphal", "Bishnupur", "Chandel"] },
    { name: "Meghalaya", cities: ["Shillong", "Tura", "Nongpoh"] },
    { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Champhai"] },
    { name: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung"] },
    { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Puri"] },
    { name: "Punjab", cities: ["Chandigarh", "Amritsar", "Ludhiana"] },
    { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota"] },
    { name: "Sikkim", cities: ["Gangtok", "Pelling", "Rumtek"] },
    { name: "Tamil Nadu", cities: ["Chennai", "Madurai", "Coimbatore"] },
    { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad"] },
    { name: "Tripura", cities: ["Agartala", "Dharmanagar", "Kailashahar"] },
    { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Agra"] },
    { name: "Uttarakhand", cities: ["Dehradun", "Mussoorie", "Nainital"] },
    { name: "West Bengal", cities: ["Kolkata", "Siliguri", "Durgapur"] },
    {
      name: "Andaman and Nicobar Islands",
      cities: ["Port Blair", "Havelock", "Neil Island"],
    },
    { name: "Chandigarh", cities: ["Chandigarh"] },
    {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      cities: ["Daman", "Silvassa"],
    },
    { name: "Delhi", cities: ["Delhi"] },
    { name: "Lakshadweep", cities: ["Kavaratti", "Minicoy", "Agatti"] },
    { name: "Puducherry", cities: ["Puducherry"] },
  ];

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    const selectedStateObj = states.find(
      (state) => state.name === e.target.value
    );
    setCities(selectedStateObj.cities);
  };

  return (
    <>
      <div class="col-md-6">
        <label htmlFor="state">Select a state</label>
      </div>
      <div class="col-md-6">
        <select
          className="form-control"
          id="state"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="Select" defaultValue={"NA"}>
            Select
          </option>
          {states.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div class="col-md-6">
        <label htmlFor="city">Select a city in {selectedState}</label>
      </div>
      <div class="col-md-6">
        <select className="form-control" id="city">
          {cities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default IndiaCities;
