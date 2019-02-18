const PLAYERS = 9; //459;
var LAST_MARBLE = 25; //71790;
var {
    Deque
} = require('@blakeembrey/deque');

module.exports = {

    part1(contents, spl) {
        let circle = new Deque(0);
        let points = [];

        for (let i = 1; i < LAST_MARBLE; i++) {
            if (i % 23 == 0) {
                circle.rotate(7);
                if (!points[i % PLAYERS]) points[i % PLAYERS] = 0;
                points[i % PLAYERS] += i + circle.pop();
                circle.rotate(-1);
            } else {
                circle.rotate(-1);
                circle.push(i);
            }
            console.log(circle);
        }

        points = points.filter(p => !isNaN(p));
        console.log('Part ' + (contents == '2' ? '2' : '1') + ': ' + Math.max.apply(null, points));
    },

    part2(contents, spl) {
        LAST_MARBLE *= 100;
        //this.part1('2');
    }

};