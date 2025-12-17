```
import '../App.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="headerClass">
            {/* Top Bar */}
            <div className='topBar'>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="contactInfo">
                        <span><i className="fas fa-envelope"></i> info@accurateiso.com</span>
                        <span><i className="fas fa-phone"></i> +1 872 20000 32</span>
                    </div>
                    <div className="socialIcons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className='navbar'>
                <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div className="logo">
                        ACCURATE GLOBAL
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="dropdown">
                            <Link to="/#about">About <i className="fas fa-chevron-down"></i></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#">Introduction</Link></li>
                                <li><Link to="#">Accreditation</Link></li>
                                <li><Link to="#">Certification Process</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="/useful-links">ISO Certifications <i className="fas fa-chevron-down"></i></Link>
                             <ul className="dropdown-menu">
                                <li><Link to="#">ISO 9001:2015</Link></li>
                                <li><Link to="#">ISO 14001:2015</Link></li>
                                <li><Link to="#">ISO 45001:2018</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#">Services <i className="fas fa-chevron-down"></i></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#">CE Marking</Link></li>
                                <li><Link to="#">HACCP</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/apply-for-training">Training</Link></li>
                        <li className="dropdown">
                             <Link to="#">Customers <i className="fas fa-chevron-down"></i></Link>
                             <ul className="dropdown-menu">
                                <li><Link to="/certification-verification">Certification Verification</Link></li>
                                <li><Link to="/apply-for-certification">Apply For Certification</Link></li>
                                <li><Link to="/apply-for-training">Apply For Training</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#">Work with us</Link></li>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="/#contact" className="btn-contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
```
