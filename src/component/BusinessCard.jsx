import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const BusinessCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  // vCard formatted string with proper line breaks
  const qrData = `BEGIN:VCARD\nVERSION:3.0\nFN:${formData.name}\nORG:${formData.company}\nTEL:${formData.phone}\nEMAIL:${formData.email}\nURL:${formData.website}\nEND:VCARD`;

  console.log("Generated QR Data:", qrData);

  return (
    <div>
      <h2>Business Card QR Code Generator</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          placeholder="Enter your company name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          placeholder="Enter your website URL"
          onChange={handleChange}
        />
      </form>
      <div style={{ marginTop: "80px" }} className="qr-section">
        <QRCodeSVG value={qrData} />
      </div>
    </div>
  );
};

export default BusinessCard;
