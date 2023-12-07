function part1(contents, split) {

    let input = contents.trim();

    let grid = [];
    for (let y = 0; y < 128; y++) {
        let hash = knotHash(input + '-' + y);
        let row = [];
        let binary = '';
        for (let i = 0; i < hash.length; i++)
            binary += hex2bin(hash[i]);
        for (let x = 0; x < binary.length; x++)
            row.push(binary[x] === '1');
        grid.push(row);
    }
    let count = 0;
    for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 128; x++) {
            if (grid[y][x])
                count++;
        }
    }
    console.log('Answer to part 1: ' + count);
}

function hex2bin(hex) {
    return ((parseInt(hex, 16)).toString(2)).substr(-8).padStart(4, '0');
}

function part2(contents, split) {

    let input = contents.trim();

    let grid = [];
    for (let y = 0; y < 128; y++) {
        let hash = knotHash(input + '-' + y);
        let row = [];
        let binary = '';
        for (let i = 0; i < hash.length; i++)
            binary += hex2bin(hash[i]);
        for (let x = 0; x < binary.length; x++)
            row.push(binary[x] === '1');
        grid.push(row);
    }
    // printGrid(grid);
    let checked = [];
    let regions = [];
    for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 128; x++) {
            if (grid[y][x] && !checked[y + ',' + x]) {
                regions.push(checkAdjacent(grid, y, x, checked, regions));
            }
        }
    }
    // printRegions(regions);
    console.log('Answer to part 2: ' + regions.length);
}

function printGrid(grid) {
    for (let y = 0; y < 8; y++) {
        let row = '';
        for (let x = 0; x < 8; x++)
            row += grid[y][x] ? '#' : '.';
        console.log(row);
    }
}

function printRegions(regions) {
    let newGrid = [];
    for (let y = 0; y < 8; y++) {
        let row = [];
        for (let x = 0; x < 8; x++)
            row.push('.');
        newGrid.push(row);
    }
    for (let i = 0; i < regions.length; i++) {
        for (let [y, x] of regions[i]) {
            if (!newGrid[y] || !newGrid[y][x])
                continue;
            newGrid[y][x] = i;
        }
    }
    for (let y = 0; y < 8; y++)
        console.log(newGrid[y].join(''));
}

function checkAdjacent(grid, y, x, checked, regions) {
    let region = [];
    region.push([y, x]);
    checked[y + ',' + x] = true;
    let adjacent = [
        [y - 1, x],
        [y + 1, x],
        [y, x - 1],
        [y, x + 1]
    ];
    for (let [y, x] of adjacent) {
        if (y < 0 || x < 0 || y >= 128 || x >= 128)
            continue;
        if (grid[y][x] && !checked[y + ',' + x]) {
            region.push(...checkAdjacent(grid, y, x, checked, regions));
        }
    }
    return region;
}

function knotHash(input) {
    //numbers from 0 to 255
    let list = new Array(256).fill(0).map((x, i) => i);
    let denseHash = [];

    let pos = 0;
    let skip = 0;

    //convert to ascii
    let lengths = input.trim().split('').map(x => x.charCodeAt(0));
    lengths.push(17, 31, 73, 47, 23);

    for (let i = 0; i < 64; i++) {
        for (let length of lengths) {
            let sublist = [];
            for (let i = pos; i < pos + length; i++)
                sublist.push(list[i % list.length]);
            sublist.reverse();
            for (let i = pos; i < pos + length; i++)
                list[i % list.length] = sublist.shift();
            // console.log(list);
            pos += length + skip;
            pos = pos % list.length;
            skip++;
        }
    }
    for (let i = 0; i < list.length; i += 16)
        denseHash.push(list.slice(i, i + 16).reduce((a, b) => a ^ b));

    return denseHash.map(x => x.toString(16).padStart(2, '0')).join('');
}

module.exports = { part1, part2 };