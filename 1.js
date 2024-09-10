const axios = require('axios');
const cheerio = require('cheerio');

async function checkForBookNowButton() {
    try {
        const response = await axios.get('https://in.bookmyshow.com/hyderabad/movies/devara-part-1/ET00310216', {
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-language': 'en-US,en;q=0.9',
                'cache-control': 'max-age=0',
                'if-modified-since': 'Tue, 10 Sep 2024 10:13:31 GMT',
                'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'Referer': 'https://in.bookmyshow.com/explore/home/hyderabad',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'cookie': '__cf_bm=vkDKvkNSuCifro7rCA.6KYZ9_lToWZJ9q.HFPeNdH7g-1725963111-1.0.1.1-WIZjlLgrkajC.nOUt8VChJ2DFO3MGKT3bpAgFdNMwy3UyJJ9Z_N6vkb4U90Ew9.hd7AH8t76VbhFj5CY5jA.eA; _cfuvid=uAEkLHwQiqGCygfImE2J6XcmVZye_tooaNY5G2RB3a0-1725963111639-0.0.1.1-604800000; preferences=%7B%22ticketType%22%3A%22M-TICKET%22%7D; _gcl_au=1.1.647444140.1725963109; WZRK_G=954bb432bd2e4e879b26a3d700689188; cf_clearance=FD6buZXvXd77v8EAxizPEuzvXPY.vcK.Q_qlZXZs3JU-1725963112-1.2.1.1-nvz3dN4WT1wTHSv_Ifr4E0p59JNACOr8DQ589baMKm.5FkeCTjWSpGgJWMeQDYsMdFqXnnJvxrjWwRxDoa1mxmrao45dEYRqUAq5i4XGYdqe5hsHdIBcGkNkss_ZGrD6XxV2fDe4_ZfgxeGddRtq2.apXLx45jqld5GbLed1ZrE2Ko8ThnurLkSXKQq.3_s2iEy9cz8SWAZCklqui_z.p2a.y5US_nyD52wUneEASzJcHUfgCv28slKgS2CwaozphqtnYVYP4hrBXVz3sN6rAdsDJNKt6E7I1DOpx0FVkEWS2_X9eMzw5zk2qXkcDTSu0jc0nImqua582nQowrlTjAv0r7PT8.XGaYtzPECO790lH7bLhyU9aj.69XQw5t.E'
            }
        });

        // Parse the HTML
        const $ = cheerio.load(response.data);

        // Search for a button containing "Book Now"
        const button = $('button:contains("Book Now")');
        if (button.length > 0) {
            console.log('Book Now button found!');
        } else {
            console.log('Book Now button not found.');
        }
    } catch (error) {
        console.error('Error fetching webpage:', error);
    }
}

checkForBookNowButton();
