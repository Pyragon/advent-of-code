function part1(contents, split) {
    let grid = [];
    let S = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[0].length; x++) {
            grid[y][x] = split[y][x];
            if (grid[y][x] == 'S') S = [y, x];
        }
    }
    printGrid(grid);
    for (let y = -1; y <= 1; y++) {
        for (let x = -1; x <= 1; x++) {
            if (y == 0 && x == 0) continue;
            console.log(findNextTile(grid, [S[0] + y, S[1] + x], S));
        }
    }
}

function findNextTile(grid, cur, last) {
    console.log(cur, last);
    for (let y = -1; y <= 1; y++) {
        for (let x = -1; x <= 1; x++) {
            if (y == 0 && x == 0) continue;
            if (cur[0] + y == last[0] || cur[1] + x == last[1]) continue;
            let curPipe = grid[cur[0]][cur[1]];
            if (!connects(grid, cur[0] + y, cur[1] + x, curPipe)) continue;
            return [cur[0] + y, cur[1] + x];
        }
    }
    return null;
}

let direction = {
    '|': {
        '-': false,
        '|': [
            [0, -1],
            [0, 1]
        ],
        'L': [0, -1],
        'J': [0, -1],
        '7': [0, 1],
        'F': [0, 1]
    },
    '-': {
        '|': false,
        '-': [
            [-1, 0],
            [1, 0]
        ],
        'L': [1, 0],
        'J': [-1, 0],
        '7': [-1, 0],
        'F': [1, 0]
    },
    'L': {
        '|': [0, -1],
        '-': [1, 0],
        'L': false,
        'J': [1, 0],
        '7': [0, -1],
        'F': [0, -1]
    },
    'J': {
        '|': [0, -1],
        '-': [-1, 0],
        'L': [-1, 0],
        'J': false,
        '7': [0, -1],
        'F': [0, -1]
    },
    '7': {
        '|': [0, 1],
        '-': [-1, 0],
        'L': [-1, 0],
        'J': [0, -1],
        '7': false,
        'F': [1, 0]
    },
    'F': {
        '|': [0, 1],
        '-': [1, 0],
        'L': [0, -1],
        'J': [0, 1],
        '7': [1, 0],
        'F': false
    }
}

function connects(grid, y, x, cur) {
    if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length) return false;
    let pipe = grid[y][x];
    if (pipe == '.') return false;
    if (pipe == 'S') return true;
    let dir = direction[cur][pipe];
    if (dir == false) return false;
    let allowed = dir;
    if (!Array.isArray(allowed[0])) allowed = [allowed];
    let found = true;
    for (let a of allowed) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != y2 || a[i] != x2) continue;
            found = true;
        }
    }
    return found;
}

function printGrid(grid, animalY, animalX) {
    for (let y = 0; y < grid.length; y++) {
        let line = '';
        for (let x = 0; x < grid[0].length; x++) {
            if (y == animalY && x == animalX)
                line += 'S';
            else
                line += grid[y][x];
        }
        console.log(line);
    }
}

function part2(contents, split) {

}

module.exports = { part1, part2 };