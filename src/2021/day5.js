function part1(contents, split) {
    let grid = [];
    for (let line of split) {
        let coords = line.split(' -> ');
        let x1 = coords[0].split(',')[0];
        let y1 = coords[0].split(',')[1];
        let x2 = coords[1].split(',')[0];
        let y2 = coords[1].split(',')[1];
        if (x1 != x2 && y1 != y2) continue;
        if (x1 != x2) {
            let smallestX = Math.min(x1, x2);
            let biggestX = Math.max(x1, x2);
            for (let step = smallestX; step <= biggestX; step++) {
                let overlap = 1;
                // console.log('Step: ' + step + ' y: ' + y1 + ' because of ' + line);
                if (!grid[y1]) grid[y1] = [];
                if (grid[y1][step])
                    overlap = grid[y1][step] + 1;
                grid[y1][step] = overlap;
            }
        } else {
            let smallestY = Math.min(y1, y2);
            let biggestY = Math.max(y1, y2);
            for (let step = smallestY; step <= biggestY; step++) {
                let overlap = 1;
                // console.log('Step: ' + step + ' x: ' + x1 + ' because of ' + line);
                if (!grid[step]) grid[step] = [];
                if (grid[step][x1])
                    overlap = grid[step][x1] + 1;
                grid[step][x1] = overlap;
            }
        }
    }
    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        if (!grid[y]) continue;
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] >= 2)
                count++;
        }
    }
    // printGrid(grid);
    console.log('Answer to part 1: ' + count);
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        if (!grid[y]) continue;
        let line = '';
        for (let x = 0; x < grid[y].length; x++) {
            line += grid[y][x] ? grid[y][x] : '.';
        }
        console.log(line);
    }
}

function part2(contents, split) {
    let grid = [];
    for (let line of split) {
        let coords = line.split(' -> ');
        let startCoords = coords[0].split(',').map(Number);
        let endCoords = coords[1].split(',').map(Number);
        let x1 = startCoords[0];
        let y1 = startCoords[1];
        let x2 = endCoords[0];
        let y2 = endCoords[1];
        let dir = [x1 > x2 ? -1 : 1, y1 > y2 ? -1 : 1];
        if (x1 != x2 && y1 != y2) {
            let smallestX = Math.min(x1, x2);
            let biggestX = Math.max(x1, x2);
            let smallestY = Math.min(y1, y2);
            for (let step = smallestX; step <= biggestX; step++) {
                let overlap = 1;
                let x = x1 + dir[0] * (step - smallestX);
                let y = y1 + dir[1] * (step - smallestX);
                if (!grid[y]) grid[y] = [];
                if (grid[y][x])
                    overlap = grid[y][x] + 1;
                // console.log('Step: ' + step + ' x: ' + x + ' y: ' + y + ' overlap: ' + overlap + ' because of ' + line);
                grid[y][x] = overlap;
            }
        } else if (x1 != x2) {
            let smallestX = Math.min(x1, x2);
            let biggestX = Math.max(x1, x2);
            for (let step = smallestX; step <= biggestX; step++) {
                let overlap = 1;
                // console.log('Step: ' + step + ' y: ' + y1 + ' because of ' + line);
                if (!grid[y1]) grid[y1] = [];
                if (grid[y1][step])
                    overlap = grid[y1][step] + 1;
                grid[y1][step] = overlap;
            }
        } else {
            let smallestY = Math.min(y1, y2);
            let biggestY = Math.max(y1, y2);
            for (let step = smallestY; step <= biggestY; step++) {
                let overlap = 1;
                // console.log('Step: ' + step + ' x: ' + x1 + ' because of ' + line);
                if (!grid[step]) grid[step] = [];
                if (grid[step][x1])
                    overlap = grid[step][x1] + 1;
                grid[step][x1] = overlap;
            }
        }
    }
    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        if (!grid[y]) continue;
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] >= 2)
                count++;
        }
    }
    // printGrid(grid);
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };