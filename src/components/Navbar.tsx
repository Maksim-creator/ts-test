import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className="accent-3 cyan">
            <div className="container nav-wrapper">
            <a href="/" className="brand-logo">React + TS</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Список дел</a></li>
                <li><a href="/">О нас</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar