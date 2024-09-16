import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserShield, faKey ,faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL 
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleChange=(e)=>{
    setErrorMessage('')
    if(e.target.id==="password") {
      setPassword(e.target.value)
    }else if(e.target.id==='admin'){
      setAdminId(e.target.value)
    }
  }
 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    navigate("/dash-board") 
    // try {
        
    //     const response = await axios.post(`${baseUrl}/admin`, {
    //       adminId,
    //       password,
    //     });
    //       // console.log(response)
    //     if (response.data.adminLoggedIn) {
    //       localStorage.setItem("adminToken",response.data.token)
    //       localStorage.setItem("id",response.data.id)
    //       setErrorMessage("")
    //       navigate("/dash-board")

    //     } else {
          
    //       setErrorMessage('Invalid adminId or password.');
    //     }
    //   } catch (error) {
       
    //     setErrorMessage('An error occurred. Please try again later.');
    //   }
   
  };

  return (
    <div className="login-container">
    <div id="login" >
      <img src="../../logo.png" alt="IvaAttire Logo" className="logo" width="100px" /> {/* Add logo image URL */}
      <h1>IvaAttire Admin Login</h1>
      <form name="form-login" onSubmit={handleSubmit}>
       
        <span> <FontAwesomeIcon icon={faUserShield} /></span>
        <input
          type="text"
          id="admin"
          placeholder="Admin ID"
          value={adminId}
          onChange={handleChange}
          required
        />
        <div className='password-container'>
        <span><FontAwesomeIcon icon={faKey} /></span>
        <input
           type={passwordVisible ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
           <button
        type="button"
        onClick={togglePasswordVisibility}
        className="password-toggle-button"
      >
        <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
      </button>
      </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>} 

        <input type="submit" value="Login" />
      </form>
    </div>
    </div>
  );
};

export default Login;
