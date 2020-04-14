/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import style from './style.scss'

class Projects extends Component {
  render() {
    const { projects } = this.props.resumeObj
  
    return (
      <div className="column-container">
        {projects.map((project) =>
          <div className="card">
            <div className="card-section">
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