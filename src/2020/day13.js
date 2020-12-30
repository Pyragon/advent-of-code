let chalk = require('chalk');
let _ = require('underscore');

module.exports = {

    part1: function (contents, split) {
        let earliest = parseInt(split[0]);
        let buses = split[1].split(',').filter(x => x != 'x').map(Number);
        let timestamp = earliest;
        let result = 0;
        w: while (true) {
            for (let bus of buses) {
                if (timestamp % bus == 0) {
                    result = bus * (timestamp - earliest);
                    break w;
                }
            }
            timestamp++;
        }
        console.log('Answer to part 1: ' + result);
    },

    crt(num, rem) {
        let sum = BigInt(0);
        const prod = BigInt(num.reduce((a, c) => a * c, 1));

        for (let i = 0; i < num.length; i++) {
            const [ni, ri] = [BigInt(num[i]), BigInt(rem[i])];
            const p = prod / ni;
            sum += ri * p * this.mulInv(p, ni);
        }
        return sum % prod;
    },

    mulInv(a, b) {
        const b0 = b;
        let x0 = BigInt(0);
        let x1 = BigInt(1);

        if (b === 1) {
            return 1;
        }
        while (a > 1) {
            const q = a / b;
            [a, b] = [b, a % b];
            [x0, x1] = [x1 - q * x0, x0];
        }
        if (x1 < 0) {
            x1 += b0;
        }
        return x1;
    },

    part2: function (contents, split) {
        let buses = split[1].split(',');
        let requiredRemainders = [];
        for (let i = 0; i < buses.length; i++) {
            if (buses[i] == 'x') continue;
            if (i == 0) {
                requiredRemainders.push(0);
                continue;
            }
            requiredRemainders.push(parseInt(buses[i]) - i);
        }
        let nBuses = buses.filter(x => x != 'x').map(Number);

        let answer = BigInt(this.crt(nBuses, requiredRemainders));

        console.log('Answer for part 2: ' + answer);

    },

};