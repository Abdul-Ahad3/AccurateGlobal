import React from 'react';

const Login = () => {
    return (
        <div className="container section-padding" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
                <h2 style={{ textAlign: 'center', color: 'var(--color-primary-blue)', marginBottom: '30px' }}>Login</h2>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Sign In</button>

                    <div style={{ textAlign: 'center', marginTop: '15px' }}>
                        <a href="#" style={{ color: 'var(--color-primary-blue)', fontSize: '14px' }}>Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
