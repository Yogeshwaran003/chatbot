import React, { useState } from "react";
import "./ProfileBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/image.png";

const ProfileBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
    setIsDropdownOpen(false); // Close dropdown after click
  };

  return (
    <div className="profile-bar">
      <div className="chat-toggle">
        <FontAwesomeIcon icon={faRobot} style={{ marginRight: "8px" }} />
        Chatbot
      </div>

      <div className="profile-container">
        <img
          src={Image}
          alt="Profile"
          className="profile-pic"
          onClick={toggleDropdown}
        />

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div
              className="dropdown-item"
              onClick={() => handleOptionClick("Profile")}
            >
              Profile
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleOptionClick("History")}
            >
              History
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileBar;
