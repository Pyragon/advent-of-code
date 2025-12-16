function part1(contents, split) {
    let ans = 0;
    for(let line of split) {
        let batteries = line.split('').map(Number);
        let highest = 0;
        let highestIndex = 0;
        for(let i = 0; i < batteries.length - 1; i++) {
            if(batteries[i] > highest) {
                highest = batteries[i];
                highestIndex = i;
            }
        }
        let first = highest;
        highest = 0;
        for(let i = highestIndex + 1; i < batteries.length; i++) {
            if(batteries[i] > highest)
                highest = batteries[i];
        }
        let second = highest;
        ans += first * 10 + second;
    }
    console.log('Answer to Part 1: '+ans);
}

function part2(contents, split) {
    let ans = 0;
    for(let line of split) {
        let batteries = line.split('').map(Number);
        let highest = 0;
        let lastIndex = 0;
        let nums = [];
        for(let i = 12; i > 0; i--) {
            for(let j = lastIndex; j <= batteries.length - i; j++) {
                if(batteries[j] > highest) {
                    highest = batteries[j];
                    lastIndex = j + 1;
                }
            }
            nums.push(highest);
            highest = 0;
        }
        ans += Number(nums.map(n => n.toString()).join(''));
    }
    console.log('Answer to Part 2: '+ans);
}

module.exports = { part1, part2 };