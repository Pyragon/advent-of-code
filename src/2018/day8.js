function part1(contents, split) {
    contents = contents.split(' ').map(Number);

    let metadata = [];
    let i = 0;

    function calculateTree() {
        let children = contents[i++];
        let entries = contents[i++];
        while (children-- > 0) calculateTree();
        while (entries-- > 0) metadata.push(contents[i++]);
    }

    calculateTree();
    console.log('Answer to part 1: ' + metadata.reduce((a, b) => a + b, 0));
}

function part2(contents, split) {

}

module.exports = { part1, part2 };