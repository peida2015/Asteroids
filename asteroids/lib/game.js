(function  () {
  var Asteroids = window.Asteroids;

  if (typeof Asteroids === "undefined")
    window.Asteroids = {};

  var DIM_X = 800, DIM_Y = 600, NUM_ASTEROIDS = 20;


  var Game = Asteroids.Game = function () {
    this.asteroids = Game.prototype.addAsteroids();
  };

  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      asteroids.push(new Asteroids.Asteroid(
        this._randomPos(), this._randomVel()));
    }
    return asteroids;
  };

  Game.prototype._randomPos = function () {
    return [Math.random() * DIM_X, Math.random() * DIM_Y];
  };

  Game.prototype._randomVel = function () {
    return [Math.random() * 20 - 10, Math.random() * 20 - 10];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);

    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Game.prototype.moveObjects = function () {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      this.asteroids[i].move();
    }
  };


})();
