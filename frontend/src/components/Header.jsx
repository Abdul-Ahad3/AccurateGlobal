import '../App.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerClass">
      {/* Top Bar */}
      <div className='topBar'>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">
            ACCURATE GLOBAL
          </div>
          <div className="contactInfo">
            <span><i className="fas fa-phone"></i> +1 872 20000 32</span>
            <span><i className="fas fa-envelope"></i> info@accurateiso.com</span>
          </div>
          <div className="socialIcons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='navbar'>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" style={{ color: "red" }}>Home</Link></li>
            <li className="nav-item">
              <Link to="/#about">About  <i className="fas fa-chevron-down" /></Link>
              <ul className="dropdown">
                <li><Link to="#">Introduction</Link></li>
                <li><Link to="#">Accreditation</Link></li>
                <li><Link to="#">Certification Process</Link></li>
                <li><Link to="#">Quality & Impartial Policy</Link></li>
                <li><Link to="#">Appeal & Complaint Handling</Link></li>
                <li><Link to="#">Suspension & Withdraw</Link></li>
                <li><Link to="#">Certification Rules</Link></li>
                <li><Link to="#">Logo Rules</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/useful-links">ISO Certifications  <i className="fas fa-chevron-down" /></Link>
              <ul className="dropdown">
                <li><Link to="#">ISO 9001:2015</Link></li>
                <li><Link to="#">ISO 14001:2015</Link></li>
                <li><Link to="#">ISO 45001:2018</Link></li>
                <li><Link to="#">ISO/IEC 27001:2022</Link></li>
                <li><Link to="#">ISO 50001:2018</Link></li>
                <li><Link to="#">ISO 22000:2018</Link></li>
                <li><Link to="#">ISO/IEC 20000-1:2018</Link></li>
                <li><Link to="#">ISO 37001:2016</Link></li>
                <li><Link to="#">ISO 13485:2016</Link></li>
                <li><Link to="#">ISO 42001:2023</Link></li>
                <li><Link to="#">ISO 22301:2019</Link></li>
                <li><Link to="#">ISO/IEC 27701:2019</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="#">Services  <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown">
                <li className="nav-item">
                  <Link to="#">Compliance Certificate  <i className="fas fa-chevron-right" /></Link>
                  <ul className='dropdown sub-dropdown'>
                    <li><Link to="#">CE Marking</Link></li>
                    <li><Link to="#">HACCP</Link></li>
                    <li><Link to="#">GMP</Link></li>
                    <li><Link to="#">RoHS</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Governance Risk & Compliance</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/apply-for-training">Training</Link></li>
            <li className="nav-item">
              <Link to="#">Customers  <i className="fas fa-chevron-down" /></Link>
              <ul className="dropdown">
                <li><Link to="/certification-verification">Certification Verification</Link></li>
                <li><Link to="/apply-for-certification">Apply For Certification</Link></li>
                <li><Link to="/apply-for-training">Apply For Training</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="#">Work with us</Link></li>
            <li className="nav-item"><Link to="#">Blog</Link></li>
            <li className="nav-item"><Link to="/#contact" className="btn-contact" style={{backgroundColor: "var(--color-secondary-red)", color: "white"}}>Contact  <i className="fas fa-chevron-right" /></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;

