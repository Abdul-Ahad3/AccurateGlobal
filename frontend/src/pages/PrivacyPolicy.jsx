import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container section-padding">
            <h1 style={{ color: 'var(--color-primary-blue)', marginBottom: '20px' }}>Privacy Policy</h1>
            <div style={{ color: '#555', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '15px' }}>
                    Welcome to the Privacy Policy of Accurate Global. This document explains how we collect, use, and protect your personal information.
                </p>
                <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>1. Information We Collect</h3>
                <p style={{ marginBottom: '15px' }}>
                    We may collect personal information such as your name, email address, phone number, and company details when you fill out forms on our website.
                </p>
                <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>2. How We Use Your Information</h3>
                <p style={{ marginBottom: '15px' }}>
                    We use your information to provide our services, respond to inquiries, and improve our website experience. We do not sell your personal data to third parties.
                </p>
                <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>3. Data Security</h3>
                <p style={{ marginBottom: '15px' }}>
                    We implement security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
                    (This is arbitrary text for demonstration purposes.)
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
