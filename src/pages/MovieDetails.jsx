import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { movies } from '../data/mockData'
import './pages.css'

function MovieDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const movie = movies.find(m => m.id === id)
    const [selectedShowtime, setSelectedShowtime] = useState(null)

    if (!movie) {
        return (
            <div className="page container not-found">
                <h2>Movie not found.</h2>
                <button className="btn-primary" onClick={() => navigate('/movies')}>Back to Movies</button>
            </div>
        )
    }

    const { title, description, genre, language, duration, rating, poster, pricePerSeat, showtimes } = movie

    const handleProceed = () => {
        if (!selectedShowtime) return
        navigate(`/movies/${id}/seats`, { state: { movie, showtime: selectedShowtime } })
    }

    const grouped = showtimes.reduce((acc, st) => {
        acc[st.date] = acc[st.date] || []
        acc[st.date].push(st)
        return acc
    }, {})

    return (
        <div className="page movie-details-page">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

                <div className="movie-details__layout">
                    {/* Poster */}
                    <div className="movie-details__poster-col">
                        <img src={poster} alt={title} className="movie-details__poster" />
                    </div>

                    {/* Info */}
                    <div className="movie-details__info-col">
                        <h1 className="movie-details__title">{title}</h1>

                        <div className="movie-details__badges">
                            <span className="badge">{genre}</span>
                            <span className="badge badge-outline">{language}</span>
                            <span className="badge badge-outline">{duration} min</span>
                        </div>

                        <div className="movie-details__rating">
                            <span className="rating-star">⭐</span>
                            <span className="rating-value">{rating}</span>
                            <span className="rating-label">/ 10</span>
                        </div>

                        <p className="movie-details__desc">{description}</p>

                        <div className="movie-details__price">
                            <span className="price-label">Price per seat</span>
                            <span className="price-value">PKR {pricePerSeat.toLocaleString()}</span>
                        </div>

                        {/* Showtimes */}
                        <div className="movie-details__showtimes">
                            <h3 className="showtimes__heading">Select Showtime</h3>

                            {Object.entries(grouped).map(([date, times]) => (
                                <div key={date} className="showtime-group">
                                    <p className="showtime-date">
                                        {new Date(date).toLocaleDateString('en-PK', {
                                            weekday: 'long', month: 'long', day: 'numeric',
                                        })}
                                    </p>
                                    <div className="showtime-pills">
                                        {times.map(st => (
                                            <button
                                                key={st.id}
                                                className={`showtime-pill ${selectedShowtime?.id === st.id ? 'active' : ''}`}
                                                onClick={() => setSelectedShowtime(st)}
                                            >
                                                <span className="showtime-pill__time">{st.time}</span>
                                                <span className="showtime-pill__screen">{st.screen}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="btn-primary proceed-btn"
                            disabled={!selectedShowtime}
                            onClick={handleProceed}
                        >
                            {selectedShowtime ? 'Select Seats →' : 'Choose a Showtime First'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails