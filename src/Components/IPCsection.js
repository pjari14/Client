import React, { useState } from "react";
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

const IPCsection = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);

  const handleCrimeChange = (e) => {
    setSelectedCrime(e.target.value);
  };

  const renderCrimeDetails = () => {
    const CrimeDetailComponent = crimeDetails[selectedCrime].component;
    return CrimeDetailComponent ? <CrimeDetailComponent /> : null;
  };
  return (
    <>
      <div class="col-md-6">
        <label class="form-label">Select Crime Type:</label>

        <select
          class="form-select"
          id="ctype"
          name="crimeType"
          value={selectedCrime}
          onChange={handleCrimeChange}
        >
          <option value="">Select a crime type</option>
          {crimeTypes.map((crime) => (
            <option key={crime.id} value={crime.id}>
              {crime.label}
            </option>
          ))}
        </select>
        {selectedCrime && renderCrimeDetails()}
      </div>
    </>
  );
};
export default IPCsection;
