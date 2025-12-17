import React from 'react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{ backgroundColor: '#08227A', color: 'white', padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Accredited ISO Certification and Professional Training</h1>
                    <p style={{ fontSize: '18px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
                        We provide world-class ISO certification and training services to help your business achieve excellence and compliance.
                    </p>
                    <button className="btn btn-primary">Book Appointment</button>
                </div>
            </section>

            {/* Services Summary */}
            <section className="section-padding">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '40px', color: 'var(--color-primary-blue)' }}>Our Services</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '15px' }}>Certification Services</h3>
                            <p>Comprehensive ISO certification services for various standards.</p>
                        </div>
                        <div style={{ padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '15px' }}>Professional Training</h3>
                            <p>Expert training programs for individuals and corporate teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ color: 'var(--color-primary-blue)', marginBottom: '20px' }}>Welcome to Accurate Global</h2>
                            <p style={{ marginBottom: '20px', color: '#555' }}>
                                Accurate Global INC is a leading provider of management system certification and training. We are committed to adding value to your business through our expert auditing and training services.
                            </p>
                            <button className="btn btn-secondary">Read More</button>
                        </div>
                        <div style={{ flex: 1, height: '300px', backgroundColor: '#ddd', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ color: '#888' }}>[Image Placeholder]</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="section-padding">
                <div className="container">
                    <h2 style={{ textAlign: 'center', color: 'var(--color-primary-blue)', marginBottom: '40px' }}>ISO Certification Portfolio</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
                        {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'ISO 22000', 'ISO 13485'].map(iso => (
                            <div key={iso} style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333' }}>{iso}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ backgroundColor: 'var(--color-primary-blue)', color: 'white', padding: '60px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '40px' }}>2500+</h3>
                        <p>Active Clients</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '40px' }}>5000+</h3>
                        <p>Certifications Issued</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '40px' }}>150+</h3>
                        <p>Expert Auditors</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
