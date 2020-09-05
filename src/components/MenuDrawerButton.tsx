import React from 'react'
import './MenuDrawerButton.css'

interface Props  {
    open: boolean;
    setOpen: (v: boolean) => void;
  };

 const MenuDrawerButton: React.FC = (props: Props) => {
    return (
        <button className="drawer-button" open={props.open} onClick={() => props.setOpen(!props.open)}>
            <div className="drawer-button__line"></div>
            <div className="drawer-button__line"></div>
            <div className="drawer-button__line"></div>            
        </button>
    )
}

export default MenuDrawerButton
