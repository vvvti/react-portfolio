import React, {useState, useRef} from 'react'

import './MenuDrawer.css'

import { useOnClickOutside } from "../Hooks/Hooks";

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const close = () => setOpen(false);
  
    useOnClickOutside(node, () => setOpen(false));
}


export const MenuDrawer: React.FC = () => {
    
    return (
        <div className="menu-drawer">
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

export default MenuDrawer;
