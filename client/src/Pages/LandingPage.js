import React, { useEffect, useState } from 'react'
import { Route, useHistory, withRouter } from 'react-router-dom';
import Axios from 'axios';
import '../css/LandingPage.css';
import logo1 from '../images/logo1.png'
import { Link } from 'react-router-dom'
import { IoPerson } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'

function Landingpage() {

  //register
  const [student_numberReg, setStudent_numberReg] = useState("");
  const [fullnameReg, setFullNameReg] = useState("");
  const [genderReg, setGenderReg] = useState("");
  const [addressReg, setAddressReg] = useState("");
  // const [selectedDOB, setSelectedDOB] = useState(null);
  const [contactnoReg, setContactNoReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [collegeReg, setCollegeReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [cnpasswordReg, setCnPasswordReg] = useState("");

  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      student_number: student_numberReg,
      fullname: fullnameReg,
      student_gender: genderReg,
      address: addressReg,
      contact_no: contactnoReg,
      email: emailReg,
      college: collegeReg,
      password: passwordReg,
    }).then((response) => {
      history.push('/');
      console.log(response);

    })
  };

  Axios.defaults.withCredentials = true;
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {

        if(response.data[0].role == "student"){
          history.push("/main");
        }else if(response.data[0].role == "guidance associate"){
          history.push("/Mainhome");
          // setLoginStatus(response.data[0].email);
        }
        
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.students[0].email)
      }

    })
  }, [])

  return (
    <div>
      <div className="login-logo-container">
        <img className="login-logo" src={logo1} />
      </div>
      <div className="login-container">
        <div className="login-holder"></div>
        <div className="login-contents">
          <div className="login-form">

            <h1>Login</h1>
            <div className="email-login">
              <label>
                <span className="login-icon"><IoPerson size='2em' /></span>
              </label>
              <input type="text"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="password-login">
              <label >
                <span className="login-password-icon"><FaLock size='2em' /></span>
                <input type="password"
                  placeholder="Password"
                  onChange={(e) => { setPassword(e.target.value) }} />
              </label>
            </div>
          </div>

          <div className="forgot-password">
            <Link to="/forgotpassword">
              <div id="forgotpassword">Forgot Password? Click Here</div>
            </Link>
          </div>
          <div className="status">
            <h1>{loginStatus}</h1>
          </div>
          <div className="login-btn">
            <button style={{ backgroundColor: '#000336', border: '#000336', color: 'white' }}
              onClick={login}>Sign In</button>
          </div>
          <div className="signup-link">
            <Link to="/register">
              <div id="register-link">Doesn't have an Account? SignUp</div>
            </Link>
          </div>

        </div>
      </div>
    </div>

  )
}
export default Landingpage
