import React from 'react';
import { toast } from 'react-toastify';
import Form from '../Components/Form';
import {loginUser} from '../Utility/url';

const Login = () => {

  //Handle submitting a login form
  const handleSubmit = async (credentials) => {
    try {
      const response = await fetch(loginUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      console.log(await response.json());
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      const responseData = await response.json();
      document.cookie = `session_token=${responseData.session_token}; path=/;`;
      // const sessionToken = document.cookie.split('; ').find(row => row.startsWith('session_token=')).split('=')[1];
      // console.log(sessionToken);
      return responseData;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create user');
    }
  };

  // The parameters to be used for the login form
  const loginParams = {
    email: [true, 'email'],
    password: [true, 'text'],
  };

  return (
    <div className="login-container">
      <Form title='login' inputs={loginParams} actionSubmit={handleSubmit} />
      <a href='#'>Sign Up</a>
    </div>
  );
};

export default Login;
