import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: '0px',
      padding: '0 24px'
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.5rem' }}>🍿</span>
          <span style={{ fontWeight: '900', fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.5px' }}>
            Pop<span style={{ color: 'var(--primary)' }}>Korn</span>
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '28px' }}>
          {[
            { path: '/', label: 'Home' },
            { path: '/movies', label: 'Movies' },
            { path: '/bookings', label: 'My Bookings' },
            { path: '/contact', label: 'Contact' } // <-- Restored link!
          ].map(link => (
            <NavLink 
              key={link.path} 
              to={link.path}
              end={link.path === '/'}
              style={({ isActive }) => ({
                color: isActive ? 'var(--primary)' : '#fff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'color 0.2s',
                position: 'relative',
                padding: '6px 0'
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;