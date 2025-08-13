import React from "react";
import "./ProfileBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/image.png";

const ProfileBar = () => {
  return (
    <div className="profile-bar">
      <div className="chat-toggle">
        <FontAwesomeIcon icon={faRobot} style={{ marginRight: "8px" }} />
        Chatbot
      </div>
      <img
        src={Image}
        alt="Profile"
        className="profile-pic"
      />
    </div>
  );
};

export default ProfileBar;
