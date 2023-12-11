function part1(contents, split) {
    console.log('Answer to part 1:', findLength(contents, 40));
}

function part2(contents, split) {
    console.log('Answer to part 2:', findLength(contents, 50));
}

function findLength(input, num) {
    input = input.split('');
    for (let i = 0; i < num; i++) {
        let newNum = '';
        let last = input[0];
        let num = 1;
        for (let j = 1; j < input.length; j++) {
            let cur = input[j];
            if (cur == last) {
                num++;
                continue;
            }
            newNum += num;
            newNum += last;
            num = 1;
            last = cur;
        }
        newNum += num;
        newNum += last;
        input = newNum;
    }
    return input.length;
}

module.exports = { part1, part2 };