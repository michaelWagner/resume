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
          <ul className="nav-container hidden-for-pdf">
            <nav className="nav">
              <NavLink to={'/resume/about'} className="nav-btn">About</NavLink>
              <NavLink to={'/resume/projects'} className="nav-btn">Projects</NavLink>
            </nav>
          </ul>
          <Route
            exact path={'/resume/about'}
            render={({ match }) => <About resumeObj={resume} />}
          />
          <Route
            exact path={'/resume/projects'}
            render={({ match }) => <Projects resumeObj={resume} />}
          />
          <Redirect exact from="/" to={'/resume/about'} />
        </div>
      </Router>
    );
  }
}

export default App;