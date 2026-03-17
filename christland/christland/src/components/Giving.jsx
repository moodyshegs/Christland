import useReveal from '../hooks/useReveal'

export default function Giving() {
  const leftRef = useReveal()
  const rightRef = useReveal()
  return (
    <div id="giving">
      <div className="giving-inner">
        <div className="reveal" ref={leftRef}>
          <p className="section-label">How To Give</p>
          <h2 className="section-title">Give Via Our<br /><em>Banking Platforms</em></h2>
          <div className="scripture-block">
            <p className="scripture-text">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</p>
            <p className="scripture-ref">2 Corinthians 9:7</p>
          </div>
        </div>
        <div className="reveal" ref={rightRef}>
          <div className="bank-card">
            <p className="bank-title">Bank Transfers</p>
            <p className="bank-name">Levite Grace Foundation</p>
            <p className="bank-detail">Transfer to our account via any Nigerian bank platform</p>
            <div className="bank-cta">
              <a href="#giving" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Get Account Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
