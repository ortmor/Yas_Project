/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WelcomePage.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  const handleRegister = () => {
    navigate("/registration");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const userData = user?.details?.email;
  const code = user?.details?.uniqueCode;
  const dispatch=useDispatch();

  const handleLogout = () => {
   

    axios.post("/logout",)
    .then((response) => {
      if (!response.data.err) {
        // Clear cookies
        clearCookies();
        
        dispatch({ type: "refresh" });
        navigate("/thank-you");
      }
    });
  
  function clearCookies() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
}
  return (
    <div className="full-page">
      <div className="welcome-container">
        <img
          src="/ADNOC YiS Lockup_NEG.png"
          alt="Logo"
          className="welcome-logo"
        />
        <div className="content">
          <h1 className="welcome-heading">WELCOME</h1>
          <h3 className="guide-heading">VISITOR GUIDE</h3>
          <h4 className="program-info">
            Learn more about our world-class
            Science, Technology, Engineering
            and Math (STEM) programs
          </h4>
          <div className="button-containerwelcome">
            {!user.login ? (
              <>
                <button className="wel-button" onClick={handleRegister}>
                  REGISTER
                </button>
                <button className="wel-button" onClick={handleLogin}>
                  LOGIN
                </button>
              </>
            ) :  <button className="wel-button" onClick={handleLogout}>
            LOGOUT
          </button>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
