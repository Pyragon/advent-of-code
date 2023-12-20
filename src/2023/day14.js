const ProgressBar = require('progress');

function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[0].length; x++) {
            grid[y][x] = split[y][x];
        }
    }
    tilt(grid, 'N');
    let total = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] == 'O') total += grid.length - y;
        }
    }
    console.log(total);
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let row = '';
        for (let x = 0; x < grid[0].length; x++) {
            row += grid[y][x];
        }
        console.log(row);
    }

}

function tilt(grid, direction) {
    if (direction == 'N') {
        //tilt to the north
        for (let y = 0; y < grid.length; y++) {
            x: for (let x = 0; x < grid[0].length; x++) {
                if (grid[y][x] == 'O' || grid[y][x] == '#') continue;
                for (let i = y + 1; i < grid.length; i++) {
                    if (grid[i][x] == '.') continue;
                    if (grid[i][x] == '#') continue x;
                    //must be a rock
                    grid[y][x] = 'O';
                    grid[i][x] = '.';
                    continue x;
                }
            }
        }
    } else if (direction == 'S') {
        //tilt to the south
        for (let y = grid.length - 1; y >= 0; y--) {
            x: for (let x = 0; x < grid[0].length; x++) {
                if (grid[y][x] == 'O' || grid[y][x] == '#') continue;
                for (let i = y - 1; i >= 0; i--) {
                    if (grid[i][x] == '.') continue;
                    if (grid[i][x] == '#') continue x;
                    //must be a rock
                    grid[y][x] = 'O';
                    grid[i][x] = '.';
                    continue x;

                }
            }
        }
    } else if (direction == 'E') {
        for (let x = grid[0].length - 1; x >= 0; x--) {
            y: for (let y = 0; y < grid.length; y++) {
                if (grid[y][x] == 'O' || grid[y][x] == '#') continue;
                for (let i = x - 1; i >= 0; i--) {
                    if (grid[y][i] == '.') continue;
                    if (grid[y][i] == '#') continue y;
                    grid[y][x] = 'O';
                    grid[y][i] = '.';
                    continue y;
                }
            }
        }
    } else if (direction == 'W') {
        for (let x = 0; x < grid[0].length; x++) {
            y: for (let y = 0; y < grid.length; y++) {
                if (grid[y][x] == 'O' || grid[y][x] == '#') continue;
                for (let i = x + 1; i < grid[0].length; i++) {
                    if (grid[y][i] == '.') continue;
                    if (grid[y][i] == '#') continue y;
                    grid[y][x] = 'O';
                    grid[y][i] = '.';
                    continue y;
                }
            }
        }

    }
}

function part2(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[0].length; x++) {
            grid[y][x] = split[y][x];
        }
    }
    //definitely need to find a different way to do this.
    for (let i = 0; i < 1000000000; i++) {
        tilt(grid, 'N');
        tilt(grid, 'W');
        tilt(grid, 'S');
        tilt(grid, 'E');
    }
    let total = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] == 'O') total += grid.length - y;
        }
    }
    console.log(total);
}

module.exports = { part1, part2 };