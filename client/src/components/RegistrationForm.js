/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/RegistrationForm.scss';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const location = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    }
  
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post('/signup', formData);
      if (!response.data.err) {
        navigate('/login',{state:location.state}); 
        toast.success('Registered successfully');
      } else {
        toast.error(response.data.message);
        console.log(response.data.message,"response.data.message");
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Email is allready registered'); 
    }
  };

  return (
    <div className="reg_fullpage">
      <div className='reg_secondmain'>
      <div className="reg_container" >
        <div className='register_log'>
        <img src="/ADNOC YiS Lockup_NEG.png" alt="Logo" className="req_logimg" />

        </div>
        <div className='req_heading'>
        <h2>REGISTRATION</h2>

        </div>
        <div className='feild_container'>
        <form onSubmit={handleSubmit}>
          <div className="input_regcontainer">
            <div className="input_fieldchildone">
              <label htmlFor="name" ></label>
              <input className='input_one'
                type="text"
                id="name"
                name="name"
                placeholder='(NAME)' 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <div className="alert">{errors.name}</div>}
            </div>
            <div className="input_fieldchildtwo">
              <label htmlFor="email"></label>
              <input className='input_one'
                type="email"
                id="email"
                name="email"
                placeholder='(EMAIL)'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <div className="alert">{errors.email}</div>}
            </div>
          </div>
          <div className="button_reqcontainer">
            <button type="submit" className="reg-button">
              <h5>REGISTER</h5>
            </button>
          </div>
        </form>
       
        </div>
      
      </div>
      </div>
     
   
      <ToastContainer />
    </div>
  );
  
};

export default RegistrationForm;
