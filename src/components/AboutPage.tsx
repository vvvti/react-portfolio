import React from 'react'

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
                <div className="skills"></div>
                <div className="skills"></div>
                <div className="skills"></div>
            </div>
          </div>
        </div>
    )
}

export default AboutPage
