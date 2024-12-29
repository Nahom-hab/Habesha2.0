import QRCode from 'qrcode';

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Habesha</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
            color: #333;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h1 {
            color: #A78C6E;
        }
    </style>
</head>
<body>
    <h1>Welcome to Habesha</h1>
    <p>
        Habesha is dedicated to delivering exceptional services and products to our community. Our mission is to combine tradition and innovation to create unforgettable experiences.
    </p>
    <img src="https://example.com/your-image.jpg" alt="Habesha Company">
    <p>
        With years of experience, we pride ourselves on quality and trust. Thank you for being part of our journey!
    </p>
</body>
</html>
`;

// Encode as data URI
const dataUri = `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;

// Generate the QR Code
QRCode.toFile('./qrcode.png', dataUri, { errorCorrectionLevel: 'H' }, (err) => {
    if (err) throw err;
    console.log('Offline QR Code generated and saved as qrcode.png!');
});
