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
              <img alt={basics.name} src={basics.picture} />
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

                  {basics.profiles.map((profile) =>
                    <span className="social-item">
                      <a href={profile.url} className="text-muted">
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
          <p>Los-Angeles-based Front End Developer with a strong attention to
            detail and a firm belief in the power of constant iteration.</p>
          <p>Most recently, I delivered a highly collaborative and scaled game
              for <strong>Google</strong> where developers could reveal the date for the upcoming
              I/O conference by solving interactive puzzles. </p>
          <p>Previously, I have rapidly architected, implemented, and delivered
              responsive applications under tight deadlines using Scrum
              methodologies for companies like <strong>Honda</strong>
              , <strong>AT&T</strong>
              , <strong>Walmart</strong>, <strong>AWS</strong>
              ,  <strong>Intuit</strong>, and more.</p>
          <p>When I’m not coding, you’ll usually find me slurping a deep bowl
              of ramen (send any recommendations my way!), playing music, and/or
              traveling the world—often at the same time. </p>
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
                                  <span className="arrrow-right">→</span> {project.name}
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
            <span>References</span>
          </h4>
          <hr/>
          <div className="reference-list">
            {references.map((reference, id) =>
              <>
                <div className="reference-item">
                  <div className="quote">
                    {reference.quote}
                  </div>
                </div>
                <div className="quote-details">
                  <div className="quote-author">{reference.name}</div>
                  <em><div className="quote-relation">{reference.relation}</div></em>
                </div>
              </>
            )}
          </div>
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
                {school.area}, {school.studyType} {isMobile && '-'} <span>{school.institution}</span>
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