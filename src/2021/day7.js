const part1 = (contents, split) => {
    let sorted = contents.split(',').map(Number).sort((a, b) => a - b);

    let med = sorted[sorted.length / 2];
    let ans = 0;
    for (let position of sorted)
        ans += Math.abs(position - med);
    console.log('Answer to part 1: ' + ans);
};

const part2 = (contents, split) => {
    let sorted = contents.split(',').map(Number).sort((a, b) => a - b);

    let best = Number.MAX_VALUE;

    for (let i = 0; i < 1860; i++) {

        let ans = 0;
        for (let position of sorted) {
            for (let j = 0; j < Math.abs(position - i); j++)
                ans += 1 + j;
        }
        if (ans < best)
            best = ans;

    }
    console.log('Answer to part 2: ' + best);
};

module.exports = { part1, part2 };