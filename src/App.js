import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import './style.scss';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>
        <div className="app">
          <ul className="nav-container">
            <nav className="nav">
              <NavLink to={'/resume/about'} className="nav-btn">About</NavLink>
              <NavLink to={'/resume/projects'} className="nav-btn">Projects</NavLink>
            </nav>
          </ul>
          <Route
            path={'/resume/about'}
            render={({ match }) => <About resumeObj={resume} />}
          />
          <Route
            path={'/resume/projects'}
            render={({ match }) => <Projects resumeObj={resume} />}
          />
          <Redirect exact from="/resume" to={'/resume/about'} />
        </div>
      </Router>
    );
  }
}

export default App;