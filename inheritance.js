
Function.prototype.inherits = function(Superclass) {
  function Surrogate() {}

  Surrogate.prototype = Superclass.prototype;

  this.prototype = new Surrogate();

  this.prototype.constructor = this;
};
