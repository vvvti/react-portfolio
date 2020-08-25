import React from 'react'
import './MenuDrawerButton.css'

export const MenuDrawerButton: React.FC = () => {
    return (
        <button className="drawer-button">
            <div className="drawer-button__line"></div>
            <div className="drawer-button__line"></div>
            <div className="drawer-button__line"></div>            
        </button>
    )
}

export default MenuDrawerButton
