function part1(contents, split) {
    let count = 0;
    for (let line of split) {
        let [first, second] = line.split(',');
        let [firstStart, firstEnd] = first.split('-').map(Number);
        let [secondStart, secondEnd] = second.split('-').map(Number);
        //find if either first or second fully contain the other
        if ((firstStart <= secondStart && firstEnd >= secondEnd) ||
            (secondStart <= firstStart && secondEnd >= firstEnd))
            count++;
    }
    console.log('Answer to part 1: ' + count);
}

function part2(contents, split) {
    let count = 0;
    for (let line of split) {
        let [first, second] = line.split(',');
        let [firstStart, firstEnd] = first.split('-').map(Number);
        let [secondStart, secondEnd] = second.split('-').map(Number);
        //find if either first or second fully contain the other
        if ((firstEnd >= secondStart && secondEnd >= firstStart))
            count++;
    }
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };