function part1(contents, split) {

    let grid = [];
    for (let y = 0; y < 6; y++) {
        grid[y] = [];
        for (let x = 0; x < 50; x++) {
            grid[y][x] = 0;
        }
    }
    for (let line of split) {
        line = line.split(' ');
        let command = line[0];
        if (command == 'rect') {
            let [x, y] = line[1].split('x').map(Number);
            for (let yy = 0; yy < y; yy++) {
                if (!grid[yy]) grid[yy] = [];
                for (let xx = 0; xx < x; xx++) {
                    grid[yy][xx] = 1;
                }
            }
        } else if (command == 'rotate') {
            let [axis, index] = line[2].split('=');
            let amount = parseInt(line[4]);
            if (axis == 'y') {
                let newRow = [];
                for (let x = 0; x < 50; x++) {
                    newRow[(x + amount) % 50] = grid[index][x];
                }
                grid[index] = newRow;
            } else if (axis == 'x') {
                let newColumn = [];
                for (let y = 0; y < 6; y++) {
                    newColumn[(y + amount) % 6] = grid[y][index];
                }
                for (let y = 0; y < 6; y++) {
                    grid[y][index] = newColumn[y];
                }
            }
        }
    }
    let count = 0;
    for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 50; x++) {
            if (grid[y][x] == 1)
                count++;
        }
    }
    console.log('Answer to part 1: ' + count);
    console.log('Answer to part 2: ');
    printGrid(grid);

    function printGrid(grid) {
        for (let y = 0; y < 6; y++) {
            let line = '';
            for (let x = 0; x < 50; x++) {
                line += grid[y][x] == 1 ? '#' : '.';
            }
            console.log(line);
        }
    }


    function part2(contents, split) {

    }

    module.exports = { part1, part2 };