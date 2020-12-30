let chalk = require('chalk');
let _ = require('underscore');

module.exports = {

    part1: function(contents, split) {
        let dir = 90;
        let x = 0, y = 0;
        for(let line of split) {
            let match = line.match(/([NSEWLRF])(\d+)/);
            let instr = match[1];
            let value = parseInt(match[2]);
            let movement;
            switch(instr) {
                case 'N':
                case 'S':
                case 'W':
                case 'E':
                    movement = this.getForwardMovement(instr, value);
                    x += movement[0];
                    y += movement[1];
                    break;
                case 'L':
                    while(value > 0) {
                        dir -= 90;
                        value -= 90;
                        if(dir < 0)
                            dir = 270;
                    }
                    break;
                case 'R':
                    while(value > 0) {
                        dir += 90;
                        value -= 90;
                        if(dir == 360)
                            dir = 0;
                    }
                    break;
                case 'F':
                    movement = this.getForwardMovement(dir, value);
                    x += movement[0];
                    y += movement[1];
                    break;
            }
        }
        console.log('Answer for part 1: '+(Math.abs(x)+Math.abs(y)));
    },

    getForwardMovement(dir, value) {
        if(dir == 0 || dir == 'N')
            return [ 0, value ];
        else if(dir == 90 || dir == 'E')
            return [ value, 0 ];
        else if(dir == 180 || dir == 'S')
            return [ 0, -value ];
        else if(dir == 270 || dir == 'W')
            return [ -value, 0 ];
        else console.log(dir);
    },

    part2: function(contents, split) {
        let x = 0, y = 0;
        let waypointX = 10, waypointY = 1;
        for(let line of split) {
            let match = line.match(/([NSEWLRF])(\d+)/);
            let instr = match[1];
            let value = parseInt(match[2]);
            let movement;
            let tempX, tempY;
            switch(instr) {
                case 'N':
                case 'S':
                case 'W':
                case 'E':
                    movement = this.getForwardMovement(instr, value);
                    waypointX += movement[0];
                    waypointY += movement[1];
                    break;
                case 'L':
                    while(value >= 90) {
                        tempX = waypointX;
                        tempY = waypointY;
                        waypointX = tempY*-1;
                        waypointY = tempX;
                        value -= 90;
                    }
                    break;
                case 'R':
                    while(value >= 90) {
                        tempX = waypointX;
                        tempY = waypointY;
                        waypointX = tempY;
                        waypointY = tempX*-1;
                        value -= 90;
                    }
                    break;
                case 'F':
                    x += (waypointX*value);
                    y += (waypointY*value);
                    break;
            }
        }
        console.log('Answer for part 2: '+(Math.abs(x)+Math.abs(y)));
    },

};