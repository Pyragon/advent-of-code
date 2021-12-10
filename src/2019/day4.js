function part1(contents, split) {

    split = contents.split('-');
    let start = split[0];
    let end = split[1];

    let count = 0;
    digit: for (let i = start; i <= end; i++) {
        let digits = i.toString().split('');
        let hasDouble = false;
        for (let j = 1; j < digits.length; j++) {
            if (digits[j] < digits[j - 1]) continue digit;
            if (digits[j] === digits[j - 1]) hasDouble = true;
        }
        if (!hasDouble) continue;
        count++;
    }
    console.log('Answer to part 1: ' + count);

}

function part2(contents, split) {

    split = contents.split('-');
    let start = split[0];
    let end = split[1];

    let count = 0;
    digit: for (let i = start; i <= end; i++) {
        let digits = i.toString().split('');
        let hasDouble = false;
        for (let j = 1; j < digits.length; j++) {
            if (digits[j] < digits[j - 1]) continue digit;
            if (digits[j] === digits[j - 1]) {
                if (j != 1 && digits[j - 2] === digits[j]) continue;
                if (j != digits.length - 1 && digits[j + 1] === digits[j]) continue;
                hasDouble = true;
            }

        }
        if (!hasDouble) continue;
        count++;
    }
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };