import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { generateSeats } from '../data/mockData'
import SeatMap from '../components/SeatMap'
import './pages.css'

function SeatSelection() {
    const { state } = useLocation()
    const navigate = useNavigate()

    // if someone lands here directly without state, redirect
    if (!state?.movie || !state?.showtime) {
        navigate('/movies')
        return null
    }

    const { movie, showtime } = state
    const seats = generateSeats(['A2', 'A3', 'C5', 'D1', 'D2', 'E7'])
    const [selectedSeats, setSelectedSeats] = useState([])

    const toggleSeat = (seatId) => {
        setSelectedSeats(prev =>
            prev.includes(seatId) ? prev.filter(s => s !== seatId) : [...prev, seatId]
        )
    }

    const totalPrice = selectedSeats.length * movie.pricePerSeat

    const handleConfirm = () => {
        if (selectedSeats.length === 0) return

        const booking = {
            id: `b${Date.now()}`,
            movieId: movie.id,
            movieTitle: movie.title,
            moviePoster: movie.poster,
            showtime,
            seats: selectedSeats,
            totalPrice,
            reference: `PK-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
            status: 'confirmed',
            bookedAt: new Date().toISOString(),
        }

        // store in localStorage for MyBookings page to read
        const existing = JSON.parse(localStorage.getItem('popkorn_bookings') || '[]')
        localStorage.setItem('popkorn_bookings', JSON.stringify([...existing, booking]))

        navigate('/bookings', { state: { newBooking: booking } })
    }

    return (
        <div className="page seat-selection-page">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

                <div className="seat-selection__layout">
                    {/* Left — SeatMap */}
                    <div className="seat-selection__map-col">
                        <h2 className="seat-selection__heading">Choose Your Seats</h2>
                        <SeatMap
                            seats={seats}
                            selectedSeats={selectedSeats}
                            onSeatClick={toggleSeat}
                        />
                    </div>

                    {/* Right — Summary */}
                    <div className="seat-selection__summary">
                        <div className="summary-card">
                            <img src={movie.poster} alt={movie.title} className="summary-card__poster" />
                            <h3 className="summary-card__title">{movie.title}</h3>

                            <div className="summary-card__row">
                                <span>Date</span>
                                <span>{showtime.date}</span>
                            </div>
                            <div className="summary-card__row">
                                <span>Time</span>
                                <span>{showtime.time}</span>
                            </div>
                            <div className="summary-card__row">
                                <span>Screen</span>
                                <span>{showtime.screen}</span>
                            </div>
                            <div className="summary-card__row">
                                <span>Seats</span>
                                <span>{selectedSeats.length > 0 ? selectedSeats.join(', ') : '—'}</span>
                            </div>

                            <div className="summary-card__divider" />

                            <div className="summary-card__row total">
                                <span>Total</span>
                                <span>PKR {totalPrice.toLocaleString()}</span>
                            </div>

                            <button
                                className="btn-primary confirm-btn"
                                disabled={selectedSeats.length === 0}
                                onClick={handleConfirm}
                            >
                                {selectedSeats.length > 0
                                    ? `Confirm ${selectedSeats.length} Seat${selectedSeats.length > 1 ? 's' : ''}`
                                    : 'Select at least 1 seat'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeatSelection