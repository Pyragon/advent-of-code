const fs = require('fs');
const readline = require('readline');
const path = require('path');

var def_year = 2018;
var def_day = 9;

if (def_year !== undefined && def_day !== undefined) {
    try {
        var p = path.join(__dirname, 'src', def_year.toString(), `day${def_day}.js`);
        var mod = require(p);
        fs.readFile(`inputs/${def_year}/${def_day}.txt`, 'utf8', (err, contents) => {
            if (err) {
                console.error(`Cannot find input for advent year ${def_year} day ${def_day}`);
                return;
            }
            var spl = contents.split(/\r?\n/);
            if (spl[spl.length - 1].trim() == '') spl.splice(-1, 1);
            mod.part1(contents, spl);
            mod.part2(contents, spl);
        });
    } catch (err) {
        console.error(err);
        console.error(`Cannot find advent year ${def_year} day ${def_day}`);
    }
    return;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What year would you like to run? ', (year) => {

    if (isNaN(year)) {
        console.error('Year must be a number! ' + year);
        rl.close();
        return;
    }

    rl.question('What day would you like to run? ', (day) => {

        if (isNaN(day)) {
            console.error('Day must be a number!');
            rl.close();
            return;
        }

        try {
            var p = path.join(__dirname, 'src', year, `day${day}.js`);
            var mod = require(p);
            fs.readFile(`inputs/${year}/${day}.txt`, 'utf8', (err, contents) => {
                if (err) {
                    console.error(`Cannot find input for advent year ${year} day ${day}`);
                    rl.close();
                    return;
                }
                var spl = contents.split(/\r?\n/);
                mod.part1(contents, spl);
                mod.part2(contents, spl);
            });
        } catch (err) {
            console.error(`Cannot find advent year ${year} day ${day}`);
            rl.close();
            return;
        }

        rl.close();

    });

});