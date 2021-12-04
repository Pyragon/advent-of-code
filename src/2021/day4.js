function part1(contents, split) {
    let called = split[0].split(',').map(Number);

    let boards = loadBoards(split);
    let marked = [];

    calling: for (let number of called) {
        for (let i = 0; i < boards.length; i++) {
            let board = boards[i];
            if (!marked[i])
                marked[i] = [];

            for (let y = 0; y < 5; y++) {
                for (let x = 0; x < 5; x++) {
                    if (board[y][x] === number) {
                        marked[i][y] = marked[i][y] || [];
                        marked[i][y][x] = true;
                    }
                }
                let result = checkWinner(board, i, marked, number);
                if (result > 0) {
                    console.log('Answer to part 1: ' + result);
                    break calling;
                }
            }
        }
    }

}

function checkWinner(board, index, marked, lastNumber) {
    yLoop: for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            if (!marked[index][y] || !marked[index][y][x])
                continue yLoop;
        }
        return getPoints(board, index, marked, lastNumber);
    }
    xLoop: for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            if (!marked[index][y] || !marked[index][y][x])
                continue xLoop;
        }
        return getPoints(board, index, marked, lastNumber);
    }
    return -1;
}

function printBoard(board, index, marked) {
    for (let y = 0; y < 5; y++) {
        let line = '';
        //print number in red if it's marked, green if not
        for (let x = 0; x < 5; x++) {
            if (marked[index][y] && marked[index][y][x])
                line += '\x1b[31m' + board[y][x] + '\x1b[0m ';
            else
                line += board[y][x] + ' ';
        }
        console.log(line);
    }
}

function getPoints(board, index, marked, lastNumber) {
    let sum = 0;
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            if (!marked[index][y] || !marked[index][y][x])
                sum += board[y][x];
        }
    }
    return sum * lastNumber;
}

function loadBoards(split) {

    let boards = [];
    let board = [];
    let index = 0;
    for (let i = 2; i < split.length; i++) {
        let line = split[i];
        if (line == '') {
            boards.push(board);
            board = [];
            index = 0;
            continue;
        }
        //get a number from 0-5 from i

        let y = index++;
        //match all numbers in line with regex
        let numbers = line.match(/\d+/g).map(Number);
        if (!numbers)
            continue;
        for (let x = 0; x < numbers.length; x++) {
            board[y] = board[y] || [];
            board[y][x] = numbers[x];
        }
    }
    boards.push(board);
    board = [];
    index = 0;
    return boards;
}

function part2(contents, split) {
    let called = split[0].split(',').map(Number);

    let boards = loadBoards(split);
    let marked = [];
    let winningBoards = Array(boards.length).fill(false);

    for (let number of called) {
        boards: for (let i = 0; i < boards.length; i++) {
            if (winningBoards[i]) continue;
            let board = boards[i];
            if (!marked[i])
                marked[i] = [];

            for (let y = 0; y < 5; y++) {
                for (let x = 0; x < 5; x++) {
                    if (board[y][x] === number) {
                        marked[i][y] = marked[i][y] || [];
                        marked[i][y][x] = true;
                    }
                }
                let result = checkWinner(board, i, marked, number);
                if (result > 0) {
                    //get number of true values in winning board
                    let count = 0;
                    for (let j = 0; j < winningBoards.length; j++) {
                        if (winningBoards[j])
                            count++;
                    }
                    if (count == boards.length - 1) {
                        for (let j = 0; j < winningBoards.length; j++) {
                            if (!winningBoards[j]) {
                                console.log('Answer to part 2: ' + result);
                                return;
                            }
                        }
                    }
                    winningBoards[i] = true;
                    continue boards;
                }
            }
        }
    }
}

module.exports = { part1, part2 };