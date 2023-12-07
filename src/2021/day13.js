const fs = require('fs');

function part1(contents, split) {
    let grid = [];
    let line;
    let index = 0;
    let maxX = 0;
    let maxY = 0;
    while ((line = split[index++]) != '') {
        let [x, y] = line.split(',').map(Number);
        if (!grid[y]) grid[y] = [];
        grid[y][x] = 1;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
    }
    while (index < split.length) {
        line = split[index++];
        let [_, axis, value] = line.match(/fold along ([a-z])=(\d+)/);
        value = parseInt(value);
        if (axis == 'x') {
            for (let y = 0; y <= maxY; y++) {
                for (let x = value + 1; x <= maxX; x++) {
                    if (!grid[y] || !grid[y][x] || grid[y][x] == 0) continue;
                    grid[y][x] = 0;
                    let diff = x - value;
                    if (!grid[y][value - diff] || !grid[y][value - diff] || grid[y][value - diff] == 0) {
                        if (!grid[y]) grid[y] = [];
                        grid[y][value - diff] = 1;
                    }
                }
            }
            maxX = value;
        } else if (axis == 'y') {
            for (let x = 0; x <= maxX; x++) {
                for (let y = value + 1; y <= maxY; y++) {
                    if (!grid[y] || !grid[y][x] || grid[y][x] == 0) continue;
                    grid[y][x] = 0;
                    let diff = y - value;
                    if (!grid[value - diff] || !grid[value - diff][x] || grid[value - diff][x] == 0) {
                        if (!grid[value - diff]) grid[value - diff] = [];
                        grid[value - diff][x] = 1;
                    }
                }
            }
            maxY = value;
        }
        break;
    }
    let visible = 0;
    for (let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            if (!grid[y] || !grid[y][x] || grid[y][x] == 0) continue;
            visible++;
        }
    }
    console.log('Answer to part 1: ' + visible);
}

function displayGrid(grid, maxX, maxY) {
    for (let y = 0; y <= maxY; y++) {
        let output = '';
        for (let x = 0; x <= maxX; x++) {
            if (!grid[y])
                output += '.';
            else if (!grid[y][x])
                output += '.';
            else output += grid[y][x] == 1 ? '#' : '.';
        }
        console.log(output);
    }
}

function part2(contents, split) {
    let grid = [];
    let line;
    let index = 0;
    let maxX = 0;
    let maxY = 0;
    while ((line = split[index++]) != '') {
        let [x, y] = line.split(',').map(Number);
        if (!grid[y]) grid[y] = [];
        grid[y][x] = 1;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
    }
    while (index < split.length) {
        line = split[index++];
        let [_, axis, value] = line.match(/fold along ([a-z])=(\d+)/);
        value = parseInt(value);
        if (axis == 'x') {
            for (let y = 0; y <= maxY; y++) {
                for (let x = value + 1; x <= maxX; x++) {
                    if (!grid[y] || !grid[y][x] || grid[y][x] == 0) continue;
                    grid[y][x] = 0;
                    let diff = x - value;
                    if (!grid[y][value - diff] || !grid[y][value - diff] || grid[y][value - diff] == 0) {
                        if (!grid[y]) grid[y] = [];
                        grid[y][value - diff] = 1;
                    }
                }
            }
            maxX = value;
        } else if (axis == 'y') {
            for (let x = 0; x <= maxX; x++) {
                for (let y = value + 1; y <= maxY; y++) {
                    if (!grid[y] || !grid[y][x] || grid[y][x] == 0) continue;
                    grid[y][x] = 0;
                    let diff = y - value;
                    if (!grid[value - diff] || !grid[value - diff][x] || grid[value - diff][x] == 0) {
                        if (!grid[value - diff]) grid[value - diff] = [];
                        grid[value - diff][x] = 1;
                    }
                }
            }
            maxY = value;
        }
    }
    console.log('Answer to part 2:');
    displayGrid(grid, maxX, maxY);
}

module.exports = { part1, part2 };