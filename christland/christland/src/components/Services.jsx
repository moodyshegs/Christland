import useReveal from '../hooks/useReveal'

export default function Services() {
  const headingRef = useReveal()
  const card1Ref = useReveal()
  const card2Ref = useReveal()
  return (
    <section id="services">
      <div className="reveal" ref={headingRef}>
        <p className="section-label">Join Us For Service</p>
        <h2 className="section-title">Experience the <em>Presence of God</em><br />in Our Worship Services</h2>
      </div>
      <div className="services-grid">
        <div className="service-card reveal" ref={card1Ref}>
          <div className="service-icon">🕊</div>
          <h3 className="service-title">Sunday Worship</h3>
          <p className="service-detail">Join us every Sunday for a powerful time of worship, the Word, and fellowship in the presence of God.</p>
          <div className="time-badge">Service Times · 9:00 AM</div>
        </div>
        <div className="service-card reveal" ref={card2Ref}>
          <div className="service-icon">📍</div>
          <h3 className="service-title">Location</h3>
          <p className="service-detail">Behind Eucharistic College, off Asa-Dam Road, Ilorin, Kwara State, Nigeria.</p>
          <a href="#visit" className="btn-outline" style={{ marginTop: '1.2rem', display: 'inline-block', fontSize: '0.7rem', padding: '0.55rem 1.2rem' }}>Get Directions</a>
        </div>
      </div>
    </section>
  )
}
