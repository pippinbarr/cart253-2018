function Ship(x,y,angle,acceleration,maxSpeed,turningSpeed,leftKey,rightKey,accelerateKey,brakeKey,shootKey,shipImage,bulletImage,shrinkPerFrame) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.speed = 0;
  this.size = shipImage.width;
  this.minSize = 1;
  this.maxSize = shipImage.width;
  this.shrinkPerFrame = shrinkPerFrame;
  this.acceleration = acceleration;
  this.maxSpeed = maxSpeed;
  this.turningSpeed = turningSpeed;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
  this.accelerateKey = accelerateKey;
  this.shootKey = shootKey;
  this.brakeKey = brakeKey;
  this.bullets = [];
  this.maxBullets = 10;
  this.shipImage = shipImage;
  this.bulletImage = bulletImage;
  this.bulletCoolDown = 0;
  this.bulletCoolDownMax = 10;
  this.growPerBullet = 2;
  this.alive = true;
}

Ship.prototype.handleInput  = function () {

  if (!this.alive) {
    return;
  }

  if (keyIsDown(this.leftKey)) {
    this.angle -= this.turningSpeed;
  }
  else if (keyIsDown(this.rightKey)) {
    this.angle += this.turningSpeed;
  }

  if (keyIsDown(this.accelerateKey)) {
    this.speed += this.acceleration;
  }
  else if (keyIsDown(this.brakeKey)) {
    this.speed -= this.acceleration;
  }

  this.speed = constrain(this.speed,0,this.maxSpeed);

  this.bulletCoolDown -= 1;
  this.bulletCoolDown = constrain(this.bulletCoolDown - 1,0,this.bulletCoolDownMax)
  if (keyIsDown(this.shootKey) && this.bulletCoolDown === 0) {
    var newBullet = {
      x: this.x,
      y: this.y,
      vx: this.maxSpeed * cos(this.angle),
      vy: this.maxSpeed * sin(this.angle)
    }
    this.bullets.push(newBullet);
    this.bulletCoolDown = this.bulletCoolDownMax;
  }
}

Ship.prototype.move = function () {
  if (!this.alive) {
    return;
  }

  this.size -= this.shrinkPerFrame;
  this.size = constrain(this.size,this.minSize,this.maxSize);

  if (this.size === this.minSize) {
    this.alive = false;
    return;
  }

  var vx = this.speed * cos(this.angle);
  var vy = this.speed * sin(this.angle);

  this.x += vx;
  this.y += vy;

  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }

  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }
}

Ship.prototype.updateBullets = function (otherShip) {
  for (var i = 0; i < this.bullets.length; i++) {
    var bullet = this.bullets[i];

    bullet.x += bullet.vx;
    bullet.y += bullet.vy;

    if (bullet.x > otherShip.x - otherShip.size/2 && bullet.x < otherShip.x + otherShip.size/2) {
      if (bullet.y > otherShip.y - otherShip.size/2 && bullet.y < otherShip.y + otherShip.size/2) {
        otherShip.size += otherShip.growPerBullet;
        otherShip.size = constrain(otherShip.size,otherShip.minSize,otherShip.maxSize);
      }
    }
  }
}

Ship.prototype.display = function () {
  if (!this.alive) {
    return;
  }

  push();
  imageMode(CENTER);
  translate(this.x,this.y);
  rotate(this.angle);
  image(this.shipImage,0,0,this.size,this.size);
  pop();

  for (var i = 0; i < this.bullets.length; i++) {
    push();
    image(bulletImage,this.bullets[i].x,this.bullets[i].y,10,10);
    pop();
  }
}
