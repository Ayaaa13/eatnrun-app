import React from "react";

const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown">
      <div className="userImageName">
        <img src="images/userpic.png" alt="" />
        <p className="name">Monkey D. Luffy</p>
      </div>

      <hr />

      <div className="dropdown-content">
        <div className="button myProfile">
          <i className="fa-regular fa-user"></i>
          <a href="#profile" className="myProfileText">
            My profile
          </a>
        </div>

        <div className="button myFavorite">
          <i className="fa-regular fa-heart"></i>
          <a href="#fave" className="myFavoriteText">
            My favorite
          </a>
        </div>

        <div className="button settings">
          <i className="fa-solid fa-gear"></i>
          <a href="#settings" className="settingsText">
            Settings
          </a>
        </div>

        <div className="button logoutBtn">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <a href="#logout" className="logoutText">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
