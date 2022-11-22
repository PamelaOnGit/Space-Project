import { Link } from "react-router-dom"

function Navbar() { 
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main-navigation">
    <Link to="/" className="navbar-item">Home</Link>
    <Link to="/tracker" className="navbar-item">Where is the ISS now?</Link>
  <Link to="/people" className="navbar-item">Who's in space?</Link>
  <Link to="/launches" className="navbar-item">Launches</Link>
    </nav>
    </>
  )
}

export default Navbar