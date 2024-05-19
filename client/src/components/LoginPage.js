/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/RegistrationForm.scss';
import { useDispatch } from "react-redux";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import '../styles/RegistrationForm.scss';
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
        console.log(response.data, "response");
        if (!response.data.err) {
          if (response.data.login) {
            dispatch({
              type: "user",
              payload: {
                login: response.data.login,
                details: response.data.student,
              },
            });
            return navigate("/programs");
          } else {
            // alert(response.data.message)
            toast.message(response.data.message)
            console.log(response.data.message, "response.data.message");
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
    <div className="reg_fullpage">
    <div className='reg_secondmain'>
    <div className="reg_container" >
      <div className='register_log'>
          <img src="/ADNOC YiS Lockup_NEG.png" alt="Logo"  className="req_logimg"/>
        </div>

        <div className='req_heading'>
          <h2 style={{ color: "white" }}>LOG IN</h2>
        </div>
        {/* Apply inline style to change text color of <h2> to white */}
        <div className='feild_container'>
        <form>

        <div className="input_regcontainer">
            <div className="input_fieldchildone">
            <label htmlFor="email"></label>
            <input className='input_one' 
              type="email"
              id="email"
              placeholder="(EMAIL)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="button_reqcontainer">
          <button type="button" className="reg-button" onClick={handleLogin}>
           <h5>LOG IN
            </h5> 
          </button>
        </div>
        </form>
        </div>
        </div>
      </div>
      <ToastContainer/>

    </div>
  );
};

export default LoginPage;
