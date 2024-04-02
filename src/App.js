import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationForm from './RegistrationForm';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import FrontPage from './FrontPage'
import LoginPage from './LoginPage';
import StartPage from './StartPage';
import UserLogin from './UserLogin';
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/registration" exact element={<RegistrationForm/>} />
          <Route path="/success" element={<SuccessPage/>} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/admin-login" exact element={<LoginPage/>} />
          <Route path="/frontpage" element={<FrontPage/>} />
          <Route path="/" element={<StartPage/>} />
          <Route path="/user-login" exact element={<UserLogin/>} />

        </Routes>
      </div>
  );
}

export default App;
