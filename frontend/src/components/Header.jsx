import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '10px 0', fontSize: '14px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ marginRight: '15px' }}> <i className="fas fa-envelope"></i> info@accurateiso.com</span>
            <span> <i className="fas fa-phone"></i> +1 872 20000 32</span>
          </div>
          <div>
            {/* Social Icons Placeholder */}
            <span>Facebook | LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div style={{ backgroundColor: 'var(--color-primary-blue)', padding: '15px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Placeholder */}
          <Link to="/" style={{ color: 'white', fontSize: '24px', fontWeight: '700' }}>
            AccurateISO
          </Link>

          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
              <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
              <li><Link to="/#about" style={{ color: 'white' }}>About</Link></li>
              <li><Link to="/useful-links" style={{ color: 'white' }}>Useful Links</Link></li>
              <li><Link to="/apply-for-training" style={{ color: 'white' }}>Training</Link></li>
              <li><Link to="/#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
