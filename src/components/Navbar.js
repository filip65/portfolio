import React from 'react'
import '../css/navbar.css'

function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <ul className="pages">
                <li><a href="#welcome-section">About</a></li>
                <li><a href="#projects-container">Projects</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar
