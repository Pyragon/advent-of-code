function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[y].length; x++) {
            grid[y][x] = split[y][x];
        }
    }
    // printGrid(grid);
    let parts = [];
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            //check if grid has a symbol at x,y
            if (grid[y][x] != '.' && isNaN(grid[y][x])) {
                let found = findPartNumbers(grid, x, y);
                for (let f in found) {
                    if (!parts.includes(f))
                        parts[f] = found[f];
                }
            }
        }
    }
    console.log('Answer to part 1:', Object.values(parts).reduce((a, b) => a + b, 0));
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let line = '';
        for (let x = 0; x < grid[y].length; x++) {
            line += grid[y][x];
        }
        console.log(line);
    }

}

function findPartNumbers(grid, x, y) {
    let parts = [];
    for (let xDiff = -1; xDiff <= 1; xDiff++) {
        for (let yDiff = -1; yDiff <= 1; yDiff++) {
            if (xDiff == 0 && yDiff == 0) continue;
            let x2 = x + xDiff;
            let y2 = y + yDiff;
            if (x2 < 0 || y2 < 0 || x2 >= grid[y].length || y2 >= grid.length) continue;
            if (!isNaN(grid[y2][x2])) {
                //get full number
                let num = '';
                while (x2 >= 0 && !isNaN(grid[y2][x2])) {
                    x2--;
                }
                x2++;
                let startX = x2;
                while (x2 < grid[y].length && !isNaN(grid[y2][x2])) {
                    num += grid[y2][x2];
                    x2++;
                }
                parts[y2 + ', ' + startX] = parseInt(num);
            }
        }
    }
    return parts;
}

function part2(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[y].length; x++) {
            grid[y][x] = split[y][x];
        }
    }
    // printGrid(grid);
    let ans = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] != '*') continue;
            let nums = [];
            for (let xDiff = -1; xDiff <= 1; xDiff++) {
                for (let yDiff = -1; yDiff <= 1; yDiff++) {
                    if (xDiff == 0 && yDiff == 0) continue;
                    let x2 = x + xDiff;
                    let y2 = y + yDiff;
                    if (x2 < 0 || y2 < 0 || x2 >= grid[y].length || y2 >= grid.length) continue;
                    if (!isNaN(grid[y2][x2])) {
                        //get full number
                        let num = '';
                        while (x2 >= 0 && !isNaN(grid[y2][x2])) {
                            x2--;
                        }
                        x2++;
                        let startX = x2;
                        while (x2 < grid[y].length && !isNaN(grid[y2][x2])) {
                            num += grid[y2][x2];
                            x2++;
                        }
                        if (nums[y2 + ', ' + startX])
                            continue;
                        nums[y2 + ', ' + startX] = parseInt(num);
                    }
                }
            }
            if (Object.keys(nums).length != 2) {
                continue;
            }
            for (let i = 0; i < Object.keys(nums).length; i += 2) {
                ans += Object.values(nums)[i] * Object.values(nums)[i + 1];
            }
        }
    }
    console.log('Answer to part 2:', ans);
}

module.exports = { part1, part2 };