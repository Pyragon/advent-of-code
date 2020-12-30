module.exports = {

    part1: function(contents, split) {
        let adapters = split.map(Number).sort((a, b) => a-b);
        let jolt1Differences = 0;
        let jolt3Differences = 0;
        let jolts = 0;
        while(adapters.length > 0) {
            if(adapters[0] > jolts+3) {
                console.log('Didnt work '+jolts+' '+adapters[0]);
                break;
            }
            let adapter = adapters.shift();
            if(adapter-jolts == 1) jolt1Differences++;
            if(adapter-jolts == 3) jolt3Differences++;
            jolts = adapter;
        }
        console.log('Answer for part 1: '+(jolt1Differences*(jolt3Differences+1)));
    },

    part2: function(contents, split) {
        let adapters = split.map(Number).sort((a, b) => a-b);
        adapters.push(adapters[adapters.length-1]+3);

        const cache = {};

        function findCombos(currentEnd, available) {
            if(currentEnd == adapters[adapters.length-1])
                return 1;

            let count = 0;

            for(let i = 1; i <= 3; i++) {
                if(available.includes(currentEnd + i)) {
                    let remaining = available.filter(value => value > (currentEnd+i));
                    if(cache[currentEnd+i] == null)
                        cache[currentEnd+i] = findCombos(currentEnd+i, remaining);
                    count += cache[currentEnd+i];
                }
            }
            return count;
        }

        let result = findCombos(0, adapters);
        console.log('Answer for part 2: '+result);
    },

};