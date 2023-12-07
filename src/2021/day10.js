let chars = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
};

let corruptedPoints = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
}

let part2Points = {
    '(': 1,
    '[': 2,
    '{': 3,
    '<': 4,
}

function part1(contents, split) {
    let points = 0;
    lineL: for (let line of split) {
        let open = [];
        for (let char of line.split('')) {
            if (Object.keys(chars).includes(char))
                open.push(char);
            else {
                let last = open.pop();
                if (chars[last] !== char) {
                    points += corruptedPoints[char];
                    continue lineL;
                }
            }
        }
    }
    console.log('Answer to part 1: ' + points);
}

function part2(contents, split) {
    let scores = [];
    lineL: for (let line of split) {
            let open = [];
            let points = 0;
            for (let char of line.split('')) {
                if (Object.keys(chars).includes(char))
                    open.push(char);
                else {
                    let last = open.pop();
                    if (chars[last] !== char) {
                        // points += corruptedPoints[char];
                        continue lineL;
                    }
                }
            }
            for (let char of open.reverse()) {
                points *= 5;
                points += part2Points[char];
            }
            scores.push(points);
        }
        //sort scores and get middle value
    scores.sort((a, b) => a - b);
    console.log('Answer to part 2: ' + scores[Math.floor(scores.length / 2)]);
}

module.exports = { part1, part2 };