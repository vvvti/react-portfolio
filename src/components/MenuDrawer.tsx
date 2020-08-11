import React, {useState} from 'react'

import './MenuDrawer.css'

export const MenuDrawer: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
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
