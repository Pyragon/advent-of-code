let Jimp = require('jimp');

function part1(contents, split) {
    let data = contents.trim().split('').map(Number);
    let layers = [];
    let layer = [];
    let layerCount = 0;
    let dataIndex = 0;
    while (dataIndex < data.length) {
        for (let y = 0; y < 6; y++) {
            if (!layer[y]) layer[y] = [];
            for (let x = 0; x < 25; x++) {
                layer[y][x] = data[dataIndex++];
            }
        }
        layers[layerCount++] = layer;
        // printGrid(layer);
        layer = [];
    }
    let minZeros = Infinity;
    let minZerosLayer = 0;
    for (let i = 0; i < layers.length; i++) {
        let zeros = 0;
        for (let y = 0; y < 6; y++) {
            if (!layers[i][y]) continue;
            for (let x = 0; x < 25; x++) {
                if (layers[i][y][x] === 0) zeros++;
            }
        }
        if (zeros < minZeros) {
            minZeros = zeros;
            minZerosLayer = i;
        }
    }
    let ones = 0;
    let twos = 0;
    for (let y = 0; y < 6; y++) {
        if (!layers[minZerosLayer][y]) continue;
        for (let x = 0; x < 25; x++) {
            if (layers[minZerosLayer][y][x] === 1) ones++;
            if (layers[minZerosLayer][y][x] === 2) twos++;
        }
    }
    console.log('Answer to part 1: ' + (ones * twos));
}

function printGrid(grid) {
    for (let y = 0; y < 6; y++) {
        let line = '';
        for (let x = 0; x < 25; x++) {
            line += grid[y][x];
        }
        console.log(line);
    }
}

function part2(contents, split) {
    let data = contents.trim().split('').map(Number);
    let layers = [];
    let layer = [];
    let layerCount = 0;
    let dataIndex = 0;
    while (dataIndex < data.length) {
        for (let y = 0; y < 6; y++) {
            if (!layer[y]) layer[y] = [];
            for (let x = 0; x < 25; x++) {
                layer[y][x] = data[dataIndex++];
            }
        }
        layers[layerCount++] = layer;
        // printGrid(layer);
        layer = [];
    }
    let colours = [];
    for (let y = 0; y < 6; y++) {
        if (!colours[y]) colours[y] = [];
        for (let x = 0; x < 25; x++) {
            for (let i = 0; i < layers.length; i++) {
                if (layers[i][y][x] === 2) continue;
                colours[y][x] = layers[i][y][x] == 0 ? 0xFFFFFFFF : 0x000000FF;
                break;
            }
        }
    }
    let image = new Jimp(25, 6);
    for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 25; x++) {
            image.setPixelColor(colours[y][x], x, y);
        }
    }
    image.write('day8.png');
    console.log('Answer to part 2 written to: day8.png');
}

module.exports = { part1, part2 };