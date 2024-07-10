import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';
import './App.css';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(name, status);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="form-input"
      />
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
        className="form-input"
      />
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);