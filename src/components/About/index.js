/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Moment from 'react-moment';
import style from './style.scss'

const About = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 768);
  const { basics, work, skills, education, projects, references } = props.resumeObj

  const updateViewport = () => {
    setIsMobile(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  });

  return (
    <div className="column-container">
      <div className="card">
        <div className="profile">
          <div className="profile-container">
            <div className="profile-img">
              <img alt={basics.name} src={basics.picture} loading="lazy" />
            </div>
            <div className="profile-details">
              <h3 className="name">{basics.name}</h3>
              <h5 className="title text-muted">{basics.label}</h5>
              <div className="contact-container text-muted">
                <div className="profile-email">
                  <span><a href={`mailto:${basics.email}`}>{basics.email}</a></span>
                </div>
                <div className="profile-location">
                  <div>{basics.location.city}, {basics.location.region}</div>
                </div>
                <div className="socials-container">

                  {basics.profiles.map((profile, id) =>
                    <span className="social-item" key={id}>
                      <a href={profile.url} className="text-muted" target="_blank" rel="noopener noreferrer">
                        <i className={`fa fa-${profile.network.toLowerCase()} fa-2x`}></i></a>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-section">
          <h4 className="section-header text-muted">
            <span>About</span>
          </h4>
          <p>
            Senior Software Engineer with over 9 years of experience building
            fast and responsive applications for high-impact clients. Skilled in
            Vue, React, Angular, JavaScript, CSS, Tailwind, and TypeScript.
          </p>
          <p>
            <em>
              Fun fact: passionate musician that has traveled the world over and eaten far too many spicy foods.
            </em>
          </p>
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
                  <strong>{experience.position}</strong> - {
                    experience.website
                    ? <a href={experience.website} target="_blank" rel="noopener noreferrer">{experience.company}</a>
                    : <span className="experience-company">{experience.company}</span>
                  }
                </div>
                <div className="dates text-muted">
                  <small><Moment format="MMM YYYY">{experience.startDate}</Moment></small>
                  {' - '}
                  {
                    experience.endDate === 'Present'
                    ? <small>{experience.endDate}</small>
                    : <small><Moment format="MMM YYYY">{experience.endDate}</Moment></small>
                  }
                </div>
                <ul className="highlights">
                  {experience.highlights.map((highlight, idx) =>
                    <li className="highlight" key={idx}>{highlight}</li>
                  )}
                </ul>
                {
                  projects.map((project, id) => {
                    const image = experience.company === project.company ? project.image : null
                    if (image) {
                      return (
                        <div className="project-link-wrapper hidden-for-pdf" key={id}>
                          <Link to={`/resume/projects#${project.anchor}`} className="project-link">
                            <div className="project-thumb-wrapper">
                              <img className="project-thumb" src={project.image} alt={project.name} loading="lazy" />
                              <div className="project-details">
                                <div className="project-header">
                                  <span className="arrow-right">→</span> {project.name}
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
        <div className="card-section hidden-for-pdf">
          <h4 className="section-header text-muted">
            <span>References</span>
          </h4>
          <hr/>
          <div className="reference-list">
            {references.map((reference, id) =>
              <div key={id}>
                <div className="reference-item">
                  <div className="quote">
                    {reference.quote}
                  </div>
                </div>
                <div className="quote-details">
                  <div className="quote-author">{reference.name}</div>
                  <em><div className="quote-relation">{reference.relation}</div></em>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card-section">
          <h4 className="section-header text-muted">
            <span>Skills</span>
          </h4>
          <hr/>
          <div className="skills-list">
            {skills.map((skillItem, itemId) =>
              <div className="skill-item" key={itemId}>
                {skillItem.keywords.map((skill, skillId) =>
                  <span className="skill" key={skillId}>{skill}</span>
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
                {school.area}, {school.studyType} {isMobile && '-'} <span className="school-name">{school.institution}</span>
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

export default About