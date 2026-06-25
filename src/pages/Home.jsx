import { Link } from 'react-router-dom'
import { movies } from '../data/mockData'
import MovieCard from '../components/MovieCard'
import './pages.css'

function Home() {
    const featured = movies.slice(0, 4)

    return (
        <div className="home">
            {/* Hero */}
            <section className="hero">
                <div className="hero__bg" />
                <div className="container hero__content">
                    <span className="hero__tag">Now Showing in Lahore</span>
                    <h1 className="hero__heading">
                        Book Your <span className="hero__accent">Perfect</span> Movie Night
                    </h1>
                    <p className="hero__subtext">
                        Choose your movie, pick your seats, and enjoy the experience — all in under 2 minutes.
                    </p>
                    <div className="hero__actions">
                        <Link to="/movies" className="btn-primary">Browse Movies</Link>
                        <Link to="/bookings" className="btn-outline">My Bookings</Link>
                    </div>
                </div>
            </section>

            {/* Featured Movies */}
            <section className="section container">
                <div className="section__header">
                    <h2 className="section-title">Featured Movies</h2>
                    <Link to="/movies" className="section__link">View All →</Link>
                </div>
                <div className="movies-grid">
                    {featured.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="section how-it-works">
                <div className="container">
                    <h2 className="section-title text-center">How It Works</h2>
                    <div className="steps-grid">
                        <div className="step">
                            <div className="step__icon">🎬</div>
                            <h3 className="step__title">Pick a Movie</h3>
                            <p className="step__desc">Browse our collection and find what you want to watch tonight.</p>
                        </div>
                        <div className="step">
                            <div className="step__icon">🕐</div>
                            <h3 className="step__title">Choose Showtime</h3>
                            <p className="step__desc">Select a date, time, and screen that works for your schedule.</p>
                        </div>
                        <div className="step">
                            <div className="step__icon">💺</div>
                            <h3 className="step__title">Select Seats</h3>
                            <p className="step__desc">Pick your preferred seats from our live interactive seat map.</p>
                        </div>
                        <div className="step">
                            <div className="step__icon">🎟️</div>
                            <h3 className="step__title">Confirm Booking</h3>
                            <p className="step__desc">Get your booking reference instantly — no printing needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner container">
                <div className="cta-banner__inner">
                    <div>
                        <h2 className="cta-banner__title">Your Next Favourite Movie Awaits</h2>
                        <p className="cta-banner__sub">Explore all genres — Action, Drama, Sci-Fi, Thriller and more.</p>
                    </div>
                    <Link to="/movies" className="btn-primary">See All Movies</Link>
                </div>
            </section>
        </div>
    )
}

export default Home