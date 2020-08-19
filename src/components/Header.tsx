import React from 'react'
import './Header.css'


export const header: React.FC = (props) => {
  
    return (
        <header>
          <div className="menu-btn">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>            
          </div>
          <nav className="menu">
            <div className="menu-brand">
                <div className="profile-photo"></div>

            </div>
            <ul className="menu-nav">
              <li className="nav-item">
                  <a href="/" className="nav link">Home</a>
              </li>
              <li className="nav-item">
                  <a href="/about" className="nav link">About me</a>
              </li>
              <li className="nav-item">
                  <a href="/skills" className="nav link">Skills</a>
              </li>
              <li className="nav-item">
                  <a href="/projects" className="nav link">My projects</a>
              </li>
              <li className="nav-item">
                  <a href="/contact" className="nav link">How to reach me</a>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default header
