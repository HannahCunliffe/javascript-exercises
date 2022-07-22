const leapYears = function(inputYear) {

// old version:
 //   if (inputYear % 4 == 0) {
  //      if (inputYear % 100 == 0) {
  //          if (inputYear % 400 == 0) {
  //              return true;
 //           }
 //           else {
 //               return false;
  //          }
  //      }
 //       return true;
 //   }
 //   else {
//        return false;
//    };


//condensed version:
// checks if input year divides by 4, then also checks if it is not divisible by 100 with 
// it being divisble by 400 the exception which is a leap year
    if (inputYear % 4 == 0 && (inputYear % 100 !== 0 || inputYear % 400 == 0)) {
        return true;
    }
    else {
        return false;
    };


};

// Do not edit below this line
module.exports = leapYears;
