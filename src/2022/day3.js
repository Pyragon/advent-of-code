function part1(contents, split) {

    let priorities = [];
    for (let line of split) {
        let compartments = [line.substring(0, line.length / 2), line.substring(line.length / 2, line.length)];
        let [first, second] = compartments;
        let seen = [];
        for (let firstItems of first.split(''))
            seen.push(firstItems);
        for (let secondItems of second.split(''))
            if (seen.includes(secondItems)) {
                console.log(secondItems, first, second);
                if (secondItems == secondItems.toUpperCase())
                    priorities.push(secondItems.charCodeAt(0) - 65 + 27);
                else
                    priorities.push(secondItems.charCodeAt(0) - 96);
                break;
            }
    }
    console.log('Answer for part 1: ' + priorities.reduce((a, b) => a + b, 0));
}

function part2(_, split) {
    let priorities = [];
    let i = 0;
    while (i < split.length) {
        let elves = [split[i++], split[i++], split[i++]];
        for (let items of elves[2].split('')) {
            if (elves[1].includes(items) && elves[0].includes(items)) {
                if (items == items.toUpperCase())
                    priorities.push(items.charCodeAt(0) - 65 + 27);
                else
                    priorities.push(items.charCodeAt(0) - 96);
                break;
            }
        }
    }
    console.log('Answer for part 2: ' + priorities.reduce((a, b) => a + b, 0));
}

module.exports = { part1, part2 };