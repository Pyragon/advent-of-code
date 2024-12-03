function part1(contents, split) {
    console.log(split.map(safe).filter(Boolean).length);
}

function part2(contents, split) {
    let total = 0;
    for (let line of split) {
        if (safe(line)) {
            total++;
            continue;
        }
        l: for (let i = 0; i < line.length; i++) {
            let nums = line.split(' ').map(Number);
            //loop through all the numbers, removing one each time

        }
    }

    console.log(total);
}

function safe(line) {
    let nums = line.split(' ').map(Number);
    let increasing = false;
    let decreasing = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return false;
        let diff = Math.abs(nums[i] - nums[i - 1]);
        if (diff > 3) return false;
        if (nums[i] > nums[i - 1]) increasing = true;
        if (nums[i] < nums[i - 1]) decreasing = true
        if (nums[i] > nums[i - 1] && decreasing) return false;
        if (nums[i] < nums[i - 1] && increasing) return false;
    }
    return true;
}

module.exports = { part1, part2 };