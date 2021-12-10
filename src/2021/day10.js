function part1(contents, split) {

    let openChars = ['(', '{', '<', '['];
    let closeChars = [')', '}', '>', ']'];
    let closeCharsPoints = {
        ')': 3,
        '}': 1197,
        '>': 25137,
        ']': 57
    }
    let chunkStack = [];
    let chunks = [];
    let corrupted = 0;
    let incomplete = 0;
    line: for (let line of split) {
        for (let char of line.split('')) {
            if (openChars.includes(char)) {
                chunkStack.push(char);
            } else if (closeChars.includes(char)) {
                let top = chunkStack.pop();
                if (top !== openChars[closeChars.indexOf(char)]) {
                    corrupted += closeCharsPoints[char];
                    continue line;
                }
            }
        }
        if (chunkStack.length > 0)
            incomplete++;
    }
    console.log('Answer to part 1: ' + corrupted);
}

//had to rewrite it, idk why just using the top wasn't working
//maybe way i had it written first time just was wrong, who knows
function part2(contents, split) {

    let openChars = ['(', '{', '<', '['];
    let closeChars = [')', '}', '>', ']'];
    let closeCharsPoints = {
        ')': 1,
        '}': 3,
        '>': 4,
        ']': 2
    }
    let scores = [];
    line: for (let line of split) {
        let stack = [];
        for (let char of line) {
            if (openChars.includes(char))
                stack.push(closeChars[openChars.indexOf(char)]);
            else if (closeChars.includes(char)) {
                if (stack.pop() !== char)
                    continue line;
            }
        }
        if (stack.length > 0)
            scores.push(stack.reduceRight((score, char) => 5 * score + closeCharsPoints[char], 0));
    }
    console.log('Answer to part 2: ' + scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)]);
}

module.exports = { part1, part2 };