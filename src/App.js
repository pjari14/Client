import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
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
import Sidebar from "./Components/sidebar";

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
      {user && user.isAdmin && <Sidebar />}
      <Routes>
        {!user && <Route path="/" element={<Home />}></Route>}
        {user && (
          <Route path="/" element={user.isAdmin ? <Admin /> : <Home />}></Route>
        )}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/CheckStatus" element={user && <CheckStatus />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/cybersafety" element={<Cybersafety />}></Route>
        <Route path="/lawyer" element={<Lawyer />}></Route>
        <Route path="/cybercrime" element={<Cybercrime />}></Route>
        <Route path="/citizenmanual" element={<Citizenmanual />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/preview" element={user && <Preview />}></Route>
        <Route path="/Incident" element={user && <Incident />}></Route>
        <Route path="/Suspect" element={user && <Suspect />}></Route>
        <Route
          path="/registereduser"
          element={user && user.isAdmin ? <UsersTable /> : <Home />}
        ></Route>
        <Route
          path="/suspectlist"
          element={user && user.isAdmin ? <SuspectList /> : <Home />}
        ></Route>
        {/* <Route
          path="/suspectlist"
          element= {<SuspectList />}>
          </Route> */}
        <Route
          path="/addSuspect"
          element={user && user.isAdmin ? <AddSuspect /> : <Home />}
        ></Route>
        <Route
          path="/updateSuspect"
          element={user && user.isAdmin ? <UpdateSuspect /> : <Home />}
        ></Route>
        <Route
          path="/complaintlist"
          element={user && user.isAdmin ? <ComplaintList /> : <Home />}
        ></Route>
        <Route
          path="/addComplaint"
          element={user && user.isAdmin ? <AddComplaint /> : <Home />}
        ></Route>
        <Route
          path="/updateComplaint"
          element={user && user.isAdmin ? <UpdateComplaint /> : <Home />}
        ></Route>
        <Route
          path="/evidencelist"
          element={user && user.isAdmin ? <EvidenceList /> : <Home />}
        ></Route>
        <Route
          path="/addEvidence"
          element={user && user.isAdmin ? <AddEvidence /> : <Home />}
        ></Route>
        <Route
          path="/updateEvidence"
          element={user && user.isAdmin ? <UpdateEvidence /> : <Home />}
        ></Route>
      </Routes>
      {!user && <Footer />}
      {user && !user.isAdmin && <Footer />}
    </div>
  );
}

export default App;
