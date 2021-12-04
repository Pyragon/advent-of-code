let axios = require('axios');
const fs = require('fs');

let args = process.argv.slice(2).map(Number);
downloadInput(args[0], args[1]);

async function downloadInput(year, day) {

    //connect with cookie or whatever, and get the input
    let url = `https://adventofcode.com/${year}/day/${day}/input`;
    let options = {
        url,
        method: 'GET',
        headers: {
            Cookie: 'session=53616c7465645f5fcb40c952c5a95af199936524d6aa6cf87006632dc9d09b3271205002a25070a8a45e0a515d602a21'
        }
    }

    let result = await axios.request(options);
    //write data to file
    await fs.writeFileSync(`./inputs/${year}/${day}.txt`, result.data);
    return;

}