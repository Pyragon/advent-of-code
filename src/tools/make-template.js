const fs = require('fs');

let args = process.argv.slice(2).map(Number);
createTemplate(args[0], args[1]);

function createTemplate(year, day) {
    const template = fs.readFileSync('./src/tools/template.js', 'utf8');

    let path = `./src/${year}/day${day}.js`;
    //check if file already exists
    if (fs.existsSync(path)) {
        console.log('File already exists');
        return;
    }
    fs.writeFileSync(path, template);
}

module.exports = createTemplate;