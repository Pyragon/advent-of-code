function part1(contents, split) {
    console.log('Answer to Part 1: '+split.reduce((a, b) => a + (sides => getArea(...sides) + smallest(...sides))(b.split('x').map(Number)), 0));
}

function part2(contents, split) {
    console.log('Answer to Part 2: '+split.reduce((a, b) => a + ribbon(...b.split('x').map(Number)), 0));
}

function getArea(l, w, h) {
    return (2*l*w) + (2*l*h) + (2*w*h);
}

function smallest(l, w, h) {
    return Math.min(l*w, l*h, w*h);
}

function ribbon(l, w, h) {
    let lowest = [l, w, h].sort((a, b) => a - b);
    return (l*w*h) + lowest[0]*2 + lowest[1]*2;
}

module.exports = { part1, part2 };