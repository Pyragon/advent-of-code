function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[y].length; x++)
            grid[y][x] = parseInt(split[y][x]);
    }
    console.log(solve(grid, 0, 0) - grid[0][0]);
}

let seen = [];

function solve(grid, y, x) {
    if (seen[y] && seen[y][x])
        return seen[y][x];
    if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length)
        return Number.MAX_VALUE;
    if (y == grid.length - 1 && x == grid[y].length - 1)
        return grid[y][x];
    let ans = grid[y][x] + Math.min(solve(grid, y + 1, x), solve(grid, y, x + 1));
    if (!seen[y]) seen[y] = [];
    seen[y][x] = ans;
    return ans;
}

function part2(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[y].length; x++)
            grid[y][x] = parseInt(split[y][x]);
    }
    console.log(solve(grid, 0, 0) - grid[0][0]);
}

module.exports = { part1, part2 };