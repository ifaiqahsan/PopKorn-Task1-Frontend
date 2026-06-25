import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Importing exclusively the clean, lowercase movies array
import { movies } from '../data/mockData';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');

  // Hardcoded unique filter categories matching your centralized mock objects
  const genres = ['All', 'Action', 'Drama', 'Sci-Fi', 'Thriller'];

  // Safe runtime filter targeting the correct 'movies' array source variable
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = activeGenre === 'All' || movie.genre === activeGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div style={{ maxWidth: '1240px', margin: '40px auto', padding: '0 24px', paddingBottom: '100px' }}>
      
      {/* Title & Stats Subtitle Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '6px', letterSpacing: '-0.5px' }}>
            All <span style={{ color: 'var(--primary)' }}>Movies</span>
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>{filteredMovies.length} premium theater productions playing live</p>
        </div>

        {/* High-Fidelity Glass Search bar */}
        <input 
          type="text" 
          placeholder="Search for movies, genres, languages..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '450px',
            padding: '14px 20px',
            borderRadius: '10px',
            border: '1px solid var(--glass-border)',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
            transition: 'border-color 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        />

        {/* Dynamic Filter Badges */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
          {genres.map(genre => (
            <button 
              key={genre}
              onClick={() => setActiveGenre(genre)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: activeGenre === genre ? 'var(--primary)' : 'var(--glass-border)',
                background: activeGenre === genre ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.85rem',
                transition: 'all 0.2s'
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Primary Clean Grid Map Canvas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
        {filteredMovies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="glass-panel cinema-card" style={{
            borderRadius: '16px',
            overflow: 'hidden',
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease'
          }}>
            
            {/* Poster Frame Block */}
            <div style={{ height: '370px', width: '100%', overflow: 'hidden', background: '#121218', position: 'relative' }}>
              <img 
                src={movie.posterUrl} 
                alt={movie.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="movie-img"
              />
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', padding: '5px 12px', borderRadius: '30px', fontSize: '0.8rem', fontWeight: '700', color: '#fbbf24', border: '1px solid rgba(255,255,255,0.08)' }}>
                ⭐ {movie.rating}
              </div>
            </div>

            {/* Metadata Text Field block */}
            <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '8px', lineHeight: '1.3' }}>{movie.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontSize: '0.7rem', padding: '3px 8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {movie.genre}
                  </span>
                  <span style={{ fontSize: '0.7rem', padding: '3px 8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {movie.language}
                  </span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>⏱️ {movie.duration}</span>
                <span className="book-text" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', transition: 'color 0.2s' }}>
                  Book Tickets &rarr;
                </span>
              </div>
            </div>

          </Link>
        ))}
      </div>

      <style>{`
        .cinema-card:hover {
          transform: translateY(-6px);
          border-color: rgba(229, 9, 20, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        .cinema-card:hover .movie-img {
          transform: scale(1.04);
        }
        .cinema-card:hover .book-text {
          color: #fff;
        }
      `}</style>

    </div>
  );
}

export default Movies;