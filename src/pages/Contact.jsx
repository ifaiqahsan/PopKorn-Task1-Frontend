import { useState } from 'react'
import './pages.css'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const validate = () => {
        const errs = {}
        if (!form.name.trim()) errs.name = 'Name is required.'
        if (!form.email.trim()) errs.email = 'Email is required.'
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email.'
        if (!form.message.trim()) errs.message = 'Message cannot be empty.'
        return errs
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length > 0) {
            setErrors(errs)
            return
        }
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="page contact-page">
            <div className="page-header container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-subtitle">Have a question? We'd love to hear from you.</p>
            </div>

            <div className="container contact-layout">
                {/* Info */}
                <div className="contact-info">
                    <div className="contact-info__item">
                        <span className="contact-info__icon">📍</span>
                        <div>
                            <h4>Address</h4>
                            <p>Main Boulevard, Gulberg III, Lahore, Pakistan</p>
                        </div>
                    </div>
                    <div className="contact-info__item">
                        <span className="contact-info__icon">📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+92 300 1234567</p>
                        </div>
                    </div>
                    <div className="contact-info__item">
                        <span className="contact-info__icon">✉️</span>
                        <div>
                            <h4>Email</h4>
                            <p>support@popkorn.pk</p>
                        </div>
                    </div>
                    <div className="contact-info__item">
                        <span className="contact-info__icon">🕐</span>
                        <div>
                            <h4>Hours</h4>
                            <p>Mon – Sun: 10:00 AM – 11:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="contact-form-wrap">
                    {submitted ? (
                        <div className="contact-success">
                            <span className="contact-success__icon">✅</span>
                            <h3>Message Sent!</h3>
                            <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                            <button className="btn-primary" onClick={() => setSubmitted(false)}>
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className={`form-input ${errors.name ? 'error' : ''}`}
                                        placeholder="Ahmed Khan"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <span className="form-error">{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={`form-input ${errors.email ? 'error' : ''}`}
                                        placeholder="ahmed@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className="form-error">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    className="form-input"
                                    placeholder="Booking issue, refund, general query..."
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                                    placeholder="Describe your issue or question..."
                                    value={form.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <span className="form-error">{errors.message}</span>}
                            </div>

                            <button type="submit" className="btn-primary submit-btn">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact;