const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');

// Function to check the page and send email if needed
const checkPage = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the website
  await page.goto('https://in.bookmyshow.com/hyderabad/movies/saripodhaa-sanivaaram/ET00388631', { waitUntil: 'load' });

  // Get the full HTML content of the page
  const pageContent = await page.content();
  
  // Check if "Book tickets" is in the HTML content
  const isBookTicketsPresent = pageContent.includes('Book tickets');

  // Print the result
  if (isBookTicketsPresent) {
    console.log("The text 'Book tickets' is present on the page.");

    // Create a transporter object using your SMTP server details
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: "abhiramnanabolu@gmail.com", // Email user from environment variables
        pass: "jefkzasodxkryvru"  // Email password or app password from environment variables
      }
    });

    // Set up email data
    let mailOptions = {
      from: "abhiramnanabolu@gmail.com",
      to: 'choosenonion@gmail.com',
      subject: 'Book Tickets Alert' + Date.now(),
      text: "The text 'Book tickets' is present on the page."
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error occurred:', error);
      }
      console.log('Email sent:', info.response);
    });
  } else {
    console.log("The text 'Book tickets' is not present on the page.");
  }

  await browser.close();
};
// Run the checkPage function every 30 seconds
setInterval(checkPage, 600000);
