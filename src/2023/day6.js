function part1(_, split) {

    let results = [];
    let times = split[0];
    let distances = split[1];
    times = times.match(/\d+/g).map(Number);
    distances = distances.match(/\d+/g).map(Number);
    for (let i = 0; i < times.length; i++) {
        let ans = 0;
        let time = times[i];
        let distance = distances[i];
        for (let j = 0; j < time + 1; j++) {
            let dist = (time - j) * j;
            if (dist > distance)
                ans++;
        }
        results.push(ans);
    }
    console.log('Answer to part 1:', results.reduce((a, b) => a * b, 1));
}

function part2(_, split) {
    let millis = Date.now();
    let time = parseInt(split[0].replace('Time:', '').replace(/\s/g, ''));
    let distance = parseInt(split[1].replace('Distance:', '').replace(/\s/g, ''));
    let ans = 0;
    for (let j = 0; j < time + 1; j++) {
        let dist = (time - j) * j;
        if (dist > distance)
            ans++;
    }
    console.log('Time taken:', Date.now() - millis, 'ms');
    console.log('Answer to part 2:', ans);
}

module.exports = { part1, part2 };