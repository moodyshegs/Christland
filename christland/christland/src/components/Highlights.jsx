import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const ZoomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
  </svg>
)

export default function Highlights() {
  const [activeTab, setActiveTab] = useState('day1')
  const [fading, setFading] = useState(false)
  const headerRef = useReveal()
  const actionsRef = useReveal()

  const switchTab = (tab) => {
    setFading(true)
    setTimeout(() => { setActiveTab(tab); setFading(false) }, 200)
  }

  return (
    <div id="highlights">
      <div className="highlights-inner">
        <div className="highlights-header reveal" ref={headerRef}>
          <div className="festival-badge">Grace Experience · Event Highlights</div>
          <h2 className="section-title">Relive the <em>Powerful Moments</em><br />From Our Recent Event</h2>
          <p className="section-body" style={{ margin: '0 auto', textAlign: 'center' }}>
            Watch the incredible moments from our African Praise Festival. Witness the powerful worship sessions and inspiring messages that touched hearts and transformed lives.
          </p>
          <p className="section-body" style={{ margin: '1.2rem auto 0', textAlign: 'center' }}>
            This gathering brought together believers from across Ilorin and beyond for a weekend of spiritual renewal and divine encounter at our Grace Experience Convention.
          </p>
          <div className="photo-tabs">
            <button className={`photo-tab${activeTab === 'day1' ? ' active' : ''}`} onClick={() => switchTab('day1')}>Day 1 Photos</button>
            <button className={`photo-tab${activeTab === 'day2' ? ' active' : ''}`} onClick={() => switchTab('day2')}>Day 2 Photos</button>
          </div>
        </div>
        <div className="gallery-grid" style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(10px)' : 'translateY(0)' }}>
          {[1,2,3,4,5,6].map(i => (
            <div className="gallery-item" key={i}>
              <div className="gallery-overlay"><ZoomIcon /></div>
            </div>
          ))}
        </div>
        <div className="gallery-actions reveal" ref={actionsRef}>
          <button className="btn-outline">Load More Images</button>
          <button className="btn-primary">View All in Lightbox</button>
        </div>
      </div>
    </div>
  )
}
