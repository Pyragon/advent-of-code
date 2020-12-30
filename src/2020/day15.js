let chalk = require('chalk');
let _ = require('underscore');

module.exports = {

    part1: function (contents, split) {
        console.log('Answer to part 1: '+this.findNumber(contents, 2020));
    },

    findNumber(contents, targetTurn) {
        let starting = contents.split(',').map(Number);
        let lastSpoken = 0;
        let firstSpoken = false;
        let index = 0;
        let previous = new Array(targetTurn);
        let lastSpoke = 0;
        while(index < targetTurn) {
            if(index < starting.length) {
                lastSpoken = starting[index];
                previous[lastSpoken] = index;
                firstSpoken = true;
                index++;
                continue;
            }
            let nextNum;
            if(firstSpoken)
                nextNum = 0;
            else {
                nextNum = index-(lastSpoke+1);
            }
            index++;
            lastSpoken = nextNum;
            firstSpoken = typeof previous[lastSpoken] == 'undefined';
            lastSpoke = previous[nextNum];
            previous[nextNum] = index-1;
        }
        return lastSpoken;
    },

    part2: function (contents, split) {
        console.log('Answer to part 2: '+this.findNumber(contents, 30000000));
    },

};