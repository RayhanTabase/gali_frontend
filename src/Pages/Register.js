import React from 'react';
import { toast } from 'react-toastify';
import Form from '../Components/Form';
import {createUserUrl} from '../Utility/url';

const Register = () => {

  //Handle submitting a Register form
  const handleSubmit = async (user) => {
    console.log(JSON.stringify(user));
    try {
      const response = await fetch(createUserUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      console.log(response);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create user');
    }
  };

  // The parameters to be used for the Register form
  // isRequiredField, 
  const RegisterParams = {
    email: [true, 'email'],
    password: [true, ''],
    password_confirmation: [true, ''],
    first_name: [true, ''],
    last_name: [true, ''],
    other_names: [false, ''],
    profile_picture: [false, 'file']
  };

  return (
    <div className="Register-container">
      <Form title='Register' inputs={RegisterParams} actionSubmit={handleSubmit} />
      <a href='#'>Login</a>
    </div>
  );
};

export default Register;
