/* eslint-disable */
import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';
import '../styles/Programs.css'; // Adjust the path if needed

const QrScannerPage = () => {
  const [scanError, setScanError] = useState(null);
  const [facingMode, setFacingMode] = useState('environment'); 
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      window.location.href = data; 
    }
  };

  const handleError = (err) => {
    console.error(err);
    setScanError(err.message);
  };

  const toggleFacingMode = () => {
    setFacingMode(prevMode => (prevMode === 'environment' ? 'user' : 'environment'));
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="qr-scanner-container">
      <h2>Scan QR</h2>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode={facingMode} 
      />
      {scanError && <p style={{ color: 'red' }}>{scanError}</p>}
      <button onClick={toggleFacingMode}>
        {facingMode === 'environment' ? 'Switch to Front Camera' : 'Switch to Back Camera'}
      </button>
      <button onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
};

export default QrScannerPage;
