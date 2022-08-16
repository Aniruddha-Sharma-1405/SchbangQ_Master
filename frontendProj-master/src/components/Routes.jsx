import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReqProj from "./ProjectPages/requestProj";
import CompletedProj from "./ProjectPages/completedProj";
import OngoingProj from "./ProjectPages/ongoingProj";
import UpComingProj from "./ProjectPages/upComingProj";
import ProjectsPage from "./ProjectPages/ProjectsPage";
import SuperAdmin from "./MainPages/SuperAdmin";
import Employee from "./MainPages/Employee";
import Admin from "./MainPages/Admin";
import Service from "./MainPages/serviceDetails";
import Dialog from "./MainPages/Dialog";
// import Clogin from "./MainPages/ClientL";
// import Elogin from "./MainPages/ClientL";
// import CSignup from "./MainPages/ClientL";
// import ESignup from "./MainPages/ClientL";
// import CustomerDashboard from './MainPages/customerDashboard';

const AllRoutes = () => {
        return(

                <Routes>
                        <Route path="/Request" element={<ReqProj />} />
                        <Route path="/Completed" element={<CompletedProj />} />
                        <Route path="/Ongoing" element={<OngoingProj />} />
                        <Route path="/Upcoming" element={<UpComingProj />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/superadmin" element={<SuperAdmin userName="Jeffrey Richard" />} />
                        <Route path="/employee" element={<Admin />} />
                        <Route path="/home" element={<Employee />} />
                        <Route path="/dialog" element={<Dialog/>}/>
                        <Route path="/service_details" element={<Service/>}/>
                        {/* <Route path="/ClientL" element={<Clogin/>}/>
                        <Route path="/EntL" element={<Elogin/>}/>
                        <Route path="/ClientSignUp" element={<CSignup/>}/>
                        <Route path="/EntSignUp" element={<ESignup/>}/>
                        <Route path="/Client" element={<CustomerDashboard/>}/> */}
                </Routes>
                )
}
export default AllRoutes;