/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import style from './style.scss'

class Projects extends Component {
  render() {
    const { projects } = this.props.resumeObj
  
    return (
      <div className="column-container">
        {projects.map((project, id) =>
          <div className="card" key={id}>
            {id === 0 &&
              <div className="card-section">
                <h4 className="section-header text-muted">
                  <i className="fa fa-lg fa-cloud"></i>
                  <span>Projects</span>
                </h4>
                <hr/>
              </div>
            }
            <div className="card-section" id={project.anchor}>
              <div className="project-image-container">
                <img src={project.image} alt={project.name} />
              </div>
              <h4 className="section-header">
                {project.url ? <a href={project.url}>{project.name}</a> : <span>{project.name}</span>
                }
              </h4>
              <div className="section-description text-muted">
                <small>{project.description}</small>
              </div>
              <ul className="project-highlights">
                {project.highlights.map((highlight) =>
                  <li className="highlight">{highlight}</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Projects