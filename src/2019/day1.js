module.exports = {

    part1: function(contents, split) {
        console.log('Part 1: '+split.map(this.getMass).reduce((a, b) => a+b));
    },

    part2: function(contents, split) {
        console.log('Part 2: '+split.map(x => {
            let total = 0;
            let fuel = 0;
            let value = x;
            while((fuel = this.getMass(value)) > 0) {
                total += fuel;
                value = fuel;
            }
            return total;
        }).reduce((a, b) => a+b));
    },

    getMass: function(module) {
        return Math.floor(parseInt(module) / 3) - 2;
    }

};