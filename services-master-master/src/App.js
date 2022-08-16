
import './App.css';
import React from 'react';
import CustomisedDialog from './Dialog.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CustomerDashboard from './customerDashboard.js'
import Sidebar from './Components/SideBar';

function App() {
  return (
    <div className="grid grid-cols-12 gap-4">

  <div className="col-span-1"> 
    <Sidebar />
    </div>
    <div className="col-span-11">
    <Routes>
      <Route path="/customer_dash" element={<CustomerDashboard />} ></Route>
      <Route path="/service_details" element={<CustomisedDialog />}></Route>
    </Routes>
    </div>

  </div>
  );
}

export default App;
