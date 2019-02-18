String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const valid = "abcdefghjkmnpqrstuvwxyz";
const lookup = {}
for (let n = 1; n < valid.length; n++) {
    lookup[valid[n - 1]] = valid[n];
}
let run = "";
for (let n = 0; n < valid.length - 2; n++) {
    run += valid.slice(n, n + 3) + "|";
}
run = run.slice(0, -1);

function isValid(pwd) {
    return pwd.match(/(\w)\1.*(\w)\2/g) && pwd.match(run);
}

module.exports = {

    part1: function(contents, lines) {
        console.log(this.getNext(contents));
        // do {
        //     //console.log(contents);
        //     contents = this.getNext(contents);
        //     console.log(contents);
        // } while (!isValid(contents))
        // console.log(contents);
    },

    getNext: function(curr) {
        let out = ""
        let carry = true;
        console.log(curr);
        for (var n = curr.length - 1; n >= 0; n--) {
            if (carry && curr[n] === 'z') {
                out = 'a' + out;
                carry = true;
            } else if (carry) {
                // String.fromCharCode(curr.charCodeAt(n) + 1)
                console.log(curr[n]);
                console.log(lookup[curr[n]])
                out = lookup[curr[n]] + out;
                carry = false;
            } else {
                out = curr[n] + out;
            }
        }
        if (carry) out = "z" + out;
        console.log(out);
        return out;
    },

    nextCode: function(lett) {
        var code = lett.charCodeAt();
        if (code == 122) return 97;
        return code + 1;
    },

    part2: function(contents, lines) {

    }

};