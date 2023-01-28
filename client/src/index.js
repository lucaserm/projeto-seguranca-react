import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './styles/global-styles.css';

import Navbar from './components/Navbar/index';
import { Home } from './templates/Home';
import { Login } from './templates/Login';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Index } from './templates/Index';
import { Estudante } from './templates/Estudante';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 my-3">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="login" exact element={<Login />} />
                <Route
                  path="index"
                  exact
                  element={
                    <RequireAuth>
                      <Index />
                    </RequireAuth>
                  }
                />
                <Route
                  path="index/estudante"
                  exact
                  element={
                    <RequireAuth>
                      <Estudante />
                    </RequireAuth>
                  }
                />
              </Routes>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
);
