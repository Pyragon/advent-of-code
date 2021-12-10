function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        let row = [];
        for (let x = 0; x < split[y].length; x++) {
            row.push(split[y][x] == '#');
        }
        grid.push(row);
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < 100; i++) {

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                let neighbors = 0;
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        if (dx == 0 && dy == 0) {
                            continue;
                        }
                        let nx = x + dx;
                        let ny = y + dy;
                        if (nx < 0 || nx >= grid[y].length || ny < 0 || ny >= grid.length) {
                            continue;
                        }
                        if (grid[ny][nx] == true) {
                            neighbors++;
                        }
                    }
                }
                if (grid[y][x] == true)
                    newGrid[y][x] = neighbors == 2 || neighbors == 3;
                else
                    newGrid[y][x] = neighbors == 3;
            }
        }
        grid = JSON.parse(JSON.stringify(newGrid));
    }
    let total = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] == true) {
                total++;
            }
        }
    }
    console.log('Answer to part 1: ' + total);
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let row = '';
        for (let x = 0; x < grid[y].length; x++) {
            row += grid[y][x] ? '#' : '.';
        }
        console.log(row);
    }
}

function part2(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        let row = [];
        for (let x = 0; x < split[y].length; x++) {
            row.push(split[y][x] == '#');
        }
        grid.push(row);
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < 100; i++) {
        grid[0][0] = true;
        grid[0][grid[0].length - 1] = true;
        grid[grid.length - 1][0] = true;
        grid[grid.length - 1][grid[0].length - 1] = true;

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                let neighbors = 0;
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        if (dx == 0 && dy == 0) {
                            continue;
                        }
                        let nx = x + dx;
                        let ny = y + dy;
                        if (nx < 0 || nx >= grid[y].length || ny < 0 || ny >= grid.length) {
                            continue;
                        }
                        if (grid[ny][nx] == true) {
                            neighbors++;
                        }
                    }
                }
                if ((x == 0 && y == 0) || (x == grid[0].length - 1 && y == 0) || (x == 0 && y == grid.length - 1) || (x == grid[0].length - 1 && y == grid.length - 1)) continue;
                if (grid[y][x] == true)
                    newGrid[y][x] = neighbors == 2 || neighbors == 3;
                else
                    newGrid[y][x] = neighbors == 3;
            }
        }
        newGrid[0][0] = true;
        newGrid[0][newGrid[0].length - 1] = true;
        newGrid[newGrid.length - 1][0] = true;
        newGrid[newGrid.length - 1][newGrid[0].length - 1] = true;
        grid = JSON.parse(JSON.stringify(newGrid));
    }
    let total = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] == true) {
                total++;
            }
        }
    }
    console.log('Answer to part 2: ' + total);
}

module.exports = { part1, part2 };