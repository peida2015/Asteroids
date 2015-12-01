
function sum() {
  var nums = Array.prototype.slice.call(arguments);
  var numSum = 0;

  for(var i = 0; i < nums.length; i++) {
    numSum += nums[i];
  }

  return numSum;
}

// console.log(sum(1,2,-3,4,5));


Function.prototype.myBind = function() {
  var fn = this;
  var args = Array.prototype.slice.call(arguments);
  var ctx = args[0];

  console.log(args);
  var params = args.slice(1);
  // console.log("params: " + params);

  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    return fn.apply(ctx, params.concat(args2));
  };
};

function curriedSum (numArgs) {
  var numbers = [];

  return function _curriedSum (num) {
    numbers.push(num);

    if (numbers.length === numArgs){
      var total = 0;
      for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      // console.log("typeof this.constructor is: " + typeof this.constructor);

      return _curriedSum;
    }
  };

}

Function.prototype.curry = function (numArgs) {
  var numbers = [];
  var orig = this;

  return function _curriedSum (num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      console.log(numbers);
      return orig.apply(null, numbers);
    }
    else {
      return _curriedSum;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// you'll write `Function#curry`!
var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
