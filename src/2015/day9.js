function part1(contents, split) {
    let distances = [];
    for (let line of split) {
        let match = line.match(/([A-Za-z]+) to ([A-Za-z]+) = (\d+)/);
        if (!match) {
            console.log('Error matching', line);
            continue;
        }
        let [_, from, to, distance] = match;
        if (!distances[from])
            distances[from] = [];
        distances[from][to] = distance;
    }

}

function part2(contents, split) {

}

module.exports = { part1, part2 };