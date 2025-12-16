function part1(contents, split) {
    let freshL = contents.split('\n\n')[0].split('\n');
    let fresh = [];
    let ans = 0;
    for(let line of freshL) {
        let [min, max] = line.split('-').map(Number);
        fresh.push([min, max]);
    }
    let ingredients = contents.split('\n\n')[1].split('\n').map(Number);
    for(let ingredient of ingredients) {
        for(let [min, max] of fresh) {
            if(ingredient >= min && ingredient <= max) {
                ans++;
                break;
            }
        }
    }
    console.log(ans);
}

function part2(contents, split) {
    let minMaxes = [];
    let freshL = contents.split('\n\n')[0].split('\n');
    for(let line of freshL) {
        let [min, max] = line.split('-').map(Number);
        minMaxes.push([min, max]);
    }

    while(true) {
        let newMinMaxes = [];
        let changed = false;
        let toSkip = [];
        for(let i = 0; i < minMaxes.length; i++) {
            if(toSkip.includes(i)) {
                console.log('skipping', i, minMaxes[i]);
                continue;
            }
            for(let j = 0; j < minMaxes.length; j++) {
                if(i == j) continue;
                let [min1, max1] = minMaxes[i];
                let [min2, max2] = minMaxes[j];
                if(min1 > min2 && min1 < max2) {
                    console.log(`Merging [${min2}, ${max2}] into [${min1}, ${max1}] to get [${min2}, ${Math.max(max1, max2)}]`);
                    min1 = min2;
                    changed = true;
                    toSkip.push(j);
                    newMinMaxes.push([min1, Math.max(max1, max2)]);
                } else
                    newMinMaxes.push([min1, max1]);
            }
        }
        if(!changed) break;
        minMaxes = newMinMaxes;
    }
    console.log(minMaxes.length);
}

module.exports = { part1, part2 };