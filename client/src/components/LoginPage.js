/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; 
import { useDispatch } from "react-redux";
import axios from "axios";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, seterr] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        const response = await axios.post("/login", { email });
        console.log(response.data,"response");
        if (!response.data.err) {
          if(response.data.login){

            dispatch({
              type: "user",
              payload: {
                login: response.data.login,
                details: response.data.student,
              },
            });
            return navigate("/programs");
          }else{
            // alert(response.data.message)
            console.log(response.data.message,"response.data.message");
          }

        } else {
          seterr(response.data.message);
          
        }
      } catch (error) {
        console.log(error);
        // alert("An error occurred during log in. Please try again.");
      }
    } else {
      seterr("All fields are required");
    }
  };

  return (
    <div className="full-page">
      <div className="login-container">
        <img
          src="/ADNOC YiS Lockup_NEG.png"
          alt="Logo"
          className="login-logo"
        />

        {/* Apply inline style to change text color of <h2> to white */}
        <h2 style={{ color: "white" }}>LOG IN</h2>

        <div className="input-field">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="(EMAIL)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="button" className="grey-button" onClick={handleLogin}>
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
