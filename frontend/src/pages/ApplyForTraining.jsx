import React from 'react';

const ApplyForTraining = () => {
    return (
        <div className="container section-padding">
            <h1 style={{ color: 'var(--color-primary-blue)', marginBottom: '30px' }}>Apply For Training</h1>
            <p style={{ marginBottom: '30px' }}>Register for our professional training courses.</p>

            <div style={{ maxWidth: '700px', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
                <form style={{ display: 'grid', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                            <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Course Interested In</label>
                        <select style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                            <option>Lead Auditor Course</option>
                            <option>Internal Auditor Course</option>
                            <option>Awareness Training</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Number of Participants</label>
                        <input type="number" min="1" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>

                    <button type="submit" className="btn btn-primary">Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default ApplyForTraining;
