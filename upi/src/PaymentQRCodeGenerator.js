import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const PaymentQRCodeGenerator = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = () => {
    const url = `upi://pay?pa=${upiId}&pn=Merchant69583
    Name&am=${amount}&cu=INR`;
    setQrCodeUrl(url);
  };

  return (
    <div>
      <h1>Generate Payment QR Code</h1>
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
      {qrCodeUrl && <QRCode value={qrCodeUrl} />}
    </div>
  );
};

export default PaymentQRCodeGenerator;
