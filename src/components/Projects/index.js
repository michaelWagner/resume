/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import style from './style.scss'

const Projects = (props) => {
  const { projects } = props.resumeObj

  return (
    <div className="column-container">
      {projects.map((project, id) =>
        <div className="card" key={id}>
          {id === 0 &&
            <div className="card-section">
              <h4 className="section-header text-muted">
                <span>Projects</span>
              </h4>
              <hr/>
            </div>
          }
          <div className="card-section" id={project.anchor}>
            <div className="project-image-container">
              <img src={project.image} alt={project.name} loading="lazy" />
            </div>
            <h4 className="section-header">
              {
                project.url
                ? (
                  <>
                    <span className="arrow-right">→</span> <a href={project.url}>{project.name}</a>
                  </>
                )
                : <span>{project.name}</span>
              }
            </h4>
            <div className="section-description">
              <small>{project.description}</small>
            </div>
            <ul className="project-highlights text-muted">
              {project.highlights.map((highlight, idx) =>
                <li key={idx} className="highlight">{highlight}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects