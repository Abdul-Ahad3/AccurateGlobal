import React from 'react';
import { Link } from 'react-router-dom';

const UsefulLinks = () => {
    const certifications = [
        'ISO 9001:2015 - Quality Management System',
        'ISO 14001:2015 - Environmental Management System',
        'ISO 45001:2018 - Occupational Health & Safety',
        'ISO 27001:2013 - Information Security Management',
        'ISO 22000:2018 - Food Safety Management',
        'ISO 13485:2016 - Medical Devices Quality Management',
        'ISO 50001:2018 - Energy Management System',
        'ISO 37001:2016 - Anti-Bribery Management System',
    ];

    return (
        <div className="container section-padding">
            <h1 style={{ color: 'var(--color-primary-blue)', marginBottom: '30px' }}>Useful Links</h1>
            <p style={{ marginBottom: '20px' }}>Explore our range of ISO certifications and services.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {certifications.map((cert, index) => (
                    <div key={index} style={{ padding: '20px', borderLeft: '4px solid var(--color-secondary-red)', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <Link to="#" style={{ fontWeight: '500', color: '#333' }}>{cert}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsefulLinks;
