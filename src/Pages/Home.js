import React, { useEffect } from 'react';
import {createUserUrl} from '../Utility/url';


const Home = () => {
  useEffect (async() => {
    try {
      const response = await fetch(createUserUrl, {
        method: 'GET',
      });
      console.log(response);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create user');
    }
  }, [])

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
