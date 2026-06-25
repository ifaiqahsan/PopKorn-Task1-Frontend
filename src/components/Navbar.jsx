import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    🍿 <span>PopKorn</span>
                </Link>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/movies" onClick={closeMenu}>Movies</NavLink></li>
                    <li><NavLink to="/bookings" onClick={closeMenu}>My Bookings</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    )
}

export default Navbar