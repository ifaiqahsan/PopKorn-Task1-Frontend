import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <span className="footer-logo">🍿 PopKorn</span>
                    <p>Your go-to platform for booking movie tickets fast, easy, and hassle-free.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/bookings">My Bookings</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Genres</h4>
                    <ul>
                        <li><Link to="/movies">Action</Link></li>
                        <li><Link to="/movies">Drama</Link></li>
                        <li><Link to="/movies">Sci-Fi</Link></li>
                        <li><Link to="/movies">Thriller</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>📍 Main Boulevard, Lahore</p>
                    <p>📞 +92 300 1234567</p>
                    <p>✉️ hello@popkorn.pk</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} PopKorn. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer