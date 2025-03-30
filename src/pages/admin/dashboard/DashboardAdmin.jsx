import React, { useState, useEffect } from "react";
import "assets/css/admin";
import myImage from "../../../assets/images/myLogo.png";
import { 
  FaTachometerAlt, 
  FaPills, 
  FaUserInjured, 
  FaPlus, 
  FaBullhorn, 
  FaUserPlus, 
  FaSignOutAlt 
} from "react-icons/fa";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

export const DashboardAdmin = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Bar Chart Data for Health Conditions
  const chartData = [
    { name: "PWD", Female: 40, Male: 20 },
    { name: "Diabetes", Female: 30, Male: 15 },
    { name: "Hypertension", Female: 50, Male: 25 },
    { name: "Senior", Female: 45, Male: 30 },
    { name: "Malnutrition", Female: 60, Male: 35 },
    { name: "Pregnant", Female: 40, Male: 0 },
  ];

  // Pie Chart Data for No. of Patients
  const genderData = [
    { name: "Female", value: 265 },
    { name: "Male", value: 125 },
  ];
  
  const COLORS = ["#9CC0D8", "#6E9FC0"];

  // Medicine Categories
  const categories = ["All", "Antibiotics", "Pain Relievers", "Vitamins", "Antifungal", "Diabetes", "Hypertension", ];

  // Medicine Chart Data
  const medicineData = {
    "All": [
      { name: "Antibiotics", stock: 50 },
      { name: "Pain Relievers", stock: 30 },
      { name: "Vitamins", stock: 40 },
      { name: "Antifungal", stock: 20 },
      { name: "Diabetes", stock: 35 },
      { name: "Hypertension", stock: 40 },
    ],
    "Antibiotics": [{ name: "Amoxicillin", stock: 20 }, 
                    { name: "Ciprofloxacin", stock: 30 }],
    "Pain Relievers": [{ name: "Paracetamol", stock: 15 }, 
                       { name: "Ibuprofen", stock: 15 }],
    "Vitamins": [{ name: "Vitamin C", stock: 25 }, 
                 { name: "Vitamin D", stock: 15 }],
    "Antifungal": [{ name: "Clotrimazole", stock: 10 },
                   { name: "Fluconazole", stock: 10 } ],
    "Diabetes": [{ name: "Metformin", stock: 20 },
                  { name: "Glimepiride", stock: 15 }],
    "Hypertension": [{ name: "Losartan", stock: 25 },
                    { name: "Amlodipine", stock: 15 }]
  };

   // Near-to-Expired Medicines Data
  const nearExpired = [
    { name: "Amoxicillin", stock: 10, expiryDate: "2025-04-15" },
    { name: "Paracetamol", stock: 15, expiryDate: "2025-05-10" },
    { name: "Metformin", stock: 8, expiryDate: "2025-06-05" },
    { name: "Losartan", stock: 12, expiryDate: "2025-07-20" }
  ];


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={myImage} alt="Logo" className="logo" />
        </div>
        <ul className="sidebar-menu">
          <li className="active-menu">
            <FaTachometerAlt className="icon" /> Dashboard
          </li>
          <li><FaPills className="icon" /> Medicine Inventory</li>
          <li><FaUserInjured className="icon" /> Patient Record</li>
          <li><FaPlus className="icon" /> Add Record</li>
          <li><FaBullhorn className="icon" /> Announcement</li>
          <li><FaUserPlus className="icon" /> Add Account</li>
          <li><FaSignOutAlt className="icon" /> LOG OUT</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Dashboard</h1>

        {/* Welcome Box with Time & Date */}
        <div className="welcome-box">
          <h2>Welcome, <span> Admin </span> </h2>
          <div className="time-box">
            <h1>{currentTime.toLocaleTimeString()}</h1>
            <h3>{currentTime.toLocaleDateString()}</h3>
          </div>
        </div>

        <div className="chart-box-pie">
        <h2 className="chart-title-pie">No. of Patients</h2>
        <div className="chart-container-pie">
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                fill="#6E9FC0"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px", color: "#6E9FC0" , marginTop: 30}} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

        {/* Bar Chart - Health Conditions Report */}
        <div className="chart-box">
          <h2 style={{ fontSize: "20px" }}>Health Conditions Report</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip contentStyle={{ fontSize: "14px" }} />
              <Legend wrapperStyle={{ fontSize: "14px" }} />
              <Bar dataKey="Female" fill="#92B7CF" />
              <Bar dataKey="Male" fill="#6E9FC0" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Medicine Chart Section */}
        <div className="chart-box-medicine">
          <h2>Medicine Stock Report</h2>
          <select
            className="dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={medicineData[selectedCategory]} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip contentStyle={{ fontSize: "14px" }} />
              <Legend wrapperStyle={{ fontSize: "14px" }} />
              <Bar dataKey="stock" fill="#6E9FC0" />
            </BarChart>
          </ResponsiveContainer>
        </div>


          {/* Near-to-Expired Medicines List */}
        <div className="list-box-expired">
          <h2>Near-to-Expired Medicines</h2>
          {nearExpired.length > 0 ? (
            <ul className="medicine-list">
              {nearExpired.map((med, index) => (
                <li key={index} className="medicine-item">
                  {med.name} - <strong>{med.stock}</strong> units (Exp: {med.expiryDate})
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ textAlign: "center", fontSize: "16px", color: "gray" }}>Near-to-expire Medicines</p>
          )}
        </div>
        
      </main>
    </div>
  );
};

// dito inalis ko yung export defaulr DashboardAdmin kasi diba pinaghamit ko sayo is BARREL FORMATTING like having a index.jsx in a folder so if using a import in anywhere in the APP is not do specific in  like adding the file but folder only to be called
