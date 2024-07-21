import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinkPage from './LinkPage';
import { AuthProvider } from './User/AuthContext/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <LinkPage />
      </AuthProvider>
    </Router>
  );
};

export default App;
