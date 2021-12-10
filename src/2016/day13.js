let easyAStar = require('easy-astar').easyAStar;
let astar = require('./../utils/astar.js');

function part1(contents, split) {

    let input = parseInt(contents);

    let grid = [];
    for (let y = 0; y < 40; y++) {
        grid[y] = [];
        for (let x = 0; x < 40; x++) {
            grid[y][x] = isWall(x, y, input) ? 1 : 0;
        }
    }
    // printGrid(grid);
    const startPos = { x: 1, y: 1 };
    const endPos = { x: 31, y: 39 };
    const result = easyAStar((x, y) => {
        if (grid[y] && grid[y][x] === 0) {
            return true; // 0 means road
        } else {
            return false; // 1 means wall
        }
    }, startPos, endPos);
    console.log('Answer to part 1: ' + (result.length - 1));
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let line = '';
        for (let x = 0; x < grid[y].length; x++) {
            line += grid[y][x] == 1 ? '#' : '.';
        }
        console.log(line);
    }
}

let favNumber;

function getNeighbours([x, y]) {
    const positions = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
    ];
    return positions.filter(([x, y]) => {
        if (x < 0 || y < 0) return false;
        const n = (x * x + 3 * x + 2 * x * y + y + y * y) + favNumber;
        return n.toString(2).split('').reduce((isEven, i) => (i === '1' ? !isEven : isEven), true);
    });
}

function isWall(x, y, input) {
    const n = (x * x + 3 * x + 2 * x * y + y + y * y) + input;
    let bytes = n.toString(2).split('');
    let count = 0;
    for (let i = 0; i < bytes.length; i++) {
        if (bytes[i] === '1') count++;
    }
    return count % 2 === 1;
}

function part2(contents, split) {

    let input = parseInt(contents);

    favNumber = input;

    let result = astar({
        getNeighbourDist: () => 1,
        getNeighbours,
        hashData: pos => pos.join(''),
        isEnd() { return false; },
        maxCosts: 50,
        startNode: [1, 1]
    });

    console.log('Answer to part 2: ' + result.expandedNodeCounter);
}

module.exports = { part1, part2 };