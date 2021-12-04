module.exports = {

    part1: function(contents, split) {
        split = split.map(Number);
        for (let i = 0; i < split.length - 1; i++) {
            for (let j = 1; j < split.length; j++) {
                if (split[i] + split[j] == 2020) {
                    console.log('Answer for part 1: ' + (split[i] * split[j]));
                    return;
                }
            }
        }
    },

    part2: function(contents, split) {
        let nums = split.map(Number);
        for (let i = 0; i < nums.length - 2; i++) {
            for (let k = 1; k < nums.length - 1; k++) {
                for (let j = 2; j < nums.length; j++) {
                    if ((nums[i] + nums[k] + nums[j]) == 2020) {
                        console.log('Answer to part 2: ' + (nums[i] * nums[k] * nums[j]));
                        return;
                    }
                }
            }
        }
    },

};