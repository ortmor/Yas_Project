/* eslint-disable */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ThankyouPage.css"; // Import CSS file for component styling

const ThankyouPage = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const handleGoToWebsite = () => {
    window.location.href = "https://f1-in-schools-torque.invisionzone.com/";
  };

  return (
    <div className="main-thankyou">
 <div className="thankyou-container">
      <img src="/ADNOC YiS Lockup_NEG.png" alt="Logo" className="logo" />
      <h1>
        THANK YOU FOR <br />
        PARTICIPATING
      </h1>
      {state && state.message && <p>{state.message}</p>}
      <p>
        You can continue again by <br />
        simply scanning another <br />
        QR code.
        <br />
      </p>
      <p>
        To learn even more about <br />
        ADNOC Yasin Schools or how to <br />
        involved, visit our website: <br />
      </p>
      <button className="black-button" onClick={handleGoToWebsite}>
        GO TO THE WEBSITE
      </button>
    </div>
    </div>
   
  );
};

export default ThankyouPage;
