import React from 'react';

const ApplyForCertification = () => {
    return (
        <div className="container section-padding">
            <h1 style={{ color: 'var(--color-primary-blue)', marginBottom: '30px' }}>Apply For Certification</h1>
            <p style={{ marginBottom: '30px' }}>Fill out the form below to apply for ISO certification.</p>

            <div style={{ maxWidth: '700px', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
                <form style={{ display: 'grid', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Company Name</label>
                            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Contact Person</label>
                            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                            <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone Number</label>
                            <input type="tel" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Standard(s) Required</label>
                        <select style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                            <option>ISO 9001</option>
                            <option>ISO 14001</option>
                            <option>ISO 45001</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message / Requirements</label>
                        <textarea rows="4" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default ApplyForCertification;
