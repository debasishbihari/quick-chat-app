import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({socket}) => {
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const getFullname = () => {
    let fname =
      user?.firstname?.charAt(0).toUpperCase() +
      user?.firstname?.slice(1).toLowerCase();
    let lname =
      user?.lastname?.charAt(0).toUpperCase() +
      user?.lastname?.slice(1).toLowerCase();
    return fname + " " + lname;
  };

  const getInitials = () => {
    let f = user?.firstname?.toUpperCase()[0];
    let l = user?.lastname?.toUpperCase()[0];
    return f + l;
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    socket.emit('user-offline',user._id);
  };
  return (
    <div className="app-header">
      <div className="app-logo">
        <i className="fa fa-comments" aria-hidden="true"></i>
        Quick Chat
      </div>
      <div className="app-user-profile">
      {user?.profilePic && (
          <img
            src={user.profilePic}
            alt="profile-pic"
            className="logged-user-profile-pic"
            onClick={() => navigate("/profile")}
          />
        )}
        {!user?.profilePic && (
          <div
            className="logged-user-profile-pic"
            onClick={() => navigate("/profile")}
          >
            {getInitials()}
          </div>
        )}
        <div className="logged-user-name">{getFullname()}</div>
        <button className="logout-btn" onClick={logout}><i className="fa fa-power-off"></i></button>
      </div>
    </div>
  );
};

export default Header;
