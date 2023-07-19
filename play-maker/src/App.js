import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Styles
import './styles/App.css'

// Pages
import LandingPage from './components/LandingPage';
// import RegistrationPage from './components/RegistrationPage';
// import LoginPage from './components/LoginPage';
// import DashboardPage from './components/DashboardPage';
// import TeamManagementPage from './components/TeamManagementPage';
// import SchedulePage from './components/SchedulePage';
// import AdminPanelPage from './components/AdminPanelPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/team-management" element={<TeamManagementPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/admin-panel" element={<AdminPanelPage />} /> */}
      </Routes>
  </Router>
  )
}

export default App
