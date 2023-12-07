function part1(contents, split) {
    let grid = [];
    for (let i = 0; i < split.length; i++) {
        if (!grid[i]) grid[i] = [];
        for (let j of split[i].split('').map(Number))
            grid[i].push(j);
    }
    printGrid(grid);
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let output = '';
        for (let x = 0; x < grid[y].length; x++)
            output += grid[y][x];
        console.log(output);
    }
}

function part2(contents, split) {

}

module.exports = { part1, part2 };