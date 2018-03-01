module.exports = function getZerosCount(number, base) {
  
  var numberFloor = base;
  var pow = 0;
  var con = 0;
  var k = 0;

  var zeroCnt = number;

  for (var i = 2; i <= base; i++) {
    if (numberFloor % i == 0) {
      pow = 0;

      while (numberFloor % i == 0) {
        pow++;
        numberFloor = Math.floor(numberFloor/i)
      }

      con = 0;
      k = number;

      while (k/i > 0) {
        con += Math.floor(k/i);
        k = Math.floor(k/i);
      }

      zeroCnt = Math.min(zeroCnt, Math.floor(con/pow));
    }
  }

  return zeroCnt;
}