import './SeatMap.css'

function SeatMap({ seats, selectedSeats, onSeatClick }) {
    return (
        <div className="seatmap">
            <div className="seatmap__screen-wrap">
                <div className="seatmap__screen">SCREEN</div>
            </div>

            <div className="seatmap__grid">
                {seats.map(row => (
                    <div key={row[0].row} className="seatmap__row">
                        <span className="seatmap__row-label">{row[0].row}</span>
                        <div className="seatmap__seats">
                            {row.map(seat => {
                                const isSelected = selectedSeats.includes(seat.id)
                                const isBooked = seat.status === 'booked'

                                return (
                                    <button
                                        key={seat.id}
                                        className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`}
                                        onClick={() => !isBooked && onSeatClick(seat.id)}
                                        disabled={isBooked}
                                        aria-label={`Seat ${seat.id} ${isBooked ? '(booked)' : isSelected ? '(selected)' : '(available)'}`}
                                        title={seat.id}
                                    >
                                        {seat.number}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="seatmap__legend">
                <div className="legend-item">
                    <span className="legend-box available" />
                    <span>Available</span>
                </div>
                <div className="legend-item">
                    <span className="legend-box selected" />
                    <span>Selected</span>
                </div>
                <div className="legend-item">
                    <span className="legend-box booked" />
                    <span>Booked</span>
                </div>
            </div>
        </div>
    )
}

export default SeatMap