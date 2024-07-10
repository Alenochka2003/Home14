import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const User = ({ name, status }) => (
  <div className="user-container">
    <h1>User Info</h1>
    <p>Name: {name}</p>
    <p>Status: {status}</p>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);