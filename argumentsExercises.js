
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

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!
