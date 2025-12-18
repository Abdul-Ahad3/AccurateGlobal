import React from 'react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                backgroundImage: 'url(https://accurateiso.com/wp-content/uploads/2025/10/Hero-Section-Home-page-Image-1.jpg)',
                backgroundSize: '200% auto',
                backgroundPosition: 'center',
                color: 'white',
                padding: '180px 0',
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
                        <div style={{ flex: '0 0 400px', maxWidth: '100%', backgroundColor: 'white', padding: '30px', marginRight: '0px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                            <p style={{ fontSize: '14px', marginBottom: '10px', fontWeight: '300', color: '#565656ff', textAlign: 'center' }}>
                                Free Consultation
                            </p>
                            <h3 style={{ color: '#333', marginBottom: '20px', textAlign: 'center', fontSize: '22px' }}>Book Appointment</h3>
                            <form>
                                <div style={{ marginBottom: '25px' }}>
                                    <input type="text" placeholder="Name" style={{ width: '100%', padding: '10px 15px', border: '1px solid black', borderRadius: '4px', boxSizing: 'border-box', fontSize: '18px' }} required />
                                </div>
                                <div style={{ marginBottom: '25px' }}>
                                    <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '10px 15px', border: '1px solid black', borderRadius: '4px', boxSizing: 'border-box', fontSize: '18px' }} required />
                                </div>
                                <div style={{ marginBottom: '25px' }}>
                                    <select style={{ width: '100%', padding: '10px 15px', border: '1px solid black', borderRadius: '4px', boxSizing: 'border-box', color: '#555', fontSize: '18px' }}>
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
                                <div style={{ marginBottom: '25px' }}>
                                    <textarea placeholder="Type your message here" rows="3" style={{ width: '100%', padding: '10px 15px', border: '1px solid black', borderRadius: '4px', boxSizing: 'border-box', fontFamily: 'inherit', fontSize: '18px' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. Services Banner */}
            <section style={{ backgroundColor: '#0A2A66', padding: '50px 0', color: 'white' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center' }}>
                    <div style={{ maxWidth: '300px' }}>
                        <i className="fas fa-certificate" style={{ fontSize: '40px', marginBottom: '15px', color: '#fff' }}></i>
                        <h4 style={{ fontSize: '18px', fontWeight: '600' }}>Certification Services</h4>
                    </div>
                    <div style={{ maxWidth: '300px' }}>
                        <i className="fas fa-shield-alt" style={{ fontSize: '40px', marginBottom: '15px', color: '#fff' }}></i>
                        <h4 style={{ fontSize: '18px', fontWeight: '600' }}>Governance, Risk & Compliance</h4>
                    </div>
                    <div style={{ maxWidth: '300px' }}>
                        <i className="fas fa-user-graduate" style={{ fontSize: '40px', marginBottom: '15px', color: '#fff' }}></i>
                        <h4 style={{ fontSize: '18px', fontWeight: '600' }}>Trainings & Development for Individuals and Organizations</h4>
                    </div>
                </div>
            </section>

            {/* 2. Welcome Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                        {/* Left: Text & Highlights */}
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h4 style={{ color: 'var(--color-secondary-red)', fontWeight: '600', letterSpacing: '1px', marginBottom: '10px' }}>WELCOME TO ACCURATE GLOBAL INC</h4>
                            <h2 style={{ color: '#08227A', fontSize: '36px', marginBottom: '25px', lineHeight: '1.3' }}>Driving Excellence with International Certifications</h2>
                            <p style={{ marginBottom: '30px', color: '#555', lineHeight: '1.7' }}>
                                Accurate Global INC is a leading provider of management system certification and training. We are committed to adding value to your business through our expert auditing and training services.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fas fa-check-circle" style={{ color: 'var(--color-secondary-red)', fontSize: '20px' }}></i>
                                    <span style={{ fontWeight: '600', color: '#333' }}>14 Years Experience</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fas fa-users" style={{ color: 'var(--color-secondary-red)', fontSize: '20px' }}></i>
                                    <span style={{ fontWeight: '600', color: '#333' }}>150+ Expert Auditors</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fas fa-globe" style={{ color: 'var(--color-secondary-red)', fontSize: '20px' }}></i>
                                    <span style={{ fontWeight: '600', color: '#333' }}>50+ Countries</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fas fa-smile" style={{ color: 'var(--color-secondary-red)', fontSize: '20px' }}></i>
                                    <span style={{ fontWeight: '600', color: '#333' }}>1000+ Clients</span>
                                </div>
                            </div>
                        </div>
                        {/* Right: Cards */}
                        <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderLeft: '5px solid var(--color-primary-blue)' }}>
                                <h4 style={{ fontSize: '20px', color: '#08227A', marginBottom: '10px' }}>ISO Certification</h4>
                                <p style={{ color: '#666', fontSize: '14px' }}>Accurate Global is Certification body offering renowned worldwide ISO Certification services.</p>
                            </div>
                            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderLeft: '5px solid var(--color-secondary-red)' }}>
                                <h4 style={{ fontSize: '20px', color: '#08227A', marginBottom: '10px' }}>Training & Development</h4>
                                <p style={{ color: '#666', fontSize: '14px' }}>Accurate Global provides leading training and development programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ISO Certification Grid */}
            <section className="section-padding" style={{ backgroundColor: '#F9FAFC' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ color: '#08227A', fontSize: '36px' }}>Management System Certification and Trainings</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'QMS: ISO 9001:2015', desc: 'Quality Management Systems' },
                            { title: 'EMS: ISO 14001:2015', desc: 'Environmental Management Systems' },
                            { title: 'ISO 45001:2018', desc: 'Occupational Health & Safety' },
                            { title: 'ISO 27001:2022', desc: 'Information Security Management' },
                            { title: 'ISO 50001:2018', desc: 'Energy Management Systems' },
                            { title: 'ISO 22000:2018', desc: 'Food Safety Management' }
                        ].map((item, index) => (
                            <div key={index} style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '200px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                                    <i className="fas fa-image" style={{ fontSize: '40px' }}></i> {/* Placeholder for Image */}
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h4 style={{ color: '#08227A', marginBottom: '5px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '14px', color: '#777' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Certification Process */}
            <section className="section-padding" style={{
                backgroundImage: 'url(https://accurateiso.com/wp-content/uploads/2025/04/bg01.jpg)', // Using dark bg from analysis 
                backgroundSize: 'cover',
                color: 'white'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '30px', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>We begin with identifying and understanding the client’s needs and expectations.</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        {['Customer Understanding', 'Stage-1 Audit', 'Assessing', 'Stage-2 Audit', 'Continued Evaluation'].map((step, index) => (
                            <div key={index} style={{ flex: '1', minWidth: '150px', maxWidth: '200px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid white', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '20px' }}>{index + 1}</div>
                                <h4 style={{ fontSize: '16px' }}>{step}</h4>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: '50px' }}>Our Certifications</button>
                </div>
            </section>

            {/* 5. Stats Section (User's Custom Content) */}
            <section style={{ backgroundColor: '#f4f4f4', padding: '60px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center', color: '#333' }}>
                    <div>
                        <h3 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '5px', color: '#08227A' }}>1,000<span style={{ fontSize: '24px', verticalAlign: 'super' }}>+</span></h3>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>Active Clients</h4>
                        <p style={{ fontSize: '13px', color: '#666', maxWidth: '200px', margin: '0 auto' }}>We are having active clients worldwide.</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '5px', color: '#08227A' }}>100<span style={{ fontSize: '24px', verticalAlign: 'super' }}>%</span></h3>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>Clients Satisfied</h4>
                        <p style={{ fontSize: '13px', color: '#666', maxWidth: '200px', margin: '0 auto' }}>Our client satisfaction ratio is 100%.</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '5px', color: '#08227A' }}>50<span style={{ fontSize: '24px', verticalAlign: 'super' }}>+</span></h3>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>Countries</h4>
                        <p style={{ fontSize: '13px', color: '#666', maxWidth: '200px', margin: '0 auto' }}>We have worldwide network in many countries.</p>
                    </div>
                </div>
            </section>

            {/* 6. Testimonials */}
            <section className="section-padding">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#08227A', fontSize: '36px', marginBottom: '50px' }}>What Our Clients Say</h2>
                    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ flex: 1, minWidth: '300px', padding: '30px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderRadius: '8px', backgroundColor: 'white', textAlign: 'left' }}>
                                <div style={{ color: '#FFD700', marginBottom: '15px' }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '20px' }}>"The service was exceptional and professional. Highly recommended for ISO certification."</p>
                                <h4 style={{ color: '#333', fontSize: '16px', fontWeight: '700' }}>Client Name</h4>
                                <span style={{ fontSize: '14px', color: '#888' }}>Company Ltd.</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Why Choose Us & Mission */}
            <section className="section-padding" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', marginBottom: '60px' }}>
                        <div style={{ flex: 1, minHeight: '300px', backgroundColor: '#eee', borderRadius: '8px' }}>
                            {/* Image Placeholder */}
                            <img src="https://accurateiso.com/wp-content/uploads/2025/10/Why-choose-us-image.jpg" alt="Why Choose Us" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} onError={(e) => e.target.style.display = 'none'} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ color: '#08227A', fontSize: '32px', marginBottom: '30px' }}>Why Accurate Global?</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Customer-centric approach",
                                    "Competitive, price-effective services",
                                    "Venturous and impartial maxim",
                                    "Hassle-free approach",
                                    "Sensible fees",
                                    "15,000+ days of audit experience"
                                ].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#444' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--color-primary-blue)' }}></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', backgroundColor: '#F9FAFC', padding: '40px', borderRadius: '8px' }}>
                        <h3 style={{ color: '#08227A', marginBottom: '15px' }}>Our Mission</h3>
                        <p style={{ color: '#555', marginBottom: '25px' }}>To ensure the enhancement and continual improvement in the operational and quality efficiency of our clients.</p>
                        <button className="btn btn-primary">Know More About Certifications</button>
                    </div>
                </div>
            </section>

            {/* 8. Empowerment Banner */}
            <section style={{ padding: '60px 0', backgroundColor: '#08227A', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '40px' }}>Empowering Our Customers to Succeed in International Business</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', textAlign: 'center' }}>
                        {["Commitment to Customers", "Commitment to Growth", "Commitment to Excellence", "Commitment to Certify"].map((item, i) => (
                            <div key={i} style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '20px', borderRadius: '4px', minWidth: '200px' }}>
                                <h4 style={{ fontSize: '16px', fontWeight: '500' }}>{item}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
