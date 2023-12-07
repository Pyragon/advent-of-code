function part1(contents, split) {

    let nodes = {};
    while (true) {
        let more = false;
        for (let line of split) {
            let [name, children] = line.split(' -> ');
            let [nodeName, weight] = name.split(' ');
            if (!nodes[nodeName]) {
                nodes[nodeName] = { name: nodeName, weight: parseInt(weight.slice(1, -1)), parent: null };
                more = true;
            }
            if (children) {
                for (let child of children.split(', ')) {
                    if (nodes[child] && !nodes[child].parent) {
                        nodes[child].parent = nodeName;
                        more = true;
                    }
                }
            }
        }
        if (!more) break;
    }
    for (let node of Object.values(nodes)) {
        if (!node.parent)
            console.log('Answer to part 1: ' + node.name);
    }
}

function part2(contents, split) {

    let nodes = {};
    while (true) {
        let more = false;
        for (let line of split) {
            let [name, children] = line.split(' -> ');
            let [nodeName, weight] = name.split(' ');
            if (!nodes[nodeName]) {
                nodes[nodeName] = { name: nodeName, weight: parseInt(weight.slice(1, -1)), parent: null, children: [] };
                more = true;
            }
            if (children) {
                for (let child of children.split(', ')) {
                    if (nodes[child] && !nodes[child].parent) {
                        nodes[child].parent = nodeName;
                        nodes[nodeName].children.push(child);
                        more = true;
                    }
                }
            }
        }
        if (!more) break;
    }
    let parent;
    for (let node of Object.values(nodes)) {
        if (!node.parent)
            parent = node;
    }

}

module.exports = { part1, part2 };