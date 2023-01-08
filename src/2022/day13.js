function part1(contents, split) {
    let results = [];
    let values = contents.split('\n\n').map((x) => x.split('\n'));
    for (let i = 0; i < values.length; i++) {
        let left = JSON.parse(values[i][0]);
        let right = JSON.parse(values[i][1]);
        if (compareValues(left, right) == -1) {
            results.push(i + 1);
        }
    }
    console.log('Answer to part 1:', results.reduce((a, b) => a + b, 0));
}

function compareValues(left, right) {
    if (!Array.isArray(left) && !Array.isArray(right)) {
        if (left < right)
            return -1;
        else if (left == right)
            return 0;
        else
            return 1;
    } else if (Array.isArray(left) && Array.isArray(right)) {
        let i = 0;
        while (i < left.length && i < right.length) {
            let result = compareValues(left[i], right[i]);
            if (result == -1) return -1;
            if (result == 1) return 1;
            i++;
        }
        if (i == left.length && i < right.length) return -1;
        else if (i < left.length && i == right.length) return 1;
        else return 0;
    } else if (!Array.isArray(left) && Array.isArray(right)) {
        return compareValues([left], right);
    } else if (Array.isArray(left) && !Array.isArray(right)) {
        return compareValues(left, [right]);
    } else {
        console.log('Error: compareValues()');
    }
}

function part2(contents, split) {
    contents = contents.replaceAll('\n\n', '\n');
    let values = contents.split('\n').map(x => JSON.parse(x));

    values.push([
        [2]
    ]);
    values.push([
        [6]
    ]);

    //sort values by compareValues()
    values.sort((a, b) => compareValues(a, b));
    let results = [];
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value.length == 1 && value[0].length == 1 && (value[0][0] == 2 || value[0][0] == 6))
            results.push(i + 1);
    }
    console.log('Answer to part 2:', results.reduce((a, b) => a * b, 1));
}

module.exports = { part1, part2 };