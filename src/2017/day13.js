module.exports = {

    part1: function(contents, split) {
        let info = [];
        split.forEach(x => info[parseInt(x.split(': ')[0])] = x.split(': ')[1]);
        let pointers = info.slice(0).map(x => 0);
        let directions = info.slice(0).map(x => 0);
        let packet = -1;
        let severity = 0;
        while (packet++ <= info[info.length - 1]+1) {
            if (packet == 6) {
                console.log(pointers[packet]);
            }
            if(pointers[packet] == 0 && info[packet]) {
                console.log('Caught on layer: '+packet);
                severity += packet*info[packet];
            }
            for(let i = 0; i < pointers.length; i++) {
                if(info[i]) {
                    pointers[i] += directions[i] == 0 ? 1 : -1;
                    if(pointers[i]-1 == info[i] || pointers[i] == 0)
                        directions[i] = directions[i] == 1 ? 0 : 1;
                }
            }
        }
        console.log('Part 1: '+severity);
    },

    part2: function(contents, split) {

    }

};