import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Updated import
import './App.css';

function App() {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = () => {
    if (!upiId || !amount) {
      alert('Please enter UPI ID and amount.');
      return;
    }

    const url = `upi://pay?pa=${upiId}&pn=MerchantName&am=${amount}&cu=INR`;
    setQrCodeUrl(url);
  };

  return (
    <div className="App">
      <h1>Generate PhonePe Payment QR Code</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter UPI ID"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={generateQRCode}>Generate QR Code</button>
      </div>
      {qrCodeUrl && (
        <div className="qr-code">
          <QRCodeSVG value={qrCodeUrl} />
        </div>
      )}
    </div>
  );
}

export default App;
