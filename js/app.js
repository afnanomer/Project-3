// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

if (this.x > 510) {
    this.x = -50;
};

//lets reset player position when hit the enemy
if (player.x > (this.x - 50) && player.x < (this.x + 50) && player.y > (this.y - 50) && player.y < (this.y + 50)){
  player.resetPlayer();
}
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player_X = 202;
var Player_Y = 404;

var Player = function(){
  console.log('here')
  this.x = Player_X;          //set player current location
  this.y = Player_Y;

  this.sprite = 'images/char-princess-girl.png';   //load player image
};


//now,lets draw the Player
Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(keyUp){    //here to move the player in all directions.
  if (keyUp == 'left' && this.x > 0){
    this.x -= 102;
  };
  if (keyUp == 'right' && this.x < 404){
    this.x += 102;
  };
  if (keyUp == 'up' && this.y > 0){
    this.y -= 83;
  };
  if (keyUp == 'down' && this.y < 404){
    thix.y += 83;
  };

  if(this.y < 0){
    setTimeout(function(){
      this.x = 202;
      this.y = 404;
    }, 600);
  };
};

Player.prototype.update = function(){          //alert comes up when player reach the water
  if (this.y <= 0){
    alert("Congrats, you won the game");
    this.resetPlayer();                        //reset the player position to the beg after player won.
  }
};

Player.prototype.resetPlayer = function(){
  this.x = Player_X;
  this.y = Player_Y;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

//place each enemy with different row with any speed
for (var i = 0; i < 3; i++) {
    var Speed = Math.floor(Math.random() * 5 + Math.random() * 5) * 100;
    allEnemies.push(new Enemy(-50, (85 * i) + 60, Speed));
};
// Place the player object in a variable called player
var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
