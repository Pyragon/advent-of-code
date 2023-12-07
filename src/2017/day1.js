function part1(contents, split) {

    let arr = contents.split('').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let next = i == arr.length - 1 ? arr[0] : arr[i + 1];
        if (arr[i] == next)
            sum += arr[i];
    }
    console.log('Answer to part 1: ' + sum);
}

function part2(contents, split) {

    let arr = contents.split('').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let next = ((contents.length / 2) + i) % arr.length;
        if (arr[i] == arr[next])
            sum += arr[i];
    }
    console.log('Answer to part 2: ' + sum);
}

module.exports = { part1, part2 };