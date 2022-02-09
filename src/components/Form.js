import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Form() {
  const navigate = useNavigate();
  return (
    <div className="form">
      <form onSubmit={() => navigate('/')}>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="6" placeholder="Type a short message here" />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
