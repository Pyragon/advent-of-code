function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[0].length; x++) {
            grid[y][x] = split[y][x];
        }
    }
    printGrid(grid);
    let lasers = [{
        x: 0,
        y: 0,
        dx: 1,
        dy: 0
    }];
    while (true) {
        for (let idx in lasers) {
            let laser = lasers[idx];
            //keep going until we hit a splitter or directional
            let [x, y] = [laser.x, laser.y];
            let [dx, dy] = [laser.dx, laser.dy];
            while (true) {
                x += dx;
                y += dy;
                if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) {
                    console.log('we hit a wall');
                    break;
                }
                let char = grid[y][x];
                if (char == '.') continue;
                if (char == '/') {
                    if (dx == 1)
                        [dx, dy] = [0, -1];
                    else if (dy == -1)
                        [dx, dy] = [1, 0];
                    else if (dx == -1)
                        [dx, dy] = [0, 1];
                    else if (dy == 1)
                        [dx, dy] = [-1, 0];
                } else if (char == '\\') {
                    if (dx == 1)
                        [dx, dy] = [0, 1];
                    else if (dy == -1)
                        [dx, dy] = [-1, 0];
                    else if (dx == -1)
                        [dx, dy] = [0, -1];
                    else if (dy == 1)
                        [dx, dy] = [1, 0];
                } else if (char == '-') {
                    if (dx == 1 || dx == -1) continue;
                    if (dy == 1 || dy == -1) {
                        laser
                    }
                }
            }
        }
    }
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let line = '';
        for (let x = 0; x < grid[0].length; x++) {
            line += grid[y][x];
        }
        console.log(line);
    }
}

function part2(contents, split) {
    let [y, x] = [0, 0];
}

module.exports = { part1, part2 };