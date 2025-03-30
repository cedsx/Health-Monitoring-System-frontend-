import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "assets/css/admin";

import * as images from "assets/images";
import { 
    FaTachometerAlt, 
    FaPills, 
    FaUserInjured, 
    FaPlus, 
    FaBullhorn, 
    FaUserPlus, 
    FaSignOutAlt 
} from "react-icons/fa";

export const AdminLayout = () => {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);


    const handleLogout = () => {
     
      console.log("Logging out...");

  };


    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <img src={images.logo} alt="Logo" className="logo" />
                </div>
                <ul className="sidebar-menu">
                <li className={activePath === "/admin/dashboard" ? "active-menu" : ""}>
                      <Link 
                          to="/admin/dashboard" 
                          className={`menu-link ${activePath === "/admin/dashboard" ? "active-link" : ""}`}
                      >
                          <FaTachometerAlt className="icon" /> Dashboard
                      </Link>
                  </li>
                  <li className={activePath === "/admin/medicine-inventory" ? "active-menu" : ""}>
                      <Link 
                          to="/admin/medicine-inventory" 
                          className={`menu-link ${activePath === "/admin/medicine-inventory" ? "active-link" : ""}`}
                      >
                          <FaPills className="icon" /> Medicine Inventory
                      </Link>
                  </li>
                  <li className={activePath === "/admin/patient-record" ? "active-menu" : ""}>
                      <Link 
                          to="/admin/patient-record" 
                          className={`menu-link ${activePath === "/admin/patient-record" ? "active-link" : ""}`}
                      >
                          <FaUserInjured className="icon" /> Patient Record
                      </Link>
                  </li>
                  <li className={activePath === "/admin/add-record" ? "active-menu" : ""}>
                      <Link 
                          to="/admin/add-record" 
                          className={`menu-link ${activePath === "/admin/add-record" ? "active-link" : ""}`}
                      >
                          <FaPlus className="icon" /> Add Record
                      </Link>
                  </li>
                  <li className={activePath === "/admin/announcement" ? "active-menu" : ""}>
                      <Link 
                          to="/admin/announcement" 
                          className={`menu-link ${activePath === "/admin/announcement" ? "active-link" : ""}`}
                      >
                          <FaBullhorn className="icon" /> Announcement
                      </Link>
                  </li>
                  <li className={activePath === "/admin/add-account" ? "active-menu" : ""}>
                      <Link 
                          to="/admin/add-account" 
                          className={`menu-link ${activePath === "/admin/add-account" ? "active-link" : ""}`}
                      >
                          <FaUserPlus className="icon" /> Add Account
                      </Link>
                  </li>
                  <li className={activePath === "/logout" ? "active-menu" : ""}>
                      <Link 
                          onClick={handleLogout}
                          className="menu-link"
                      >
                          <FaSignOutAlt className="icon" /> LOG OUT
                      </Link>
                  </li>
                </ul>
            </aside>
            <main className="main-content">
              <Outlet />
            </main>
        </div>
    );
}
