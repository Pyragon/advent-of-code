function part1(contents, split) {
    let ids = contents.split(',');
    let ans = 0;
    for(let id of ids) {
        let [ min, max ] = id.split('-').map(Number);
        for(let i = min; i <= max; i++) {
            let s = i.toString();
            if(s.length % 2 != 0) continue;
            //get first half of string
            let half = s.slice(0, s.length / 2);
            let rest = s.slice(s.length / 2);
            if(half == rest) {
                ans += i;
            }
        }
    }
    console.log('Answer to Part 1: '+ans);
}

function part2(contents, split) {
    let ids = contents.split(',');
    let ans = 0;
    for(let id of ids) {
        let [ min, max ] = id.split('-').map(Number);
        for(let i = min; i <= max; i++) {
            let s = i.toString();
            // console.log('testing', s);
            for(let j = 1; j < s.length; j++) {
                let test = s.slice(0, j);
                //get the rest of s as chunks of test length
                let rest = s.slice(j);
                let chunks = [];
                for(let k = 0; k < rest.length; k += test.length) {
                    chunks.push(rest.slice(k, k + test.length));
                }
                // console.log(test, chunks);
                let allMatch = true;
                for(let chunk of chunks) {
                    if(chunk !== test) {
                        allMatch = false;
                        break;
                    }   
                }
                if(allMatch) {
                    ans += i;
                    break;
                }
            }
        }
    }
    console.log('Answer to Part 2: '+ans);
}

module.exports = { part1, part2 };