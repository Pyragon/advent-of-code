function part1(contents, split) {

    let folders = [];
    let seen = [];
    let cwd = [];
    let size = 0;
    for (let line of split) {
        line = line.split(' ');
        if (line[1] == 'cd') {
            if (line[2] == '..') {
                cwd.pop();
                size = 0;
            } else {
                cwd.push(line[2]);
            }
        } else if (!isNaN(line[0])) {
            for (let i = 0; i < cwd.length; i++) {
                let folderPath = cwd.slice(0, i + 1).join('/');
                if (!folders[folderPath])
                    folders[folderPath] = 0;
                folders[folderPath] += parseInt(line[0]);
            }
        }
    }
    //filter all folders with less than 100000 and sum them
    console.log('Answer to part 1: ' + Object.values(folders).filter(x => x <= 100000).reduce((a, b) => a + b, 0));
    // console.log(folders);
}

function part2(contents, split) {

    let folders = [];
    let seen = [];
    let cwd = [];
    let size = 0;
    for (let line of split) {
        line = line.split(' ');
        if (line[1] == 'cd') {
            if (line[2] == '..') {
                cwd.pop();
                size = 0;
            } else {
                cwd.push(line[2]);
            }
        } else if (!isNaN(line[0])) {
            for (let i = 0; i < cwd.length; i++) {
                let folderPath = cwd.slice(0, i + 1).join('/');
                if (!folders[folderPath])
                    folders[folderPath] = 0;
                folders[folderPath] += parseInt(line[0]);
            }
        }
    }
    let totalSpace = 70000000;
    let spaceAvailable = totalSpace - folders['/'];
    let neededSpace = 30000000 - spaceAvailable;
    let sortedFolders = Object.entries(folders).sort((a, b) => a[1] - b[1]);
    for (let folder of sortedFolders) {
        if (folder[1] <= neededSpace) continue;
        console.log('Answer to part 2: ' + folder[1]);
        return;
    }

}

module.exports = { part1, part2 };