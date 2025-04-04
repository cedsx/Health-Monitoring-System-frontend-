import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingPage } from "pages/landing/LandingPage";

// layouts
import { AdminLayout} from "layouts/main_layouts";

// admin imports
import { DashboardAdmin} from "pages/admin/dashboard";
import { InventoryAdmin} from "pages/admin/inventory";

// another user (EX: customer)

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route path="/admin/" element={<AdminLayout/>}>
          <Route path="dashboard" element={ <DashboardAdmin/> }/>
          <Route path="inventory" element={ <InventoryAdmin/> }/>
           
        </Route>

      </Routes>
    </Router>
  );
};

export default MainRoutes;
























  {/* 
            <Route path="notification" element={ <NotificationAdmin/> }/> 
            eto sample lang ganto ang gawin mo sa susunod na page if sa admin kung sa ibang user naman like
            customer for EXAMPLE is  gagawa ka nang katulad netonf admin na nesting (pede mo to delete yung comment)
          */}