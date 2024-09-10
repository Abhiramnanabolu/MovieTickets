const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless: true, // Set to true to run in headless mode
  });

  const page = await browser.newPage();

  // Navigate to the page
  await page.goto('https://in.bookmyshow.com/hyderabad/movies/saripodhaa-sanivaaram/ET00388631', {
    waitUntil: 'networkidle2', // Wait for the page to finish loading
  });

  // Check if a button with the text 'Book Now' exists
  const bookNowButtonExists = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button')); // Get all button elements
    return buttons.some(button => button.innerText.includes('Book Now')); // Check if any button contains 'Book Now'
  });

  if (bookNowButtonExists) {
    console.log('The "Book Now" button is present on the page.');
  } else {
    console.log('The "Book Now" button is not found.');
  }

  await browser.close();
})();
