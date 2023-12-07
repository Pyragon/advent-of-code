function part1(contents, split) {
    let template = split[0];
    let insertions = [];
    for (let i = 2; i < split.length; i++) {
        let line = split[i];
        let [_, pair, insert] = line.match(/([A-Z]{2}) -> ([A-Z])/);
        insertions[pair] = insert;
    }
    for (let i = 0; i < 10; i++) {
        let newTemplate = '';
        for (let j = 0; j < template.length - 1; j++) {
            let pair = template[j] + template[j + 1];
            if (insertions[pair])
                newTemplate += template[j] + insertions[pair];
            else
                newTemplate += template[j];
        }
        newTemplate += template[template.length - 1];
        template = newTemplate;
    }
    let chars = [];
    for (let char of template) {
        if (!chars[char])
            chars[char] = 1;
        else
            chars[char]++;
    }
    //sort chars by count
    let sorted = Object.keys(chars).sort((a, b) => chars[b] - chars[a]);
    console.log('Answer to part 1: ' + (chars[sorted[0]] - chars[sorted[sorted.length - 1]]));
}

function part2(contents, split) {
    let template = split[0];
    let insertions = [];
    for (let i = 2; i < split.length; i++) {
        let line = split[i];
        let [_, pair, insert] = line.match(/([A-Z]{2}) -> ([A-Z])/);
        insertions[pair] = insert;
    }
    let pairs = [];
    for (let i = 0; i < template.length - 1; i++) {
        let index = template[i] + '' + template[i + 1];
        if (pairs[index]) pairs[index]++;
        else pairs[index] = 1;
    }
    for (let i = 0; i < 40; i++) {
        let newPairs = [];
        for (let pair in pairs) {
            let count = pairs[pair];
            let newPairA = pair[0] + insertions[pair[0] + pair[1]];
            let newPairB = insertions[pair[0] + pair[1]] + pair[1];
            if (newPairs[newPairA]) newPairs[newPairA] += count;
            else newPairs[newPairA] = count;
            if (newPairs[newPairB]) newPairs[newPairB] += count;
            else newPairs[newPairB] = count;
        }
        pairs = newPairs;
    }
    let ans = [];
    for (let pair in pairs) {
        if (!ans[pair[0]]) ans[pair[0]] = 0;
        ans[pair[0]] += pairs[pair];
    }
    ans[template[template.length - 1]]++;
    let sorted = Object.keys(ans).sort((a, b) => ans[b] - ans[a]);
    console.log('Answer to part 2: ' + (ans[sorted[0]] - ans[sorted[sorted.length - 1]]));
}

module.exports = { part1, part2 };