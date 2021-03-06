import React from 'react'

import './ProjectsPage.css'

export const ProjectsPage: React.FC = () => {
    return (
      <section className="projects-info">
          <h1 className="lg-heading">
            Some sample<span> projects</span>
          </h1>
          <h2 className="sm-heading">A few words about me...</h2>        
            <div className="projects-section">
                <div className="project-container project1">
                  <h3>ALLorganizer</h3>
                  <p>web application which will support children
                   with ALL – acute lymphoblastic leukemia. Using following
                   tools: Python, Django, DRF, Html, CSS, JavaScript, PostgreSQL,
                   REST API, Celery, Selenium, Material Design</p>
                   <div>
                  <h4>Live</h4>
                  </div>
                  <div>
                  <h4>github</h4>
                  </div>
                </div>
                   <div className="project-container project2">
                    <h3>TSLHub</h3>
                    <p>Developing web application for supporting transport companies
                     in fleet management. Used tools: Django, REST API,
                      Html, CSS, Java Script, React, Redux, Webpack</p>
                    <div>
                      <h4>Live</h4>
                      </div>
                   <div>
                  <h4>github</h4>
                  </div>
               </div>
                  <div className="project-container project3"> 
                <h3>XKCDbrowser</h3>
                <p>Application for mobile devices written in React native, it allows browsing
                   comics from XKCD site. Used tools: React Native, REAST API, axios
                </p>
                <div>
                  <h4>Live</h4>
                  </div>
                <div>
                  <h4>github</h4>
                  </div>
                </div>
              
                <div className="project-container project4">
                  <h3>Ecommerce</h3>
                  <h3>Landing 2</h3>
                 </div>
              <div className="project-container project5">
                <h3>RPi & XBee </h3>
                <p>This project is distributed system for wireless temperature
                and humidity monitoring using PaspberryPi and XBee modules.</p>
                <div>
                  <h4>Live</h4>
                  </div>
                <div>
                  <h4>github</h4>
                  </div>
              </div>
            </div>
         </section>
    )
}

export default ProjectsPage;
