import React from 'react';

const TermsOfUse = () => {
    return (
        <div className="container section-padding">
            <h1 style={{ color: 'var(--color-primary-blue)', marginBottom: '20px' }}>Terms Of Use</h1>
            <div style={{ color: '#555', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '15px' }}>
                    By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations.
                </p>
                <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>1. License to Use</h3>
                <p style={{ marginBottom: '15px' }}>
                    Permission is granted to temporarily download one copy of the materials on Accurate Global's website for personal, non-commercial transitory viewing only.
                </p>
                <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>2. Disclaimer</h3>
                <p style={{ marginBottom: '15px' }}>
                    The materials on Accurate Global's website are provided on an 'as is' basis. Accurate Global makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
                <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
                    (This is arbitrary text for demonstration purposes.)
                </p>
            </div>
        </div>
    );
};

export default TermsOfUse;
