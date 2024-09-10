const axios = require('axios');
const cheerio = require('cheerio');

async function checkForBookNowButton(url) {
    try {
        // Fetch the webpage
        const { data } = await axios.get(url);
        // Load the HTML into cheerio
        const $ = cheerio.load(data);

        // Check for the presence of the button with 'Book Now' text
        const button = $('button:contains("Book Now")');
        if (button.length > 0) {
            console.log("Book Now button found!");
        } else {
            console.log("Book Now button not found.");
        }
    } catch (error) {
        console.error("Error fetching webpage:", error);
    }
}

checkForBookNowButton('https://in.bookmyshow.com/hyderabad/movies/devara-part-1/ET00310216');
