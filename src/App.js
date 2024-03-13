import { useState , useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Insurance from "./Components/Insurance";
import Bank from "./Components/Bank";
import Lending from "./Components/LendingCriteria";
import Loan from "./Components/LoanApplication";
import Profile from "./Components/Profile";
import Navigation from "./Components/Navigation";
import Insurancepage from "./Components/Insurancepage";
import Claim from "./Components/Claim";
import JsonData from "./data/data.json";
import Insuranceprofile from"./Components/profineinsurance";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
   

    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route  path="/" element={<Header data={landingPageData.Header}/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/insurance" element={<Insurance/>} />
        <Route  path="/bank" element={<Bank/>} />
        <Route  path="/lending" element={<Lending/>} />
        <Route  path="/loan" element={<Loan/>} />
        <Route  path="/profile" element={<Profile/>} />
        <Route  path="/insurancepage" element={<Insurancepage/>}/>
        <Route  path="/claim" element={<Claim/>}/>  
        <Route  path="/insuranceprofile" element={<Insuranceprofile/>}/>  
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;