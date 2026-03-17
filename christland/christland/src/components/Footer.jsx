export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Christland Christian Center</div>
          <p className="footer-brand-sub">A place of the unfailing love of God.</p>
        </div>
        <div>
          <p className="footer-col-title">Quick Links</p>
          <ul className="footer-links">
            <li><a href="#hero">↑ Back to Top</a></li>
            <li><a href="#footer">Terms &amp; Conditions</a></li>
            <li><a href="#footer">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Contact</p>
          <ul className="footer-contact">
            <li><span>✉</span> Clcc@gmail.com</li>
            <li><span>☎</span> +234 7031111111</li>
            <li><span>⚑</span> Behind Eucharistic College, off Asa-Dam Road, Ilorin.</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 CLCC. All rights reserved. Christland Christian Center.</span>
        <span className="footer-bottom-mark">✦ &nbsp; CLCC</span>
      </div>
    </footer>
  )
}
