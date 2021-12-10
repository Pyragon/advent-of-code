function part1(contents, split) {

    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = split[y].split('').map(Number);
    }

    let lowestPoints = [];
    for (let y = 0; y < grid.length; y++) {
        main: for (let x = 0; x < grid[y].length; x++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if ((dy == -1 && dx == -1) || (dy == 1 && dx == 1) || (dy == 1 && dx == -1) || (dy == -1 && dx == 1) || (dy == 0 && dx == 0))
                        continue;
                    let nx = x + dx;
                    let ny = y + dy;
                    if (nx < 0 || nx >= grid[y].length || ny < 0 || ny >= grid.length)
                        continue;
                    if (grid[ny][nx] <= grid[y][x])
                        continue main;
                }
            }
            lowestPoints.push({ x: x, y: y, points: grid[y][x] });
        }
    }
    let risk = 0;
    for (let lowestPoint of lowestPoints) {
        risk += lowestPoint.points + 1;
    }
    console.log('Answer to part 1: ' + risk);
}

function printGrid(grid) {
    for (let y = 0; y < grid.length; y++) {
        let line = '';
        for (let x = 0; x < grid[y].length; x++)
            line += grid[y][x].toString();
        console.log(line);
    }
}

function part2(contents, split) {

    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = split[y].split('').map(Number);
    }

    let lowestPoints = [];
    for (let y = 0; y < grid.length; y++) {
        main: for (let x = 0; x < grid[y].length; x++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if ((dy == -1 && dx == -1) || (dy == 1 && dx == 1) || (dy == 1 && dx == -1) || (dy == -1 && dx == 1) || (dy == 0 && dx == 0))
                        continue;
                    let nx = x + dx;
                    let ny = y + dy;
                    if (nx < 0 || nx >= grid[y].length || ny < 0 || ny >= grid.length)
                        continue;
                    if (grid[ny][nx] <= grid[y][x])
                        continue main;
                }
            }
            lowestPoints.push({ x: x, y: y, points: grid[y][x] });
        }
    }

    for (let lowestPoint of lowestPoints) {
        let basin = findBasin(grid, lowestPoint.x, lowestPoint.y);
        lowestPoint.basinSize = basin.length;
    }
    let answer = lowestPoints.sort((a, b) => b.basinSize - a.basinSize).slice(0, 3);
    console.log('Answer to part 2: ' + answer.map(a => a.basinSize).reduce((a, b) => a * b));
}

function findBasin(grid, x, y, checked = []) {
    let basin = [];
    if (grid[y][x] == 9)
        return basin;
    basin.push({ x: x, y: y, points: grid[y][x] });
    checked.push(x + ',' + y);
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if ((dy == -1 && dx == -1) || (dy == 1 && dx == 1) || (dy == 1 && dx == -1) || (dy == -1 && dx == 1) || (dy == 0 && dx == 0))
                continue;
            let nx = x + dx;
            let ny = y + dy;
            if (checked.includes(nx + ',' + ny)) continue;
            if (nx < 0 || nx >= grid[y].length || ny < 0 || ny >= grid.length)
                continue;
            basin.push(...findBasin(grid, nx, ny, checked));
        }
    }
    return basin;
}

module.exports = { part1, part2 };