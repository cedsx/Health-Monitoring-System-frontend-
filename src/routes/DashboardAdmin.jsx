import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardAdmin } from "../pages/admin/dashboard/DashboardAdmin";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;