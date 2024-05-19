/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WelcomePage.scss";
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
    <div className="welcome_main">
      <div className="welcome_maincontainer">
        <div className="welcome_logo">
        <img
          src="/ADNOC YiS Lockup_NEG.png"
          alt="Logo"
          className="welcome_logoone"
          
        />
        </div>
        <div className="content_container">
          <div className="content_containerchildone">
               <h1>WELCOME</h1>
          </div>
          <div className="content_containerchildtwo">
          <h2>VISITOR GUIDE</h2>
          </div>
          <div className="content_containerthree">
            <p>
            Learn more about our world-class
            Science, Technology, Engineering
            and Math (STEM) programs
            </p>
          </div>
        
        </div>
        <div className="footer_button">
         
          <div className="footer_buttonone">
            {!user.login ? (
              <>
                <button  onClick={handleRegister}>
                  <h5>REGISTER</h5>
                </button>
                <button  onClick={handleLogin}>
                 <h5>LOGIN</h5> 
                </button>
              </>
            ) :  <button  onClick={handleLogout}>
            LOGOUT
          </button>}

          </div>
        </div>
        <div className="welcome_space">

        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
