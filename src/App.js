import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes, Navigate } from 'react-router-dom';
import './style.scss';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>
        <div className="app">
          <ul className="nav-container hidden-for-pdf">
            <nav className="nav">
              <NavLink to={'/resume/about'} className="nav-btn">About</NavLink>
              <NavLink to={'/resume/projects'} className="nav-btn">Projects</NavLink>
            </nav>
          </ul>
          <Routes>
            <Route
              path="/resume/about"
              element={<About resumeObj={resume} />}
            />
            <Route
              path="/resume/projects"
              element={<Projects resumeObj={resume} />}
            />
            <Route
              path="/resume"
              element={<Navigate to="/resume/about" replace />}
            />
            <Route
              path="/"
              element={<Navigate to="/resume/about" replace />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;