import { Link } from "react-router-dom"

function Navbar() { 
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="navbar-brand">
    <Link to="/" className="navbar-item">Home</Link>
    <Link to="/tracker" className="navbar-item">ISS Tracker</Link>
  <Link to="/people" className="navbar-item">People</Link>
  <Link to="/launches" className="navbar-item">Launches</Link>
 
  </div>
    </nav>
    </>
  )
}

export default Navbar