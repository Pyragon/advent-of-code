function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < 10000; y++) {
        if (!grid[y]) grid[y] = [];
        for (let x = 0; x < 10000; x++) {
            grid[y][x] = 0;
        }
    }
    for (let i = 0; i < split.length; i++) {
        let line = split[i];
        let [_, id, left, top, width, height] = line.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/).map(x => parseInt(x));
        for (let y = top; y < top + height; y++) {
            for (let x = left; x < left + width; x++) {
                grid[y][x]++;
            }
        }
    }
    let count = 0;
    for (let y = 0; y < 10000; y++) {
        for (let x = 0; x < 10000; x++) {
            if (grid[y][x] >= 2)
                count++;
        }
    }
    // displayGrid(grid);
    console.log('Answer to part 1: ' + count);
}

function displayGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let line = '';
        for (let x = 0; x < grid[y].length; x++) {
            line += grid[y][x];
        }
        console.log(line);
    }
}

function part2(contents, split) {
    let grid = [];
    let ids = [];
    for (let y = 0; y < 10000; y++) {
        if (!grid[y]) grid[y] = [];
        for (let x = 0; x < 10000; x++) {
            grid[y][x] = [];
        }
    }
    for (let i = 0; i < split.length; i++) {
        let line = split[i];
        let [_, id, left, top, width, height] = line.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/).map(x => parseInt(x));
        if (!ids.includes(id))
            ids.push(id);
        for (let y = top; y < top + height; y++) {
            for (let x = left; x < left + width; x++) {
                grid[y][x].push(id);
            }
        }
    }
    idL: for (let id of ids) {
        for (let y = 0; y < 10000; y++) {
            for (let x = 0; x < 10000; x++) {
                if (grid[y][x].length > 1 && grid[y][x].includes(id)) {
                    continue idL;
                }
            }
        }
        console.log('Answer to part 2: ' + id);
    }
}

module.exports = { part1, part2 };