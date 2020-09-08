import React from 'react'

import './ProjectsPage.css'

export const ProjectsPage: React.FC = () => {
    return (
      <section className="projects-info">
          <h1 className="lg-heading">
            Some sample<span> projects</span>
          </h1>
          <h2 className="sm-heading">A few words about me...</h2>        
              <div className="web-apps">
                <h3>ALLorganizer</h3>
                <h3>TSLHub</h3>
                <h3>XKCDbrowser</h3>
              </div>
            <div className="landing-pages">
                <h3>Ecommerce</h3>
                <h3>Landing 2</h3>
            </div>
              <div className="other-projects">
                <h3>RPi & XBee </h3>
             </div>
         </section>
    )
}

export default ProjectsPage;
