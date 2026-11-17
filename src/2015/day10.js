const part1 = (contents, split) => console.log('Answer to Part 1: '+run(contents.trim(), 40));
const part2 = (contents, split) => console.log('Answer to Part 2: '+run(contents.trim(), 50));

function run(line, times) {
    while(times-- != 0) {
        let newLine = '';
        for(let i = 0; i < line.length; i++) {
            let current = line[i];
            let count = 1;
            while(line[++i] == current)
                count++;
            i--;
            newLine += count.toString()+current;
        }
        line = newLine;
    }
    return line.length;
}

module.exports = { part1, part2 };