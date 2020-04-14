/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Moment from 'react-moment';
import style from './style.scss'

class About extends Component {
  render() {
    const { basics, work, skills, education } = this.props.resumeObj
  
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
                    <span>{basics.location.city}, {basics.location.region} {basics.location.countryCode}</span>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="socials-container">
              {basics.profiles.map((profile) => 
                <span className="social-item">
                  <a href={profile.url}>
                    <i className={`fa fa-${profile.network.toLowerCase()} fa-2x`}></i>
                    {profile.username}
                    </a>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-section">
            <h4 className="section-header text-muted">
              <i className="fa fa-lg fa-user"></i>
              <span><strong>A</strong>bout</span>
            </h4>
            <hr/>
            <p>{basics.summary}</p>
            <p>{basics.background}</p>
          </div>
          <div className="card-section">
            <h4 className="section-header text-muted">
              <i className="fa fa-lg fa-pencil-square-o"></i>
              <span><strong>W</strong>ork <strong>E</strong>xperience</span>
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
                </li>
              )}
            </ul>
          </div>
          <div className="card-section">
            <h4 className="section-header text-muted">
              <i className="fa fa-lg fa-code"></i>
              <span><strong>S</strong>kills</span>
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
              <i className="fa fa-lg fa-mortar-board"></i>
              <span><strong>E</strong>ducation</span>
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