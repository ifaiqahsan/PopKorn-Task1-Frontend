import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="glass-panel cinema-card" style={{
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      position: 'relative'
    }}>
      
      {/* Poster Image Frame */}
      <div style={{ height: '320px', width: '100%', overflow: 'hidden', background: '#121218', position: 'relative' }}>
        <img 
          src={movie.posterUrl} // Fixed to read from the unified schema key!
          alt={movie.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="movie-img"
        />
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', color: '#fbbf24' }}>
          ★ {movie.rating}
        </div>
      </div>

      {/* Card Body Metadata */}
      <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{movie.title}</h3>
          <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '12px' }}>{movie.genre} • {movie.duration}</p>
          
          {/* Seat Progress Gauge */}
          <div style={{ fontSize: '0.7rem', color: '#9ca3af', display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span>Theater Filling</span>
            <span>65% Seats Taken</span>
          </div>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', background: '#e50914' }} />
          </div>
        </div>

        {/* CTA Pass Link */}
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
          <button className="book-btn" style={{
            width: '100%',
            padding: '10px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            borderRadius: '6px',
            fontWeight: '700',
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Book Tickets
          </button>
        </Link>
      </div>

    </div>
  );
}

export default MovieCard;