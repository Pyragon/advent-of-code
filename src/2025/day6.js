function part1(contents, split) {
    let cols = [];
    let ops = [];
    for(let i = 0; i < split[0].trim().split(/[ ]+/).length; i++)
        cols.push([]);
    for(let i = 0; i < split.length; i++) {
        if(i == split.length - 1) {
            let parts = split[i].trim().split(/[ ]+/);
            for(let j = 0; j < cols.length; j++) {
                ops.push(parts[j]);
            }
            continue;
        }
        let parts = split[i].trim().split(/[ ]+/);
        for(let j = 0; j < parts.length; j++) {
            cols[j].push(Number(parts[j]));
        }
    }
    let ans = 0;
    for(let i = 0; i < cols.length; i++) {
        let col = cols[i];
        let add = (x, y) => x + y;
        let multiply = (x, y) => x * y;
        let num = col.reduce(ops[i] == '*' ? multiply : add, ops[i] == '*' ? 1 : 0);
        ans += num;
    }
    console.log(ans);
}

function part2(contents, split) {

}

module.exports = { part1, part2 };