function part1(contents, split) {
    console.log('Answer to part 1:', contents.split(',').map(hash).reduce((a, b) => a + b, 0));
}

function hash(str) {
    return str.split('').reduce((a, b) => ((a + b.charCodeAt(0)) * 17) % 256, 0);
}

function part2(contents, split) {
    let boxes = [];
    for (let i = 0; i < 256; i++)
        boxes[i] = [];

    for (let instruction of contents.split(',')) {
        let [_, label, operation, value] = instruction.match(/([a-z]+)([-=])(\d+)?/);
        let hashValue = hash(label);
        let box = boxes[hashValue];
        let index;
        switch (operation) {
            case '-':
                index = box.findIndex(b => b.label === label);
                if (index !== -1)
                    box.splice(index, 1);
                break;
            case '=':
                index = box.findIndex(b => b.label === label);
                if (index !== -1)
                    box[index].value = parseInt(value);
                else
                    box.push({
                        label,
                        value: parseInt(value)
                    });
                break;
        }
    }
    let total = 0;
    for (let index in boxes) {
        index = parseInt(index);
        let box = boxes[index];
        for (let i = 0; i < box.length; i++)
            total += (index + 1) * (i + 1) * box[i].value;
    }
    console.log('Answer to part 2:', total);
}

module.exports = { part1, part2 };