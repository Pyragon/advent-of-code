function part1(contents, split) {
    let result = 0;
    for (let line of split) {
        let [l, w, h] = line.split('x').map(Number);
        let area = 2 * l * w + 2 * w * h + 2 * h * l;
        let smallest = Math.min(l * w, w * h, h * l);
        result += (area + smallest);
    }
    console.log('Answer to part 1: ' + result);
}

function part2(contents, split) {
    let result = 0;
    for (let line of split) {
        let [l, w, h] = line.split('x').map(Number);
        let smallest = [l, w, h].sort((a, b) => a - b);
        result += (smallest[0] * 2 + smallest[1] * 2 + l * w * h);
    }
    console.log('Answer to part 2: ' + result);
}

module.exports = { part1, part2 };