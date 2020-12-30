let chalk = require('chalk');
let _ = require('underscore');

module.exports = {

    part1: function (contents, split) {
        let mask;
        let memory = [];
        for (let line of split) {
            if (line.includes('mask = ')) {
                mask = line.match(/mask = ([01X]+)/)[1];
                continue;
            }
            let match = line.match(/mem\[(\d+)\] = (\d+)/);
            let address = parseInt(match[1]);
            let value = BigInt(parseInt(match[2]));
            value = this.applyMask(value, mask);
            memory[address] = value;
        }
        console.log('Answer to part 1: '+parseInt(memory.reduce((t, i) => t + i)));
    },

    applyMask(value, mask, part2=false) {
        let compareMask = value.toString(2);
        let nMask = '';
        if (compareMask.length < 36) {
            for (let i = 0; i < 36 - compareMask.length; i++)
                nMask += '0';
            for (let i = 0; i < compareMask.length; i++)
                nMask += compareMask[i];
            compareMask = nMask;
            nMask = '';
        }
        for (let i = 0; i < mask.length; i++) {
            if(mask[i] == '0')
                nMask += part2 ? compareMask[i] : '0';
            else if(mask[i] == '1')
                nMask += '1';
            else
                nMask += part2 ? 'X' : compareMask[i];
        }
        return part2 ? nMask : BigInt(parseInt(nMask, 2));
    },

    floatingToVals(values) {
        let pushed = false;
        let newValues = [];
        for(let value of values) {
            let x = value.indexOf('X');
            if(x > -1) {
                let a = `${value.slice(0, x)}0${value.slice(x + 1)}`;
                let b = `${value.slice(0, x)}1${value.slice(x + 1)}`;
                newValues.push(a, b);
                pushed = true;
            }
        }
        if(pushed)
            return this.floatingToVals(newValues);
        else
            return values;
    },

    part2: function (contents, split) {
        let mask;
        let memory = [];
        for (let i = 0; i < split.length; i++) {
            let line = split[i];
            if (line.includes('mask = ')) {
                mask = line.match(/mask = ([01X]+)/)[1];
                continue;
            }
            let match = line.match(/mem\[(\d+)\] = (\d+)/);
            let address = BigInt(parseInt(match[1]));
            let value = BigInt(parseInt(match[2]));
            // value = this.applyMask(value, mask);
            address = this.applyMask(address, mask, true);
            let addresses = this.floatingToVals([address]);
            for(let _address of addresses)
                memory[parseInt(_address, 2)] = value;
        }
        let total = BigInt(0);
        let keys = Object.keys(memory);
        for(let i = 0; i < keys.length; i++)
            total += BigInt(memory[keys[i]]);
        console.log(total);
    },

};