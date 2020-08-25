import React from 'react'

import './MenuDrawer.css'

interface Props {
    menuDrawerOpen: boolean;
    menuOpenHandler: () => void;
}

export const MenuDrawer: React.FC<Props> = (menuDrawerOpen, menuOpenHandler) => {
    
    return (
        <div className="menu">
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
        </div>
    )
}

export default MenuDrawer
