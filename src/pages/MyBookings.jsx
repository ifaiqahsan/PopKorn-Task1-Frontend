import React from 'react';
// Import the centralized bookings array that contains your custom links
import { bookings } from '../data/mockData';

function MyBookings() {
  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 24px', paddingBottom: '80px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '6px', letterSpacing: '-0.5px' }}>
          My <span style={{ color: '#e50914' }}>Bookings</span>
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>{bookings.length} verified electronic passes loaded</p>
      </div>

      {/* Ticket Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {bookings.map(booking => (
          <div key={booking.id} className="glass-panel ticket-card" style={{
            display: 'flex',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.3s ease',
            height: '210px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            
            {/* FIX: Reading 'posterUrl' directly from mockData schema */}
            <div style={{ 
              width: '140px', 
              position: 'relative',
              flexShrink: 0,
              background: '#121218'
            }}>
              <img 
                src={booking.posterUrl} 
                alt={booking.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(10,10,12,0.5) 100%)' 
              }} />
            </div>

            {/* Ticket Details Subunit */}
            <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '12px' }}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>{booking.title}</h2>
                  <span style={{ 
                    padding: '4px 12px', 
                    borderRadius: '30px', 
                    background: 'rgba(34, 197, 94, 0.1)', 
                    color: '#4ade80', 
                    fontSize: '0.75rem', 
                    fontWeight: '700', 
                    border: '1px solid rgba(34,197,94,0.2)',
                    whiteSpace: 'nowrap'
                  }}>
                    ● {booking.status}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px 12px', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '600', marginBottom: '2px' }}>Date</span>
                    <strong style={{ color: '#fff' }}>{booking.date}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '600', marginBottom: '2px' }}>Time</span>
                    <strong style={{ color: '#fff' }}>{booking.time}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '600', marginBottom: '2px' }}>Screen</span>
                    <strong style={{ color: '#fff' }}>{booking.screen}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '600', marginBottom: '2px' }}>Seats</span>
                    <strong style={{ color: '#e50914' }}>{booking.seats}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '600', marginBottom: '2px' }}>Total Charges</span>
                    <strong style={{ color: '#4ade80' }}>{booking.total}</strong>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.75rem', color: '#6b7280', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', marginTop: '16px' }}>
                Ref Identifier: <span style={{ color: '#fff', fontFamily: 'monospace', fontSize: '0.85rem' }}>{booking.ref}</span>
              </div>
            </div>

            {/* Ticket Tear Perforation Strip */}
            <div style={{ position: 'relative', width: '2px', borderLeft: '1px dashed rgba(255,255,255,0.12)', margin: '12px 0' }}>
              <div style={{ position: 'absolute', top: '-23px', left: '-11px', width: '20px', height: '20px', background: '#060608', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', bottom: '-23px', left: '-11px', width: '20px', height: '20px', background: '#060608', borderRadius: '50%' }} />
            </div>

            {/* Barcode Subunit */}
            <div style={{ width: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px', background: 'rgba(0,0,0,0.15)', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '3px', height: '85px', alignItems: 'center', opacity: 0.7 }}>
                {[3,2,5,1,4,2,6,3,1,5,3,2,6,1,4].map((width, i) => (
                  <span key={i} style={{ width: `${width}px`, height: '100%', backgroundColor: '#fff', display: 'inline-block' }} />
                ))}
              </div>
              <span style={{ fontSize: '0.65rem', color: '#6b7280', fontFamily: 'monospace', marginTop: '8px' }}>{booking.ref}</span>
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .ticket-card:hover {
          transform: translateY(-4px);
          border-color: rgba(229, 9, 20, 0.3) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
}

export default MyBookings;