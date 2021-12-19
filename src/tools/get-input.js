let axios = require('axios');
const fs = require('fs');
const props = require('./../../data/props.json');

let args = process.argv.slice(2).map(Number);
downloadInput(args[0], args[1], props.session);

async function downloadInput(year, day, session) {

    //connect with cookie or whatever, and get the input
    let url = `https://adventofcode.com/${year}/day/${day}/input`;
    let options = {
        url,
        method: 'GET',
        headers: {
            Cookie: 'session=' + session
        }
    }

    let result = await axios.request(options);
    //write data to file
    await fs.writeFileSync(`./inputs/${year}/${day}.txt`, result.data);
    return;

}

module.exports = downloadInput;