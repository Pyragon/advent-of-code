function part1(contents, split) {
    let sum = 0;
    for (let line of split) {
        let digits = [];
        for (let i = 0; i < line.length; i++) {
            if (!isNaN(line[i])) digits.push(line[i]);
        }
        sum += parseInt(digits[0] + '' + digits[digits.length - 1]);
    }
    console.log('Answer to part 1:', sum);

}

let numbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}

function part2(contents, split) {
    let sum = 0;
    for (let line of split) {
        let digits = [];
        for (let i = 0; i < line.length; i++) {
            if (!isNaN(line[i]))
                digits.push(line[i]);
            for (let number in numbers) {
                if (line.substring(i).startsWith(number))
                    digits.push(numbers[number]);
            }
        }
        sum += parseInt(digits[0] + '' + digits[digits.length - 1]);
    }
    console.log('Answer to part 2:', sum);

}

module.exports = { part1, part2 };