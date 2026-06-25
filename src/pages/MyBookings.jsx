import { useState, useEffect } from 'react'
import { mockBookings } from '../data/mockData'
import BookingCard from '../components/BookingCard'
import { Link } from 'react-router-dom'
import './pages.css'

function MyBookings() {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        // merge mock bookings with any new ones saved from SeatSelection
        const saved = JSON.parse(localStorage.getItem('popkorn_bookings') || '[]')
        const combined = [...mockBookings, ...saved]
        // deduplicate by id
        const unique = combined.filter((b, i, arr) => arr.findIndex(x => x.id === b.id) === i)
        setBookings(unique)
    }, [])

    return (
        <div className="page my-bookings-page">
            <div className="page-header container">
                <h1 className="page-title">My Bookings</h1>
                <p className="page-subtitle">{bookings.length} booking{bookings.length !== 1 ? 's' : ''} found</p>
            </div>

            <div className="container">
                {bookings.length > 0 ? (
                    <div className="bookings-list">
                        {bookings.map(booking => (
                            <BookingCard key={booking.id} booking={booking} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p className="empty-state__icon">🎟️</p>
                        <p className="empty-state__text">You have no bookings yet.</p>
                        <Link to="/movies" className="btn-primary">Browse Movies</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyBookings