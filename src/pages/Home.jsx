import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/mockData';

function Home() {
  const featuredMovies = movies.slice(0, 4);

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '40px 24px', paddingBottom: '100px' }}>
      
      {/* Dynamic Hero Banner */}
      <div className="glass-panel" style={{
        padding: '60px',
        borderRadius: '24px',
        marginBottom: '60px',
        background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(10, 10, 12, 0.7) 100%)',
        border: '1px solid rgba(229, 9, 20, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>
            Now Experience Premium Cinema
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '16px', letterSpacing: '-1.5px' }}>
            Book Your Next Movie Stubs <span style={{ color: 'var(--primary)' }}>Instantly</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: '1.6' }}>
            Explore immersive spatial layouts, live multiplex stadium row views, and manage seamless electronic verification tickets immediately.
          </p>
          <Link to="/movies" className="cta-btn" style={{
            display: 'inline-block',
            padding: '14px 32px',
            background: 'var(--primary)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '700',
            borderRadius: '10px',
            boxShadow: '0 4px 15px var(--primary-glow)',
            transition: 'all 0.2s'
          }}>
            Explore Movies 🎬
          </Link>
        </div>
      </div>

      {/* Featured Title Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Featured Movies</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Handpicked cinematic experiences on screen right now</p>
        </div>
        <Link to="/movies" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>
          View All Movies &rarr;
        </Link>
      </div>

      {/* Movie Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
        {featuredMovies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="glass-panel card-hover" style={{
            borderRadius: '16px',
            overflow: 'hidden',
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ height: '360px', width: '100%', overflow: 'hidden', background: '#121218', position: 'relative' }}>
              <img 
                src={movie.posterUrl} 
                alt={movie.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="movie-img"
              />
              <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: '30px', fontSize: '0.8rem', fontWeight: '700', color: '#fbbf24', border: '1px solid rgba(255,255,255,0.08)' }}>
                ⭐ {movie.rating}
              </span>
            </div>
            <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '6px', color: '#fff' }}>{movie.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{movie.tags}</p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(229, 9, 20, 0.3);
          box-shadow: 0 15px 35px rgba(0,0,0,0.6);
        }
        .card-hover:hover .movie-img {
          transform: scale(1.05);
        }
      `}</style>

    </div>
  );
}

export default Home;