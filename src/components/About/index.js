/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Moment from 'react-moment';
import style from './style.scss'

class About extends Component {
  render() {
    const { basics, work, skills, education, projects } = this.props.resumeObj
  
    return (
      <div className="column-container">
        <div className="card">
          <div className="profile">
            <div className="profile-container">
              <div className="profile-img">
                <img alt={basics.name} src={basics.picture} />
              </div>
              <div className="profile-details">
                <h3 className="name">{basics.name}</h3>
                <h5 className="title text-muted">{basics.label}</h5>
                <div className="contact-container text-muted">
                  <span className="profile-email">
                    <i className="fa fa-lg fa-envelope"></i>
                    <span><a href={`mailto:${basics.email}`}>{basics.email}</a></span>
                  </span>
                  <span className="profile-location">
                    <i className="fa fa-lg fa-map-marker"></i>
                    <span>{basics.location.city}, {basics.location.region}</span>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="socials-container">
              {basics.profiles.map((profile) => 
                <span className="social-item">
                  <a href={profile.url} className="text-muted">
                    <i className={`fa fa-${profile.network.toLowerCase()} fa-2x`}></i></a>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-section">
            <h4 className="section-header text-muted">
              <span>About</span>
            </h4>
            <hr/>
            <p>{basics.summary}</p>
            <p>{basics.background}</p>
          </div>
          <div className="card-section">
            <h4 className="section-header text-muted">
              <span>Work Experience</span>
              </h4>
            <hr/>
            <ul className="experience-list">
              {work.map((experience, id) => 
                <li className="experience-item" key={id}>
                  <div className="header">
                    <strong>{experience.position}</strong> - <a href={experience.website}>{experience.company}</a>
                  </div>
                  <div className="dates text-muted">
                    <small><Moment format="MMM YYYY">{experience.startDate}</Moment></small>
                    {' - '}
                    <small><Moment format="MMM YYYY">{experience.endDate}</Moment></small>
                  </div>
                  <ul className="highlights">
                    {experience.highlights.map((highlight) => 
                      <li className="highlight">{highlight}</li>
                    )}
                  </ul>
                  {
                    projects.map((project) => {
                      const image = experience.company === project.company ? project.image : null
                      if (image) {
                        return (
                          <div className="project-link-wrapper">
                            <Link to={`/resume/projects#${project.anchor}`} className="project-link">
                              <div className="project-thumb-wrapper">
                                <img className="project-thumb" src={project.image} alt={project.name} />
                                <div className="project-details">
                                  <div className="project-header">
                                    {project.name}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      } else {
                        return []
                      }
                    })
                  }
                </li>
              )}
            </ul>
          </div>
          <div className="card-section">
            <h4 className="section-header text-muted">
              <span>Skills</span>
            </h4>
            <hr/>
            <div className="skills-list">
              {skills.map((skillItem, id) =>
                <div className="skill-item">
                  {skillItem.keywords.map((skill, id) =>
                    <span className="skill" key={id}>{skill}</span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="card-section">
            <h4 className="section-header text-muted">
              <span>Education</span>
              </h4>
            <hr/>
            <ul className="experience-list">
              {education.map((school, id) => 
                <li className="education-item" key={id}>
                  <div className="header">
                    <strong>{school.area}, {school.studyType}</strong> - {school.institution}
                  </div>
                  <div className="dates text-muted">
                    <small><Moment format="MMM YYYY">{school.startDate}</Moment></small>
                    {' - '}
                    <small><Moment format="MMM YYYY">{school.endDate}</Moment></small>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About