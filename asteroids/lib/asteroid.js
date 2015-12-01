( function() {
  var Asteroids = window.Asteroids;

  if(typeof Asteroids === "undefined")
    window.Asteroids = {};



  // Asteroids.Asteroid = function() {
  //   this.COLOR = "#55FF00",
  //   this.RADIUS = 5
  // };

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.RADIUS = 5;
    this.COLOR = "#55FF00";
  };


  //  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
Asteroids.Util.inherits(Asteroid, MovingObject);




})();
