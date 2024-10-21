import React, { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const BusinessCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
  });

  const qrRef = useRef(null);

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

  // Function to download QR code as PNG
  // const handleDownload = () => {
  //   const svgElement = qrRef.current.querySelector("svg");
  //   const svgData = new XMLSerializer().serializeToString(svgElement);
  //   const canvas = document.createElement("canvas");
  //   const img = document.createElement("img");

  //   img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  //   img.onload = () => {
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     const ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);

  //     // Create a temporary anchor element to trigger the download
  //     const pngFile = canvas.toDataURL("image/png");
  //     const downloadLink = document.createElement("a");
  //     downloadLink.href = pngFile;
  //     downloadLink.download = "business-card-qr.png";
  //     downloadLink.click();
  //   };
  // };

  const handleDownload = () => {
    const svgElement = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const img = document.createElement("img");

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    img.onload = () => {
      const padding = 20; // Add padding around the QR code
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;

      const ctx = canvas.getContext("2d");
      // Fill the canvas with white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw the QR code image on top of the white background with padding
      ctx.drawImage(img, padding, padding);

      // Create a temporary anchor element to trigger the download
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "business-card-qr.png";
      downloadLink.click();
    };
  };

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
      <div ref={qrRef} style={{ marginTop: "80px" }} className="qr-section">
        <QRCodeSVG value={qrData} bgColor="#ffffff" fgColor="#000000" />
      </div>
      <button style={{ marginTop: "20px" }} onClick={handleDownload}>
        Download QR Code
      </button>
    </div>
  );
};

export default BusinessCard;
