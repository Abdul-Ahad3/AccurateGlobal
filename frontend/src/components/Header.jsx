import '../App.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerClass">
      <div className='titleBar'>ACCURATE GLOBAL</div>
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/useful-links">ISO Certifications</Link></li>
          <li>Services</li>
          <li><Link to="/apply-for-training">Training</Link></li>
          <li>Customers</li>
          <li>Work with Us</li>
          <li>Blog</li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
