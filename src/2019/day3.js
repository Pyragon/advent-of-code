module.exports = {

    part1: function(contents, split) {
        let grid = [];
        let dx = { "R": 1, "L": -1, "U": 0, "D": 0 };
        let dy = { "R": 0, "L": 0, "U": 1, "D": -1 };
        for (let wire = 0; wire < split.length; wire++) {
            let x = 3000;
            let y = 3000;
            for (let instruction of split[wire].split(',')) {
                let regex = /([RLUD])(\d+)/;
                let match = regex.exec(instruction);
                let direction = match[1];
                let distance = parseInt(match[2]);
                for (let i = 0; i < distance; i++) {
                    x += dx[direction];
                    y += dy[direction];
                    if (grid[y] === undefined) {
                        grid[y] = [];
                    }
                    if (grid[y][x] === undefined) {
                        grid[y][x] = wire;
                        continue;
                    }
                    if (grid[y][x] == wire) continue;
                    grid[y][x] = 2;
                }
            }
        }
        let intersections = [];
        for (let y = 0; y < grid.length; y++) {
            if (grid[y] === undefined) continue;
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] == 2) {
                    intersections.push(Math.abs(x - 3000) + Math.abs(y - 3000));
                }
            }
        }
        console.log('Answer to part 1: ' + Math.min(...intersections));
    },

    part2: function(content, split) {
        let grid = [];
        let dx = { "R": 1, "L": -1, "U": 0, "D": 0 };
        let dy = { "R": 0, "L": 0, "U": 1, "D": -1 };
        let points = [];
        for (let wire = 0; wire < split.length; wire++) {
            let x = 3000;
            let y = 3000;
            let length = 0;
            for (let instruction of split[wire].split(',')) {
                let regex = /([RLUD])(\d+)/;
                let match = regex.exec(instruction);
                let direction = match[1];
                let distance = parseInt(match[2]);
                for (let i = 0; i < distance; i++) {
                    x += dx[direction];
                    y += dy[direction];
                    length++;
                    if (points[wire] == undefined)
                        points[wire] = {};
                    if (points[wire][y] == undefined)
                        points[wire][y] = {};
                    if (points[wire][y][x] == undefined)
                        points[wire][y][x] = length;
                    if (grid[y] === undefined)
                        grid[y] = [];
                    if (grid[y][x] === undefined) {
                        grid[y][x] = wire;
                        continue;
                    }
                    if (grid[y][x] == wire) continue;
                    grid[y][x] = 2;
                }
            }
        }
        let intersections = [];
        for (let y = 0; y < grid.length; y++) {
            if (grid[y] === undefined) continue;
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] == 2) {
                    intersections.push(points[0][y][x] + points[1][y][x]);
                }
            }
        }
        console.log('Answer to part 2: ' + Math.min(...intersections));
    }
}