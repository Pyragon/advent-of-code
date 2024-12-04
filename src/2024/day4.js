function part1(contents, split) {
    let grid = [];
    for (let line of split) {
        let row = [];
        for (let char of line) {
            row.push(char);
        }
        grid.push(row);
    }
    printGrid(grid);
    let dir = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
        [1, -1],
        [1, 1],
        [-1, -1],
        [-1, 1]
    ]
    let look = ['X', 'M', 'A', 'S'];
    let result = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] != 'X') continue;
            d: for (let d of dir) {
                for (let i = 1; i < look.length; i++) {
                    let [dx, dy] = d;
                    let xx = x + dx * i;
                    let yy = y + dy * i;
                    if (xx < 0 || xx >= grid[y].length || yy < 0 || yy >= grid.length)
                        continue d;
                    if (grid[yy][xx] != look[i])
                        continue d;
                }
                result++;
            }
        }
    }
    console.log('Part 1:', result);
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let line = '';
        for (let x = 0; x < grid[y].length; x++) {
            line += grid[y][x] + '  ';
        }
        console.log(line);
    }
}

function part2(contents, split) {
    let grid = [];
    for (let line of split) {
        let row = [];
        for (let char of line) {
            row.push(char);
        }
        grid.push(row);
    }
    printGrid(grid);
    let result = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] != 'A') continue;
            //left to right
            let coords = [y - 1, x - 1];
            if (coords[0] < 0 || coords[0] >= grid.length || coords[1] < 0 || coords[1] >= grid[y].length) continue;
            if (grid[coords[0]][coords[1]] != 'M' && grid[coords[0]][coords[1]] != 'S') continue;
            let isM = grid[coords[0]][coords[1]] == 'M';
            coords = [y + 1, x + 1];
            if (coords[0] < 0 || coords[0] >= grid.length || coords[1] < 0 || coords[1] >= grid[y].length) continue;
            if (isM && grid[coords[0]][coords[1]] != 'S') continue;
            if (!isM && grid[coords[0]][coords[1]] != 'M') continue;
            //right to left
            coords = [y - 1, x + 1];
            if (coords[0] < 0 || coords[0] >= grid.length || coords[1] < 0 || coords[1] >= grid[y].length) continue;
            if (grid[coords[0]][coords[1]] != 'M' && grid[coords[0]][coords[1]] != 'S') continue;
            isM = grid[coords[0]][coords[1]] == 'M';
            coords = [y + 1, x - 1];
            if (coords[0] < 0 || coords[0] >= grid.length || coords[1] < 0 || coords[1] >= grid[y].length) continue;
            if (isM && grid[coords[0]][coords[1]] != 'S') continue;
            if (!isM && grid[coords[0]][coords[1]] != 'M') continue;
            result++;
        }
    }
    console.log('Part 2:', result);
}

module.exports = { part1, part2 };