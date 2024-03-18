import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PersonalData from "./Pages/personaldata";
import CheckStatus from "./Pages/checkstatus";
import Cybersafety from "./Pages/cybersafety";
import Lawyer from "./Pages/Lawyer";
import Cybercrime from "./Pages/cybercrime";
import Citizenmanual from "./Pages/citizenmanual";
import Gallery from "./Pages/gallery";
import Admin from "./Pages/Admin/Admin";
import Preview from "./Pages/preview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./ReduxStore/Userslice/Userslice";
import Incident from "./Pages/Incident";
import Suspect from "./Pages/Suspect";
import AdminLogin from "./Pages/adminlogin";
import UsersTable from "./Pages/Admin/registereduser";
import SuspectList from "./Pages/Admin/suspectlist";
import AddSuspect from "./Pages/Admin/addSuspect";
import UpdateSuspect from "./Pages/Admin/updateSuspect";
import ComplaintList from "./Pages/Admin/complaintlist";
import AddComplaint from "./Pages/Admin/addComplaint";
import UpdateComplaint from "./Pages/Admin/updateComplaint";
import EvidenceList from "./Pages/Admin/evidencelist";
import AddEvidence from "./Pages/Admin/addEvidence";
import UpdateEvidence from "./Pages/Admin/updateEvidence";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      {!user && <Navbar />}
      {user && !user.isAdmin && <Navbar />}
      <Routes>
        {!user && <Route path="/" element={<Home />}></Route>}
        {user && (
          <Route path="/" element={user.isAdmin ? <Admin /> : <Home />}></Route>
        )}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/CheckStatus" element={<CheckStatus />}></Route>
        <Route path="/PersonalData" element={<PersonalData />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/cybersafety" element={<Cybersafety />}></Route>
        <Route path="/lawyer" element={<Lawyer />}></Route>
        <Route path="/cybercrime" element={<Cybercrime />}></Route>
        <Route path="/citizenmanual" element={<Citizenmanual />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/preview" element={<Preview />}></Route>
        <Route path="/Incident" element={<Incident />}></Route>
        <Route path="/Suspect" element={<Suspect />}></Route>
        <Route path="/Adminlogin" element={<AdminLogin />}></Route>
        <Route path="/registereduser" element={<UsersTable />}></Route>
        <Route path="/suspectlist" element={<SuspectList />}></Route>
        <Route path="/addSuspect" element={<AddSuspect />}></Route>
        <Route path="/updateSuspect" element={<UpdateSuspect />}></Route>
        <Route path="/complaintlist" element={<ComplaintList />}></Route>
        <Route path="/addComplaint" element={<AddComplaint />}></Route>
        <Route path="/updateComplaint" element={<UpdateComplaint />}></Route>
        <Route path="/evidencelist" element={<EvidenceList />}></Route>
        <Route path="/addEvidence" element={<AddEvidence />}></Route>
        <Route path="/updateEvidence" element={<UpdateEvidence />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
