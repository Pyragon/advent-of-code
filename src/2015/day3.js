function part1(contents, split) {
    let x = 0, y = 0;
    let received = new Set();
    let dirs = {
        '^': [0, 1],
        'v': [0, -1],
        '<': [-1, 0],
        '>': [1, 0]
    }
    contents.split('').forEach(dir => { 
        x += dirs[dir][0]; 
        y += dirs[dir][1]; 
        received.add(x+','+y); 
    });
    console.log('Answer to Part 1: '+received.size);
}

function part2(contents, split) {
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    let robo = false;
    let received = new Set();
    let dirs = {
        '^': [0, 1],
        'v': [0, -1],
        '<': [-1, 0],
        '>': [1, 0]
    }
    contents.split('').forEach(dir => {
        if(robo) {
            x2 += dirs[dir][0]; 
            y2 += dirs[dir][1]; 
            received.add(x2+','+y2);
        } else {
            x1 += dirs[dir][0]; 
            y1 += dirs[dir][1];
            received.add(x1+','+y1); 
        }
        robo = !robo;
    });
    console.log('Answer to Part 2: '+received.size);
}

module.exports = { part1, part2 };