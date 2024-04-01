import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationForm from './RegistrationForm';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
//import Test from './Test';
import LoginPage from './LoginPage'; // Include this if you have a login page

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/registration" exact element={<RegistrationForm/>} />
          <Route path="/success" element={<SuccessPage/>} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/" exact element={<LoginPage/>} />

        </Routes>
      </div>
  );
}

export default App;
