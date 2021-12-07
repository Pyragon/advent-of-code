function part1(contents, split) {
    let allFish = contents.split(',').map(Number);

    let runs = 80;
    for (let i = 0; i < runs; i++) {
        let newFish = [];
        for (let j = 0; j < allFish.length; j++) {

            let fish = allFish[j];
            if (fish === 0) {
                newFish.push(8);
                allFish[j] = 6;
            } else
                allFish[j] = fish - 1;
        }
        allFish.push(...newFish);
    }
    console.log('Answer to part 1: ' + allFish.length);
}

function part2(contents, split) {
    let allFish = contents.split(',').map(Number);

    let runs = 256;
    let map = {};
    for (let i = 0; i <= 8; i++)
        map[i] = 0;

    for (let fish of allFish) {
        if (!map[fish])
            map[fish] = 1;
        else
            map[fish]++;
    }
    for (let i = 0; i < runs; i++) {

        let newFish = {};
        for (let i = 0; i <= 8; i++)
            newFish[i] = 0;
        for (let j = 0; j <= 8; j++) {

            let total = map[j];
            if (j == 0) {
                newFish[8] += total;
                newFish[6] += total;
            } else {
                newFish[j - 1] += total;
            }
        }
        map = newFish;

    }
    console.log('Answer to part 2: ' + Object.values(map).reduce((a, b) => a + b));
}

module.exports = { part1, part2 };