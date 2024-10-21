# Business Card QR Code Generator

This is a simple React application that allows users to generate a QR code for a virtual business card. The app uses the `qrcode.react` library to dynamically generate a QR code based on user inputs, which include the person's name, email, phone number, company, and website.

## Features

- Users can enter their contact information such as:
  - Name
  - Email
  - Phone
  - Company
  - Website URL
- Generates a QR code in real-time that can be scanned to retrieve the user's contact information in the form of a vCard.
- The QR code data follows the standard vCard format, allowing it to be used by various QR code readers.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **QRCode.react**: A library for generating QR codes in React.
- **JavaScript (ES6)**: Modern JavaScript features are used for the logic.
- **HTML5** and **CSS3**: For structuring and styling the components.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have **Node.js** installed. You can download it from [Node.js official site](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mahmudurbd/vcard-qr-code-generator.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd business-card-qr-generator
   ```
3. **Install dependencies::**
   ```bash
   npm install
   ```
4. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to http://localhost:5173/.
2. Enter your contact details such as Name, Email, Phone Number, Company, and Website URL in the form.
3. As you enter the details, the QR code will be generated in real-time.
4. You can scan the QR code using any QR code reader to get the vCard details.

## Example

Here’s an example of how the form looks:

- **Name**: John Doe
- **Email**: john.doe@example.com
- **Phone**: +1234567890
- **Company**: Example Inc.
- **Website**: [https://example.com](https://example.com)

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request. Contributions are welcome!
