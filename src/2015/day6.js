function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < 1000; y++) {
        grid.push([]);
        for (let x = 0; x < 1000; x++) {
            grid[y].push(false);
        }
    }
    for (let line of split) {
        let match = line.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
        let [_, instr, startX, startY, endX, endY] = match;
        endX++;
        endY++;
        switch (instr) {
            case 'turn on':
                {
                    for (let y = startY; y < endY; y++) {
                        for (let x = startX; x < endX; x++) {
                            grid[y][x] = true;
                        }
                    }
                }
                break;
            case 'turn off':
                {
                    for (let y = startY; y < endY; y++) {
                        for (let x = startX; x < endX; x++) {
                            grid[y][x] = false;
                        }
                    }
                }
                break;
            case 'toggle':
                {
                    for (let y = startY; y < endY; y++) {
                        for (let x = startX; x < endX; x++) {
                            grid[y][x] = !grid[y][x];
                        }
                    }
                }
                break;
        }
    }
    let total = 0;
    for (let y = 0; y < 1000; y++) {
        for (let x = 0; x < 1000; x++) {
            if (grid[y][x]) total++;
        }
    }
    console.log('Answer to part 1:', total);
}

function part2(contents, split) {
    let grid = [];
    for (let y = 0; y < 1000; y++) {
        grid.push([]);
        for (let x = 0; x < 1000; x++) {
            grid[y][x] = 0;
        }
    }
    for (let line of split) {
        let match = line.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
        let [_, instr, startX, startY, endX, endY] = match;
        endX++;
        endY++;
        switch (instr) {
            case 'turn on':
                {
                    for (let y = startY; y < endY; y++) {
                        for (let x = startX; x < endX; x++) {
                            grid[y][x]++;
                        }
                    }
                }
                break;
            case 'turn off':
                {
                    for (let y = startY; y < endY; y++) {
                        for (let x = startX; x < endX; x++) {
                            if (grid[y][x] == 0) continue;
                            grid[y][x]--;
                        }
                    }
                }
                break;
            case 'toggle':
                {
                    for (let y = startY; y < endY; y++) {
                        for (let x = startX; x < endX; x++) {
                            grid[y][x] += 2;
                        }
                    }
                }
                break;
        }
    }
    let total = 0;
    for (let y = 0; y < 1000; y++) {
        for (let x = 0; x < 1000; x++) {
            total += grid[y][x];
        }
    }
    console.log('Answer to part 2:', total);
}

module.exports = { part1, part2 };