import useReveal from "../hooks/useReveal";

export default function Visit() {
  const headingRef = useReveal();
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="visit">
      <div className="reveal" ref={headingRef}>
        <p className="section-label">First Time Visiting?</p>
        <h2 className="section-title">
          We Can't Wait to
          <br />
          <em>Welcome You!</em>
        </h2>
        <p className="section-body">
          Our friendly team will be available to help you find your way and make
          you feel at home.
        </p>
      </div>

      <div className="visit-wrap">
        <div className="reveal" ref={leftRef}>
          <ul className="feature-list">
            <li>Friendly Atmosphere</li>
            <li>Children's Ministry</li>
            <li>Accessible Parking</li>
            <li>Sunday Services at 9:00 AM</li>
          </ul>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: "2rem", display: "inline-block" }}
          >
            Get Directions →
          </a>
        </div>

        <div className="reveal" ref={rightRef}>
          <div className="map-placeholder">
            <div className="map-pin">📍</div>
            <div className="map-address">
              <strong>Christland Christian Center</strong>
              Behind Eucharistic College, off Asa-Dam Road
              <br />
              Ilorin, Kwara State, Nigeria
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
