import './App.css'

function Footer(){
    return(
        <div className="footerClass">
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
                        <li>Certification Verification</li>
                        <li>Apply for Certification</li>
                        <li>Apply for Training</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className='boxDiv'>
                    <h3>Get in Touch</h3>
                    <dl className='lists'>
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
                All Rights Reserved | Privacy Policy | Terms & Conditions
            </div>
            
        </div>
    )
}

export default Footer;