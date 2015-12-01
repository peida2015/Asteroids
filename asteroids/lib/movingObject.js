(function() {
  var Asteroids = window.Asteroids;

  if(typeof Asteroids === "undefined")
    window.Asteroids = {};

  // var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
  //   this.pos = pos;
  //   this.vel = vel;
  //   this.radius = radius;
  //   this.color = color;
  // };

  var MovingObject = Asteroids.MovingObject = function (object) {
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
  };

  // Asteroid.MovingObject = function (object) {
  //   return new Asteroid(
  //     object.pos,
  //     object.vel,
  //     object.radius,
  //     object.color
  //   );
  // };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

})();
