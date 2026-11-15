function part1(contents, split) {
    let grid = [];
    for(let y = 0; y < 1000; y++) {
        grid[y] = [];
        for(let x = 0; x < 1000; x++) {
            grid[y][x] = 0;
        }
    }
    let capture = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/;
    for(let line of split) {
        let match = line.match(capture);
        if(!match) {
            console.log('Error matching line: '+line);
            return;
        }
        let action = match[1];
        let minX = Number(match[2]);
        let minY = Number(match[3]);
        let maxX = Number(match[4]);
        let maxY = Number(match[5]);
        for(let y = minY; y <= maxY; y++) {
            for(let x = minX; x <= maxX; x++) {
                grid[y][x] = action == 'toggle' ? !grid[y][x] : action == 'turn off' ? 0 : 1;
            }
        }
    }
    let ans = 0;
    for(let y = 0; y < 1000; y++) {
        for(let x = 0; x < 1000; x++) {
            if(grid[y][x] == 1) ans++;
        }
    }
    console.log('Answer to Part 1: '+ans);
}

function part2(contents, split) {
let grid = [];
    for(let y = 0; y < 1000; y++) {
        grid[y] = [];
        for(let x = 0; x < 1000; x++) {
            grid[y][x] = 0;
        }
    }
    let capture = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/;
    for(let line of split) {
        let match = line.match(capture);
        if(!match) {
            console.log('Error matching line: '+line);
            return;
        }
        let action = match[1];
        let minX = Number(match[2]);
        let minY = Number(match[3]);
        let maxX = Number(match[4]);
        let maxY = Number(match[5]);
        for(let y = minY; y <= maxY; y++) {
            for(let x = minX; x <= maxX; x++) {
                if(action == 'toggle')
                    grid[y][x] += 2;
                else if(action == 'turn on')
                    grid[y][x] += 1;
                else {
                    grid[y][x] -= 1;
                    if(grid[y][x] < 0)
                        grid[y][x] = 0;
                }
            }
        }
    }
    let ans = 0;
    for(let y = 0; y < 1000; y++) {
        for(let x = 0; x < 1000; x++) {
            ans += grid[y][x];
        }
    }
    console.log('Answer to Part 2: '+ans);
}

module.exports = { part1, part2 };