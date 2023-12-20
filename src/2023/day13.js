function part1(contents, split) {
    let grids = contents.split("\n\n");
    let total = 0;
    grids = grids.map(grid => grid.split("\n"));
    for (let g = 0; g < grids.length; g++) {
        let rows = [];
        let columns = [];
        for (let y = 0; y < grids[g].length; y++) {
            rows[y] = [];
            for (let x = 0; x < grids[g][0].length; x++) {
                if (!columns[x]) columns[x] = [];
                rows[y].push(grids[g][y][x]);
                columns[x].push(grids[g][y][x]);
            }
        }
        //start at row/column 1, continue through
        //variable is i, if row[i] = row[row.length - i], keep going until i == rows.length - i, we found the line, if not, i++ and keep going
        //if not, go through columns
        let found = false;
        h: for (let i = 1; i < rows.length; i++) {
            if (i == rows.length - i && found) {
                console.log('we found the line', rows[i], rows[rows.length - 1 - i], i);
                break;
            }
            let row = rows[i];
            let check = rows[rows.length - 1 - i];
            for (let j = 0; j < row.length; j++) {
                if (row[j] != check[j]) {
                    found = false;
                    //redo this, because it won't work
                    //we should probably keep checking i, and i+1 to find identical rows, then just backtrack and see if the previous/forward rows match up with eachother
                    //if they do, we found the row, if not, it's probably a horizontal line
                    continue h;
                }
            }
            found = true;
        }
    }
    console.log(total);
}

function part2(contents, split) {

}

module.exports = { part1, part2 };