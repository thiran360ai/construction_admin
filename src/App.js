import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CustomCard from "./components/CustomCard";
import LoginPage from "./LoginPage";
import DataPage from "./components/DataPage";
import ImageViewPage from "./components/ImageViewPage";
import CreateDataPage from "./components/CreateDataPage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set sidebar to open by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="main-container">
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              <div className="content">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div className="card-container">
                        <CustomCard
                          title="ProjectList"
                          content="Content for ProjectList"
                          apiEndpoint="https://1a15-103-175-108-154.ngrok-free.app/building/projectlist/"
                          onCreateData={() => {}}
                        />
                        <CustomCard
                          title="Plan_Details"
                          content="Content for Plan_Details"
                          apiEndpoint="https://1a15-103-175-108-154.ngrok-free.app/building/plan_details/"
                          onCreatePlan={() => {}}
                        />
                        <CustomCard
                          title="Create_user"
                          content="Content for Create_user"
                          apiEndpoint="https://1a15-103-175-108-154.ngrok-free.app/building/create_user/"
                        />
                      </div>
                    }
                  />
                  <Route path="/data" element={<DataPage />} />
                  <Route path="/view" element={<ImageViewPage />} />
                  <Route path="/create" element={<CreateDataPage />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </Router>
  );
};

export default App;
