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
import { useDispatch } from "react-redux";
import { fetchUser } from "./ReduxStore/Userslice/Userslice";
import Incident from "./Pages/Incident";
import Suspect from "./Pages/Suspect";
import AdminLogin from "./Pages/adminlogin";
import UsersTable from "./Pages/Admin/registereduser";
import CriminalList from "./Pages/Admin/criminallist";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
        <Route path="/Adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/registereduser" element={<UsersTable/>}></Route>
        <Route path="/criminallist" element={<CriminalList />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
