import MatrixRain from './MatrixRain'
import './App.css'

function App() {
  return (
    <div className="app">
      <MatrixRain />

      <div className="page-wrapper">
        {/* Header */}
        <header className="header">
          <div className="header-logo">
            <span className="logo-green">Kaylo</span>
            <span className="logo-gray">Code</span>
          </div>
          <nav className="header-nav">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="title">
              <span className="title-green">Kaylo</span>
              <span className="title-gray">Code</span>
            </h1>
            <p className="tagline">Building the future, one line at a time</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </section>

        {/* Developments / Clients */}
        <section id="work" className="section">
          <h2 className="section-title">Current Work</h2>
          <div className="cards-grid">
            <div className="card">
              <h3 className="card-title">Project Alpha</h3>
              <p className="card-text">Enterprise platform modernization with scalable cloud architecture.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Project Nova</h3>
              <p className="card-text">Real-time data pipeline for financial analytics and reporting.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Project Vertex</h3>
              <p className="card-text">Cross-platform mobile application for logistics management.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="footer">
          <div className="footer-inner">
            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <a href="mailto:inquery@kaylocode.com" className="footer-link">
                inquery@kaylocode.com
              </a>
            </div>

            {/* Social */}
            <div className="footer-col">
              <h4 className="footer-heading">Social</h4>
              <div className="social-links">
                <a href="#" className="footer-link">GitHub</a>
                <a href="#" className="footer-link">LinkedIn</a>
                <a href="#" className="footer-link">X / Twitter</a>
              </div>
            </div>

            {/* Clients / Partners */}
            <div className="footer-col">
              <h4 className="footer-heading">Clients</h4>
              <div className="social-links">
                <a href="#" className="footer-link">Acme Corp</a>
                <a href="#" className="footer-link">NovaTech</a>
                <a href="#" className="footer-link">Vertex Inc</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 KayloCode. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
