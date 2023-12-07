function part1(contents, split) {

    let x = 0,
        y = 0;
    let step = 1;
    let steps = 0;
    let stepCount = 1;
    let stepCountDone = 0;
    let direction = 0;
    let grid = [];

    let input = parseInt(contents);
    while (step < input) {
        if (!grid[x]) grid[x] = [];
        grid[x][y] = step++;
        if (direction == 0)
            x++;
        else if (direction == 1)
            y++;
        else if (direction == 2)
            x--;
        else if (direction == 3)
            y--;
        if (++steps == stepCount) {
            steps = 0;
            direction = (direction + 1) % 4;
            if (++stepCountDone == 2) {
                stepCount++;
                stepCountDone = 0;
            }
        }
    }
    console.log('Answer to part 1: ' + (Math.abs(x) + Math.abs(y)));
}

function part2(contents, split) {


    let x = 0,
        y = 0;
    let steps = 0;
    let stepCount = 1;
    let stepCountDone = 0;
    let direction = 0;
    let grid = [];

    let input = parseInt(contents);
    grid[0] = [];
    grid[0][0] = 1;
    while (true) {
        if (!grid[x]) grid[x] = [];
        grid[x][y] = sumAdjacent(grid, x, y);
        if (grid[x][y] > input) {
            console.log('Answer to part 2: ' + grid[x][y]);
            return;
        }
        if (direction == 0)
            x++;
        else if (direction == 1)
            y++;
        else if (direction == 2)
            x--;
        else if (direction == 3)
            y--;
        if (++steps == stepCount) {
            steps = 0;
            direction = (direction + 1) % 4;
            if (++stepCountDone == 2) {
                stepCount++;
                stepCountDone = 0;
            }
        }
    }
}

function sumAdjacent(grid, x, y) {
    let sum = 0;
    for (let i = -1; i <= 1; i++)
        for (let j = -1; j <= 1; j++)
            if (grid[x + i] && grid[x + i][y + j])
                sum += grid[x + i][y + j];
    return sum;
}

module.exports = { part1, part2 };