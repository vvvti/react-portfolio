import React from 'react'
import './AboutPage.css'

export const AboutPage: React.FC = () => {
    return (
        <div>
          <h1 className="lg-heading">
            About me
          </h1>
          <h2 className="sm-heading">A few words about me...</h2>
          <div className="about-info">
            <img src="/" alt="Patryk Kontewicz" className="bio-image"/>
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus ipsa, sed cupiditate numquam repellendus at 
                corporis quo ullam eligendi beatae libero perferendis saepe 
                temporibus praesentium consectetur placeat modi aspernatur 
                explicabo?</p>
                <div className="skills skills-frontend">
                  <h3>Frontend skills</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto inventore facilis ullam provident laudantium,
                    quasi totam molestias eveniet asperiores. Quod?</p>
                </div>
                <div className="skills skills-backend">
                  <h3>Backend skills</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto inventore facilis ullam provident laudantium,
                    quasi totam molestias eveniet asperiores. Quod?</p>
                </div>
                <div className="skills skills-other">
                  <h3>Other skills</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto inventore facilis ullam provident laudantium,
                    quasi totam molestias eveniet asperiores. Quod?</p>
                </div>
                
            </div>
          </div>
        </div>
    )
}

export default AboutPage
