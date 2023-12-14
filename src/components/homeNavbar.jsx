import React, { useState } from "react";
import ProfileDropdown from "./profileDropdown";
import NotificationDropdown from "./notificationDropdown";

const Dropdown = () => {
  const [isNotifActive, setNotifActive] = useState(false);
  const [isProfileActive, setProfileActive] = useState(false);

  const handleNotification = (event) => {
    event.preventDefault();
    setNotifActive(!isNotifActive);
    setProfileActive(false);
  };

  const handleProfile = (event) => {
    event.preventDefault();
    setProfileActive(!isProfileActive);
    setNotifActive(false);
  };

  return (
    <nav className="navbar">
      <div className="search">
        <img src="./icons/Search.png" alt="" />
        <input type="text" placeholder="Search" />
      </div>

      <a className="notifBtn" href="#notification" onClick={handleNotification}>
        <i className="fa-regular fa-bell"></i>
        {isNotifActive && <NotificationDropdown />}
      </a>

      <a className="profileBtn" href="#profile" onClick={handleProfile}>
        <img src="./icons/user.png" alt="" />
        {isProfileActive && <ProfileDropdown />}
      </a>
    </nav>
  );
};

export default Dropdown;
