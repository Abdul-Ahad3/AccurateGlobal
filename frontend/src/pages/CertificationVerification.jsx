import React from 'react';

const CertificationVerification = () => {
    return (
        <div className="container section-padding">
            <h1 style={{ color: 'var(--color-primary-blue)', marginBottom: '30px' }}>Certification Verification</h1>
            <p style={{ marginBottom: '30px' }}>Please enter the certificate number to verify the status.</p>

            <div style={{ maxWidth: '500px', margin: '0 0', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Certificate Number</label>
                        <input
                            type="text"
                            placeholder="Enter Certificate Number"
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Verify</button>
                </form>
            </div>
        </div>
    );
};

export default CertificationVerification;
