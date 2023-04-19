import React from 'react';
import { toast } from 'react-toastify';
import Form from '../Components/Form';

const Register = () => {

  //Handle submitting a Register form
  const handleSubmit = (formInputs) => {
    console.log(formInputs);
    //check that expected varibale exist and are in valid structure 
    // check that confirm password and password are identical
    // submit to backend for validation
    // handle response from backend
    // use toast for notification and redirect user to login by inputting code sent to email
  };

  // The parameters to be used for the Register form
  // isRequiredField, 
  const RegisterParams = {
    email: [true, 'email'],
    password: [true, ''],
    confirm_password: [true, ''],
    first_name: [true, ''],
    last_name: [true, ''],
    middle_name: [false, ''],
  };

  return (
    <div className="Register-container">
      <Form title='Register' inputs={RegisterParams} actionSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
