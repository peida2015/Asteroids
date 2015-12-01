(function() {
  var Asteroids = window.Asteroids;

  if(typeof Asteroids === "undefined")
    window.Asteroids = {};

  var GameView = Asteroids.GameView = function (game, canvas) {
    this.game = game;
    this.canvas = canvas;
  };

  GameView.prototype.start = function () {
    var game = this.game;
    var canvas = this.canvas;
    setInterval(function () {
      game.moveObjects();
      game.draw(canvas)}, 200);
  };

})();
