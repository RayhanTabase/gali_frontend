import React from 'react';
import { toast } from 'react-toastify';
import Form from '../Components/Form';

const Login = () => {

  //Handle submitting a login form
  const handleSubmit = (formInputs) => {
    console.log(formInputs);
    //check that expected varibale exist and are in valid structure 
    // check that confirm password and password are identical
    // submit to backend for validation
    // handle response from backend
    // if user exists user is logged in
    // if there is a return url , user is redirected there
    // anything else show error and keep user on login page
    // if user tries logging in multiple times (10) and fails to an existing email, block login access for 15 minutes and send email notification to user
  };

  // The parameters to be used for the login form
  const loginParams = {
    email: [true, 'email'],
    password: [true, 'text'],
  };

  return (
    <div className="login-container">
      <Form title='login' inputs={loginParams} actionSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
