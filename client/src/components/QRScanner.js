/* eslint-disable */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import '../styles/QrScannerPage.css'; 

const QRScanner = () => {
  const webcamRef = useRef(null);
  const [scanError, setScanError] = useState(null);

  const handleScan = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            window.location.href = code.data; 
          }
        };
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(handleScan, 1000); // Scan every second
    return () => clearInterval(interval);
  }, [handleScan]);

  const videoConstraints = {
    facingMode: { exact: "environment" } // Use back camera
  };

  return (
    <div className="qr-scanner-container">
      <h2>Scan QR</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{ width: '100%', height: 'auto' }} 
      />
      {scanError && <p style={{ color: 'red' }}>{scanError}</p>}
    </div>
  );
};

export default QRScanner;