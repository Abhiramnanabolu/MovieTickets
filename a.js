const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the website
  await page.goto('https://in.bookmyshow.com/hyderabad/movies/devara-part-1/ET00310216', { waitUntil: 'load' });

  // Get the full HTML content of the page
  const pageContent = await page.content();
  
  // Check if "Book tickets" is in the HTML content
  const isBookTicketsPresent = pageContent.includes('Book tickets');

  // Print the result
  if (isBookTicketsPresent) {
    console.log("The text 'Book tickets' is present on the page.");
  } else {
    console.log("The text 'Book tickets' is not present on the page.");
  }

  await browser.close();
})();
