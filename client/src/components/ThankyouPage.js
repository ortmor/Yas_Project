/* eslint-disable */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ThankyouPage.scss"; // Import CSS file for component styling

const ThankyouPage = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const handleGoToWebsite = () => {
    window.location.href = "https://f1-in-schools-torque.invisionzone.com/";
  };

  return (
    <div className="main_thankyou">
      <div className="thankyou-container">
        <div className="thankyou_log">
        <img src="/ADNOC YiS Lockup_NEG.png" alt="Logo" className="thankyou_img" />
        </div>
        <div className="thankyou_heading">
        <h1>
          THANK YOU FOR 
          PARTICIPATING
        </h1>
        </div>
      <div className="thankyou_para">
      {state && state.message && <p>{state.message}</p>}
        <p className="thankyou_parachildone">
          You can continue again by simply scanning another QR code.
          <br />
        </p>
      
        <p className="thankyou_parachildone">
          To learn even more about ADNOC Yasin Schools or how to involved, visit
          our website:
        </p>
      </div>
      <div className="thankyou_footer">
      <button  onClick={handleGoToWebsite}>
         <h2> GO TO THE WEBSITE</h2>
        </button>
          </div>
    
      </div>
    </div>
  );
};

export default ThankyouPage;
