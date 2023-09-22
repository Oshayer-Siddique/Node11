// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    axios.post('http://localhost:5000/api/save', formData)
      .then((response) => {
        console.log(response.data.message);
        console.log("OK")
        
        // Optionally, display a success message or reset the form here
      })
      .catch((error) => {
        console.error('Error saving information:', error);
        // Optionally, display an error message or handle errors here
      });
  };

  return (
    <div>
      <h1>Save Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
