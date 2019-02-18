var day8 = () => {

  var entries = [];

  var index = 0;

  var split;

  function processNode() {
    let numberOfChildren = split[index++];
    let metaDataEntries = split[index++];
    var node = {};
    node.metaDataSize = metaDataEntries;
    node.numberOfChildren = numberOfChildren;
    console.log('Processing nodes. Children: '+numberOfChildren+'. MetaDataEntries: '+metaDataEntries);
    if(numberOfChildren > 0) {
      node.children = [];
      for(let i = 0; i < numberOfChildren; i++)
        node.children.push(processNode());
    }
    node.metadata = [];
    for(let i = 0; i < metaDataEntries; i++) {
      let entry = split[index++];
      entries.push(entry);
      node.metadata.push(entry);
    }
    return node;
  }

  function getValue(node) {
    if(!node.children)
      return node.metadata.map(s => parseInt(s)).reduce((a, b) => a+b);
    let value = 0;
    for(let entry of node.metadata) {
      if(entry-1 >= node.children.length)
        continue;
      value += getValue(node.children[entry-1]);
    }
    return value;
  }

  return {
    run(contents, _) {
      split = contents.split(' ');
      let root = processNode();
      console.log('Part 1: '+entries.map(s => parseInt(s)).reduce((a, b) => a+b));
      console.log('Part 2: '+getValue(root));
    }
  };

};
module.exports = day8();
