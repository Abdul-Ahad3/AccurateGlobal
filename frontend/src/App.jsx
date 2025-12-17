import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UsefulLinks from './pages/UsefulLinks';
import CertificationVerification from './pages/CertificationVerification';
import ApplyForCertification from './pages/ApplyForCertification';
import ApplyForTraining from './pages/ApplyForTraining';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useful-links" element={<UsefulLinks />} />
          <Route path="/certification-verification" element={<CertificationVerification />} />
          <Route path="/apply-for-certification" element={<ApplyForCertification />} />
          <Route path="/apply-for-training" element={<ApplyForTraining />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
