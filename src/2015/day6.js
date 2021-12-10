function part1(contents, split) {

    let grid = [];

    for (let line of split) {

        let regex = /((turn (on|off))|toggle) (\d+),(\d+) through (\d+),(\d+)/
        let match = regex.exec(line);

        let x1 = parseInt(match[4]);
        let y1 = parseInt(match[5]);
        let x2 = parseInt(match[6]);
        let y2 = parseInt(match[7]);

        for (let y = y1; y <= y2; y++) {
            if (!grid[y]) grid[y] = [];
            for (let x = x1; x <= x2; x++) {
                if (match[1] === 'turn on')
                    grid[y][x] = true;
                else if (match[1] === 'turn off')
                    grid[y][x] = false;
                else if (match[1] === 'toggle')
                    grid[y][x] = !grid[y][x];
            }
        }
    }

    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        if (!grid[y]) continue;
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x]) count++;
        }
    }
    console.log('Answer to part 1: ' + count);
}

function part2(contents, split) {

    let grid = [];

    for (let line of split) {

        let regex = /((turn (on|off))|toggle) (\d+),(\d+) through (\d+),(\d+)/
        let match = regex.exec(line);

        let x1 = parseInt(match[4]);
        let y1 = parseInt(match[5]);
        let x2 = parseInt(match[6]);
        let y2 = parseInt(match[7]);

        for (let y = y1; y <= y2; y++) {
            if (!grid[y]) grid[y] = [];
            for (let x = x1; x <= x2; x++) {
                if (!grid[y][x]) grid[y][x] = 0;
                if (match[1] === 'turn on')
                    grid[y][x]++;
                else if (match[1] === 'turn off') {
                    grid[y][x]--;
                    if (grid[y][x] < 0) grid[y][x] = 0;
                } else if (match[1] === 'toggle')
                    grid[y][x] += 2;
            }
        }
    }

    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        if (!grid[y]) continue;
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x]) count += grid[y][x];
        }
    }
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };