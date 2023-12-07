function part1(contents, split) {

    let position = 0;
    let steps = parseInt(contents);

    let buffer = [0];
    for (let i = 0; i < 2017; i++) {
        position = (position + steps) % buffer.length + 1;
        buffer.splice(position, 0, i + 1);
    }
    for (let i = 0; i < buffer.length; i++) {
        if (buffer[i] == 2017) {
            console.log('Answer to part 1: ' + buffer[i + 1]);
            break;
        }
    }

}

function part2(contents, split) {

    let position = 0;
    let steps = parseInt(contents);

    let buffer = [0];
    for (let i = 0; i < 2017; i++) {
        position = (position + steps) % buffer.length + 1;
        buffer.splice(position, 0, i + 1);
    }
    for (let i = 0; i < buffer.length; i++) {
        if (buffer[i] == 2017) {
            console.log('Answer to part 1: ' + buffer[i + 1]);
            break;
        }
    }
}

function CircularBuffer(n) {
    this._array = new Array(n);
    this.length = 0;
}
CircularBuffer.prototype.toString = function() {
    return '[object CircularBuffer(' + this._array.length + ') length ' + this.length + ']';
};
CircularBuffer.prototype.get = function(i) {
    if (i < 0 || i < this.length - this._array.length)
        return undefined;
    return this._array[i % this._array.length];
};
CircularBuffer.prototype.add = function(i, value) {
    if (i < 0 || i < this.length - this._array.length)
        throw CircularBuffer.IndexError;
    this._array[i % this._array.length] = value;
};
CircularBuffer.prototype.set = function(i, v) {
    if (i < 0 || i < this.length - this._array.length)
        throw CircularBuffer.IndexError;
    while (i > this.length) {
        this._array[this.length % this._array.length] = undefined;
        this.length++;
    }
    this._array[i % this._array.length] = v;
    if (i == this.length)
        this.length++;
};
CircularBuffer.IndexError = {};

module.exports = { part1, part2 };