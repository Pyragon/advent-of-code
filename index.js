const fs = require('fs');
const path = require('path');

let args = process.argv.slice(2).map(Number);

async function start() {

    let year = parseInt(args[0] || 0);
    let day = parseInt(args[1] || 0);

    let p = path.join(__dirname, 'src', year.toString(), `day${day}.js`);
    let mod = require(p);

    try {
        let input = await fs.readFileSync(`./inputs/${year}/${day}.txt`, 'utf8');
        let split = input.split(/\r?\n/);
        if (split[split.length - 1].trim() == '') split.splice(-1, 1);
        mod.part1(input, split);
        mod.part2(input, split);
    } catch (e) {
        console.error(e);
        return;
    }
}

start();