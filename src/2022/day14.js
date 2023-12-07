function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < 300; y++) {
        if (!grid[y]) grid[y] = [];
        for (let x = 400; x < 700; x++) {
            grid[y][x] = '.';
        }
    }
    let highestY = 0;
    let lowestX = Number.MAX_VALUE;
    let highestX = 0;
    for (let line of split) {
        let point;
        line = line.split(' -> ');
        for (let coord of line) {
            let [x, y] = coord.split(',').map(Number);
            if (point) {
                let dx = x - point[1];
                let dy = y - point[0];
                let length = Math.max(Math.abs(dx), Math.abs(dy));
                for (let i = 0; i <= length; i++) {
                    let xStep = dx > 0 ? 1 : dx < 0 ? -1 : 0;
                    let yStep = dy > 0 ? 1 : dy < 0 ? -1 : 0;
                    let xx = point[1] + i * xStep;
                    let yy = point[0] + i * yStep;
                    if (yy > highestY)
                        highestY = yy;
                    if (xx < lowestX)
                        lowestX = xx;
                    if (xx > highestX)
                        highestX = xx;
                    grid[yy][xx] = '#';
                }
            }
            point = [y, x];
        }
    }
    let sand = [0, 500];
    let i = 0;
    while (true) {
        if (sand[0] >= highestY)
            break;
        if (grid[sand[0] + 1][sand[1]] == '#' || grid[sand[0] + 1][sand[1]] == 'o') {
            //come to a stop, check left and right
            if (grid[sand[0] + 1][sand[1] - 1] == '.') {
                sand[0]++;
                sand[1]--;
            } else if (grid[sand[0] + 1][sand[1] + 1] == '.') {
                sand[0]++;
                sand[1]++;
            } else {
                grid[sand[0]][sand[1]] = 'o';
                sand = [0, 500];
            }
        } else
            sand[0]++;
    }
    //count up all the sand
    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 400; x < grid[y].length; x++) {
            if (grid[y][x] == 'o')
                count++;
        }
    }
    // displayGrid(grid, highestY, lowestX, highestX);
    console.log('Answer to part 1: ' + count, highestY);
}

function displayGrid(grid, highestY, lowestX, highestX, sand) {
    for (let y = 0; y <= highestY; y++) {
        let line = '';
        for (let x = lowestX; x <= highestX; x++) {
            if (sand && sand[0] == y && sand[1] == x)
                line += 'o'
            else
                line += grid[y][x];
        }
        console.log(line);
    }
}

function part2(contents, split) {
    let grid = [];
    for (let y = 0; y < 600; y++) {
        if (!grid[y]) grid[y] = [];
        for (let x = 400; x < 700; x++) {
            grid[y][x] = '.';
        }
    }
    let highestY = 0;
    let lowestX = Number.MAX_VALUE;
    let highestX = 0;
    for (let line of split) {
        let point;
        line = line.split(' -> ');
        for (let coord of line) {
            let [x, y] = coord.split(',').map(Number);
            if (point) {
                let dx = x - point[1];
                let dy = y - point[0];
                let length = Math.max(Math.abs(dx), Math.abs(dy));
                for (let i = 0; i <= length; i++) {
                    let xStep = dx > 0 ? 1 : dx < 0 ? -1 : 0;
                    let yStep = dy > 0 ? 1 : dy < 0 ? -1 : 0;
                    let xx = point[1] + i * xStep;
                    let yy = point[0] + i * yStep;
                    if (yy > highestY)
                        highestY = yy;
                    if (xx < lowestX)
                        lowestX = xx;
                    if (xx > highestX)
                        highestX = xx;
                    grid[yy][xx] = '#';
                }
            }
            point = [y, x];
        }
    }
    let sand = [0, 500];
    let i = 0;
    let sandCount = 0;
    while (true) {
        if (grid[sand[0] + 1][sand[1]] == '#' || grid[sand[0] + 1][sand[1]] == 'o' || sand[0] >= highestY + 1) {
            //come to a stop, check left and right
            if (grid[sand[0] + 1][sand[1] - 1] == '.') {
                sand[0]++;
                sand[1]--;
            } else if (grid[sand[0] + 1][sand[1] + 1] == '.') {
                sand[0]++;
                sand[1]++;
            } else {
                grid[sand[0]][sand[1]] = 'o';
                if (sand[1] < lowestX)
                    lowestX = sand[1];
                if (sand[1] > highestX)
                    highestX = sand[1];
                sandCount++;
                if (sand[0] == 0 && sand[1] == 500)
                    break;
                sand = [0, 500];
            }
        } else
            sand[0]++;
    }
    // displayGrid(grid, highestY + 1, lowestX - 5, highestX + 5);
    console.log(sand);
    console.log('Answer to part 2: ' + sandCount, highestY);
}

module.exports = { part1, part2 };