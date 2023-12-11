function part1(contents, split) {
    let total = 0;
    for (let line of split) {
        let diffs = [];
        line = line.split(' ').map(Number);
        let diffIndex = 0;
        diffs[diffIndex++] = line;
        while (diffs[diffIndex - 1].filter(n => n != 0).length > 0) {
            let index = 0;
            diffs[diffIndex] = [];
            let lastDiff = diffs[diffIndex - 1];
            while (index < lastDiff.length - 1) {
                let cur = lastDiff[index++];
                let next = lastDiff[index];
                diffs[diffIndex].push(next - cur);
            }
            diffIndex++;
        }
        for (let i = diffs.length - 1; i >= 0; i--) {
            if (i == diffs.length - 1) {
                diffs[diffs.length - 1].push(0);
                continue;
            }
            let lastDiff = diffs[i + 1][diffs[i + 1].length - 1];
            diffs[i].push(diffs[i][diffs[i].length - 1] + lastDiff);
        }
        total += diffs[0][diffs[0].length - 1];
    }
    console.log('Answer to part 1:', total);

}

function part2(contents, split) {
    let total = 0;
    for (let line of split) {
        let diffs = [];
        line = line.split(' ').map(Number);
        let diffIndex = 0;
        diffs[diffIndex++] = line;
        while (diffs[diffIndex - 1].filter(n => n != 0).length > 0) {
            let index = 0;
            diffs[diffIndex] = [];
            let lastDiff = diffs[diffIndex - 1];
            while (index < lastDiff.length - 1) {
                let cur = lastDiff[index++];
                let next = lastDiff[index];
                diffs[diffIndex].push(next - cur);
            }
            diffIndex++;
        }
        for (let i = diffs.length - 1; i >= 0; i--) {
            if (i == diffs.length - 1) {
                diffs[diffs.length - 1][-1] = 0;
                continue;
            }
            let lastDiff = diffs[i + 1][-1];
            diffs[i][-1] = diffs[i][0] - lastDiff;
        }
        total += diffs[0][-1];
    }
    console.log('Answer to part 2:', total);
}

module.exports = { part1, part2 };