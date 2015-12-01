( function() {
  var Asteroids = window.Asteroids;

  if(typeof Asteroids === "undefined")
    window.Asteroids = {};



  // Asteroids.Asteroid = function() {
  //   this.COLOR = "#55FF00",
  //   this.RADIUS = 5
  // };

  var COLOR = "#55FF00";
  // var

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.radius = 5;
    this.color = COLOR;
  };




  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);




})();
