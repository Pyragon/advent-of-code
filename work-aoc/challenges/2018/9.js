const PLAYERS = 459;
const LAST_MARBLE = 71790;

var day9 = () => {

  var circle = [];

  var curr_marble = 0;

  function placeMarble(marble) {
    var index = curr_marble+2;
    if(index > circle.length)
      index -= circle.length;
  }

  return {
    run(_, __) {
      circle.push(0);
      circle.push(1);
      for(let i = 0; i < LAST_MARBLE; i++) {

      }
    }
  };

};
module.exports = day9();
