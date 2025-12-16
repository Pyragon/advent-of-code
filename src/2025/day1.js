function part1(contents, split) {
    let dial = 50;
    let ans = 0;
    for(let spl of split) {
        let dir = spl[0];
        let val = Number(spl.slice(1));
        if(dir === 'L') {
            dial -= val;
            while(dial < 0) dial += 100;
        } else if(dir === 'R') {
            dial += val;
            while(dial > 99) dial -= 100;
        }
        if(dial == 0) ans++;
    }
    console.log('Answer to Part 1: '+ans);
}

function part2(contents, split) {
    let dial = 50;
    let ans = 0;
    for(let spl of split) {
        let dir = spl[0];
        let val = Number(spl.slice(1));
        if(dir === 'L') {
            for(let i = 0; i < val; i++) {
                dial--;
                if(dial < 0) dial = 99;
                if(dial == 0) ans++;
            }
        } else if(dir === 'R') {
            for(let i = 0; i < val; i++) {
                dial++;
                if(dial > 99) dial = 0;
                if(dial == 0) ans++;
            }
        }
    }
    console.log('Answer to Part 2: '+ans);
}

module.exports = { part1, part2 };