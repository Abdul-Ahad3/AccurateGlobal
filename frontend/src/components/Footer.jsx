import '../App.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footerClass" style={{ backgroundImage: 'url(https://accurateiso.com/wp-content/uploads/2025/04/footer-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#000' }}>
            <div className='fRow'>
                <div className='boxDiv'>
                    <h3>About</h3>
                    <p>Acurate Global Inc. (AGI) is a globally recognized, independent certification body dedicated to enhancing quality, safety, cybersecurity and operational excellence across industries.</p>
                </div>
                <div className='boxDiv'>
                    <h3>ISO Standards</h3>
                    <ul className='lists'>
                        <li>ISO 9001:2015</li>
                        <li>ISO 14001:2015</li>
                        <li>ISO 45001:2018</li>
                        <li>ISO/IEC 27001:2022</li>
                        <li>ISO 50001:2018</li>
                        <li>ISO 22000:2018</li>
                        <li>ISO/IEC 20000-1:2018</li>
                        <li>ISO 37001:2016</li>
                        <li>ISO 13485:2016</li>
                        <li>ISO 42001:2023</li>
                        <li>ISO 22301:2019</li>
                        <li>ISO/IEC 27701:2019</li>
                    </ul>
                </div>
                <div className='boxDiv'>
                    <h3>Useful links</h3>
                    <ul className='lists'>
                        <li><Link to="/certification-verification">Certification Verification</Link></li>
                        <li><Link to="/apply-for-certification">Apply for Certification</Link></li>
                        <li><Link to="/apply-for-training">Apply for Training</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className='boxDiv'>
                    <h3>Get in Touch</h3>
                    <dl className='lists contact-info'>
                        <dt>Address:</dt>
                        <dd>1-Tiffany Pointe, Suite G7 Bloomingdale, Chicago, IL, 60108 United States of America</dd>

                        <dt>Phone:</dt>
                        <dd>+1 872 20000 32</dd>

                        <dt>Email:</dt>
                        <dd>info@accurateiso.com</dd>
                    </dl>
                </div>
            </div>

            <div className='fBottom'>
                <i className="far fa-copyright" /> All Rights Reserved | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-use">Terms & Conditions</Link>
            </div>

        </div>
    )
}

export default Footer;
