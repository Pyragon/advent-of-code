function part1(contents, split) {
    let cycle = 0;
    let register = 1;
    let checkPoints = [20, 60, 100, 140, 180, 220];
    let results = [];
    for (let line of split) {
        line = line.split(' ');
        if (line[0] == 'noop') {
            cycle++;
            if (checkPoints.includes(cycle))
                results.push(register * cycle);
        } else if (line[0] == 'addx') {
            cycle++;
            if (checkPoints.includes(cycle))
                results.push(register * cycle);
            cycle++;
            if (checkPoints.includes(cycle))
                results.push(register * cycle);
            register += Number(line[1]);
        }
    }
    console.log('Answer to part 1: ' + results.reduce((a, b) => a + b, 0));
}

function part2(contents, split) {
    let cycle = 0;
    let register = 1;
    let results = [];
    for (let line of split) {
        line = line.split(' ');
        let y = Math.floor(cycle / 40);
        let x = cycle % 40;
        if (!results[y]) results[y] = [];
        if ((x == register - 1) || (x == register) || (x == register + 1))
            results[y][x] = '#';
        else
            results[y][x] = '.';
        if (line[0] == 'noop') {
            cycle++;
        } else if (line[0] == 'addx') {
            cycle++;
            y = Math.floor(cycle / 40);
            x = cycle % 40;
            if (!results[y]) results[y] = [];
            if ((x == register - 1) || (x == register) || (x == register + 1))
                results[y][x] = '#';
            else
                results[y][x] = '.';
            cycle++;
            register += Number(line[1]);
        }
    }
    console.log('Answer to part 2:');
    for (let y = 0; y < results.length; y++) {
        let line = '';
        for (let x = 0; x < results[y].length; x++) {
            line += results[y][x];
        }
        console.log(line);
    }
}

module.exports = { part1, part2 };