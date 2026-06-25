import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({ movie }) {
    const { id, title, genre, rating, duration, poster, language } = movie

    return (
        <div className="movie-card">
            <div className="movie-card__poster-wrap">
                <img
                    src={poster}
                    alt={`${title} poster`}
                    className="movie-card__poster"
                    loading="lazy"
                />
                <span className="movie-card__rating">⭐ {rating}</span>
            </div>

            <div className="movie-card__info">
                <h3 className="movie-card__title">{title}</h3>

                <div className="movie-card__meta">
                    <span className="movie-card__genre">{genre}</span>
                    <span className="movie-card__dot">·</span>
                    <span className="movie-card__lang">{language}</span>
                    <span className="movie-card__dot">·</span>
                    <span className="movie-card__duration">{duration} min</span>
                </div>

                <Link to={`/movies/${id}`} className="movie-card__btn">
                    Book Tickets
                </Link>
            </div>
        </div>
    )
}

export default MovieCard