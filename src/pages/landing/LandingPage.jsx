import React, { useState } from "react";
import "../../assets/css/landing/LandingPage.css";
import "../../assets/css/login/LoginModal.css";
import myImage from "../../assets/images/myLogo.png";
import landingImage from "../../assets/images/Landing.png";
import userImage from "../../assets/images/username-icon.svg";
import passwordIcon from "../../assets/images/password-icon.svg";


export const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="LandingPage">
      {/* Header Section */}
      <header>
        <img src={myImage} alt="My Image" />
        <nav>
          <span>About Us</span>
          <span>Contact</span> 
          <button onClick={() => setIsModalOpen(true)} className="LandingPage__login-btn">
            Log In
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <div className="LandingPage__left-container">
          <h1>RHU III Health Monitoring & Medicine Inventory System</h1>
          <h2>Ensuring Accessible and Efficient Healthcare Services</h2>
          <p>
            Welcome to the RHU III Health Monitoring & Medicine Inventory System, a
            digital solution designed to improve patient record management, 
            medicine tracking, and health data analysis for better healthcare 
            services in San Ildefonso, Bulacan.
          </p>
        </div>

        {/* Right Content */}
        <div className="LandingPage__right-container">
          <img className="LandingPage__landingImage" src={landingImage} alt="Landing Image" />
        </div>
      </main>

     
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 className="modal-title">Log In</h2>
              <p className="modal-subtitle">Sign in to your Account</p>

              <div className="input-group">
                <img src={userImage} alt="username-icon" className="input-icon" />
                <input type="text" placeholder="Username" required />
              </div>

              <div className="input-group">
                <img src={passwordIcon} alt="password-icon" className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>

              <button className="login-button">Log In</button>
              <a href="#" className="forgot-password">Forgot Password?</a>

              <button className="close-button" onClick={() => setIsModalOpen(false)}>✖</button>
            </div>
          </div>
        )}
    </div>

  );

};