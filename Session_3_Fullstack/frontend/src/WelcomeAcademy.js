import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WelcomeAcademy() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/welcome-academy-message/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Academy page</h1>
      <p>{message}</p>
    </div>
  );
}

export default WelcomeAcademy;