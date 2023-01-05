let points = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
};

let play = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissors',
    'X': 'rock',
    'Y': 'paper',
    'Z': 'scissors'
};

let winningMoves = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock'
}

let losingMoves = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}

function part1(contents, split) {
    let score = 0;
    for (let line of split) {
        let [a, b] = line.split(' ');
        let aMove = play[a];
        let bMove = play[b];
        score += points[bMove];
        if (aMove == bMove)
            score += 3;
        else if (winningMoves[aMove] == bMove)
            score += 6;
    }
    console.log('Answer for part 1: ' + score);
}

function part2(contents, split) {
    let score = 0;
    for (let line of split) {
        let [a, b] = line.split(' ');
        let aMove = play[a];
        let bMove = b;
        let realBMove;
        if (bMove == 'X') {
            //Need to lose
            realBMove = losingMoves[aMove];
        } else if (bMove == 'Y') {
            //Need to draw
            realBMove = aMove;
        } else {
            //Need to win
            realBMove = winningMoves[aMove];
        }
        score += points[realBMove];
        if (aMove == realBMove)
            score += 3;
        else if (winningMoves[aMove] == realBMove)
            score += 6;
    }
    console.log('Answer for part 2: ' + score);
}

module.exports = { part1, part2 };