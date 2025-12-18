import React from 'react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                backgroundImage: 'url(https://accurateiso.com/wp-content/uploads/2025/10/Hero-Section-Home-page-Image-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '120px 0',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(5, 23, 71, 0.7)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
                        {/* Left Column: Text & Buttons */}
                        <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
                            <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>Accredited ISO Certification and<br />Professional Training!</h1>
                            <p style={{ fontSize: '24px', marginBottom: '30px', fontWeight: '300' }}>
                                Delivering Excellence through Internationally Accredited Management System
                            </p>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <button className="btn btn-primary" style={{ fontSize: '16px', padding: '12px 30px' }}>Apply for Certitifacte <i className="fas fa-chevron-right" /></button>
                                <a href="/apply-for-training" className="btn btn-secondary" style={{ fontSize: '16px', padding: '12px 30px', textDecoration: 'none', display: 'inline-block' }}>Apply for Training <i className="fas fa-chevron-right" /></a>
                            </div>
                        </div>

                        {/* Right Column: Inquiry Form */}
                        <div style={{ flex: '0 0 400px', maxWidth: '100%', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'}}>
                            <p style={{ fontSize: '14px', marginBottom: '10px', fontWeight: '300',  color: '#565656ff', textAlign: 'center'}}>
                                Free Consultation
                            </p>
                            <h3 style={{ color: '#333', marginBottom: '20px', textAlign: 'center', fontSize: '22px' }}>Book Appointment</h3>
                            <form>
                                <div style={{ marginBottom: '15px' }}>
                                    <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }} required />
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }} required />
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <select style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box', color: '#555' }}>
                                        <option value="">Select ISO Certificate</option>
                                        <option value="ISO 9001:2015">ISO 9001:2015</option>
                                        <option value="ISO 14001:2015">ISO 14001:2015</option>
                                        <option value="ISO 45001:2018">ISO 45001:2018</option>
                                        <option value="ISO/IEC 27001:2022">ISO/IEC 27001:2022</option>
                                        <option value="ISO 50001:2018">ISO 50001:2018</option>
                                        <option value="ISO 22000:2018">ISO 22000:2018</option>
                                        <option value="ISO/IEC 20000-1:2018">ISO/IEC 20000-1:2018</option>
                                        <option value="ISO 37001:2016">ISO 37001:2016</option>
                                        <option value="ISO 13485:2016">ISO 13485:2016</option>
                                        <option value="ISO 42001:2023">ISO 42001:2023</option>
                                        <option value="ISO 22301:2019">ISO 22301:2019</option>
                                        <option value="ISO/IEC 27701:2019">ISO/IEC 27701:2019</option>
                                    </select>
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <textarea placeholder="Your Message" rows="3" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box', fontFamily: 'inherit' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Summary Cards - Floating overlap */}
            <section style={{ marginTop: '-140px', position: 'relative', zIndex: 3, paddingBottom: '60px' }}>
                <hr style={{ marginTop: '1px', color: '#2f3137ff' }} />
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div style={{ padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                        <h3 style={{ marginBottom: '15px', color: 'white' }}>Certification Services</h3>
                    </div>
                    <div style={{ padding: '40px', color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                        <h3 style={{ marginBottom: '15px', color: 'white' }}>Governance, Risk & Compliance</h3>
                    </div>
                    <div style={{ padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                        <h3 style={{ marginBottom: '15px', color: 'white' }}>Training & Development for Individuals and Organizations</h3>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ color: 'var(--color-secondary-red)', fontWeight: '600', letterSpacing: '1px', marginBottom: '10px' }}>ABOUT US</h4>
                            <h2 style={{ color: '#08227A', fontSize: '36px', marginBottom: '25px', lineHeight: '1.3' }}>Welcome To Accurate Global INC - Driving Excellence</h2>
                            <p style={{ marginBottom: '20px', color: '#555' }}>
                                Accurate Global INC is a leading provider of management system certification and training. We are committed to adding value to your business through our expert auditing and training services.
                            </p>
                            <p style={{ marginBottom: '30px', color: '#555' }}>
                                Our approach is pragmatic and supportive, helping you not just to comply, but to improve your business performance.
                            </p>
                            <button className="btn btn-secondary">Read More</button>
                        </div>
                        <div style={{ flex: 1, minHeight: '400px', backgroundImage: 'url(https://accurateiso.com/wp-content/uploads/2025/10/Hero-Section-Home-page-Image-1.jpg)', backgroundSize: 'cover', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            {/* Image Container using same hero image for now as placeholder for Welcome image */}
                        </div>
                    </div>
                </div>
            </section>

            {/* ISO Portfolio Section (Grid) */}
            <section className="section-padding" style={{ backgroundColor: '#F9FAFC' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h4 style={{ color: 'var(--color-secondary-red)', fontWeight: '600', letterSpacing: '1px' }}>WHAT WE DO</h4>
                        <h2 style={{ color: '#08227A', fontSize: '36px' }}>ISO Certification Portfolio</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'ISO 22000', 'ISO 13485', 'ISO 50001', 'ISO 37001'].map(iso => (
                            <div key={iso} style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
                                <div style={{ width: '60px', height: '60px', backgroundColor: '#EBF1FF', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-blue)', fontSize: '24px' }}> <i className="fas fa-certificate"></i> </div>
                                <h4 style={{ color: '#08227A', marginBottom: '10px' }}>{iso}</h4>
                                <p style={{ fontSize: '14px', color: '#777' }}>Internationally recognized standard.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audit Methodology Section */}
            <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', opacity: 0.1, zIndex: -1 }}>
                    <img src="https://accurateiso.com/wp-content/uploads/2025/04/shape01.png" alt="shape" />
                </div>
                <div className="container">
                    <h4 style={{ textAlign: 'center', color: 'var(--color-secondary-red)', fontWeight: '600' }}>PROCESS</h4>
                    <h2 style={{ textAlign: 'center', color: '#08227A', fontSize: '36px', marginBottom: '50px' }}>Our Audit Methodology</h2>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap' }}>
                        {['Customer Understanding', 'Stage-1 Audit', 'Stage-2 Audit', 'Continued Evaluation'].map((step, index) => (
                            <div key={index} style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
                                <div style={{ width: '80px', height: '80px', backgroundColor: index % 2 === 0 ? 'var(--color-secondary-red)' : 'var(--color-primary-blue)', color: 'white', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700' }}>
                                    {index + 1}
                                </div>
                                <h4 style={{ color: '#333' }}>{step}</h4>
                                <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                                    We ensure a thorough and value-adding audit process.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section with Background */}
            <section style={{
                backgroundImage: 'url(https://accurateiso.com/wp-content/uploads/2025/04/bg01.jpg)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                padding: '80px 0',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(8, 34, 122, 0.8)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center', color: 'white' }}>
                    <div>
                        <h3 style={{ fontSize: '50px', fontWeight: '700', marginBottom: '5px' }}>1,000<span style={{ fontSize: '30px', verticalAlign: 'super' }}>+</span></h3>
                        <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Active Clients</h4>
                        <p style={{ fontSize: '14px', maxWidth: '200px', margin: '0 auto', opacity: 0.9 }}>We are having active clients worldwide.</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '50px', fontWeight: '700', marginBottom: '5px' }}>100<span style={{ fontSize: '30px', verticalAlign: 'super' }}>%</span></h3>
                        <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Clients Satisfied</h4>
                        <p style={{ fontSize: '14px', maxWidth: '200px', margin: '0 auto', opacity: 0.9 }}>Our client satisfaction ratio is 100%.</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '50px', fontWeight: '700', marginBottom: '5px' }}>50<span style={{ fontSize: '30px', verticalAlign: 'super' }}>+</span></h3>
                        <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Countries</h4>
                        <p style={{ fontSize: '14px', maxWidth: '200px', margin: '0 auto', opacity: 0.9 }}>We have worldwide network in many countries.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
