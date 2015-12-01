( function() {
  var Asteroids = window.Asteroids;


  if(typeof Asteroids === "undefined")
    window.Asteroids = {};
    
  var Util = window.Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {}

    Surrogate.prototype = ParentClass.prototype;

    ChildClass.prototype = new Surrogate();

    ChildClass.prototype.constructor = ChildClass;
  };

})();
