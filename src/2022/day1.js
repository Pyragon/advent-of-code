function part1(contents, split) {
    let elves = [];
    let calories = 0;
    for (let i = 0; i < split.length; i++) {
        let line = split[i];
        if (!isNaN(parseInt(line)))
            calories += parseInt(line);
        else {
            elves.push(calories);
            calories = 0;
        }
    }
    let highest = Math.max(...elves);
    console.log('Answer to part 1: ' + highest);
}

function part2(contents, split) {
    let elves = [];
    let calories = 0;
    for (let i = 0; i < split.length; i++) {
        let line = split[i];
        if (!isNaN(parseInt(line)))
            calories += parseInt(line);
        else {
            elves.push(calories);
            calories = 0;
        }
    }
    //sort all the answers
    elves.sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total += elves[i];
    }
    console.log('Answer to part 2: ' + total);
}

module.exports = { part1, part2 };