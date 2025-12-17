import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111', color: '#fff', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>

                    {/* About */}
                    <div>
                        <h3 style={{ marginBottom: '20px', color: 'var(--color-secondary-red)' }}>AccurateISO</h3>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>
                            Accredited ISO Certification and Professional Training services.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Useful Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#aaa' }}>
                            <li style={{ marginBottom: '10px' }}><Link to="/useful-links">ISO Certifications</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/terms-of-use">Terms of Use</Link></li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Tools</h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#aaa' }}>
                            <li style={{ marginBottom: '10px' }}><Link to="/certification-verification">Certification Verification</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/apply-for-certification">Apply For Certification</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/apply-for-training">Apply For Training</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/login">Login</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Contact Us</h4>
                        <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '10px' }}>
                            <strong>Email:</strong> info@accurateiso.com
                        </p>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>
                            <strong>Phone:</strong> +1 872 20000 32
                        </p>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: '#777' }}>
                    <p>&copy; {new Date().getFullYear()} Accurate Global INC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
