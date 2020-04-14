import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
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
              <NavLink exact to={'.'} className="nav-btn">About</NavLink>
              <NavLink to={'/projects'} className="nav-btn">Projects</NavLink>
            </nav>
          </ul>
          <Route
            exact path={'/resume'}
            render={({ match }) => <About resumeObj={resume} />}
          />
          <Route
            exact path={'/resume/projects'}
            render={({ match }) => <Projects resumeObj={resume} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;