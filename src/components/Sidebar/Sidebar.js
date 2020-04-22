import React from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'
const Sidebar = (props) => {
    return(
        <div className={props.classes} onClick={props.clicked}>
            <li><NavLink to = '/'>HOME</NavLink></li>
            <li><NavLink to = '/category'>CATEGORY</NavLink></li>
            <li><NavLink to = '/promotion'>PROMOTION</NavLink></li>
            <li><NavLink to = '/'>ABOUT</NavLink></li>
            <li><NavLink to = '/'>CONTACT</NavLink></li>
        </div>
    )
}

export default Sidebar