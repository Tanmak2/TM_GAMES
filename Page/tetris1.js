var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var lineRowCount = 16;
var lineColCount = 10;
var lineWidth = 50;
var lineHeight = 50;
var timeControl = 0;
var rightPressd = false;
var leftPressd = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
  if (e.keyCode == 37) {
    leftPressd = true;
  }
  if (e.keyCode == 39) {
    rightPressd = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 37) {
    leftPressd = false;
  }
  if (e.keyCode == 39) {
    rightPressd = false;
  }
}

class Block {
  constructor(x, y, width, height) {
    this.x = 150;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
  drawRectangle() {
    this.width = 200;
    this.height = 50;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = '#0095FF';
    ctx.fill();
    ctx.closePath();
  }
  drawSquare() {
    this.width = 100;
    this.height = 100;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = '#0095FF';
    ctx.fill();
    ctx.closePath();
  }
  drawZigzag() {
    this.width = 150;
    this.height = 100;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 100, this.y);
    ctx.lineTo(this.x + 100, this.y + 50);
    ctx.lineTo(this.x + 150, this.y + 50);
    ctx.lineTo(this.x + 150, this.y + 100);
    ctx.lineTo(this.x + 50, this.y + 100);
    ctx.lineTo(this.x + 50, this.y + 50);
    ctx.lineTo(this.x, this.y + 50);
    ctx.fillStyle = '#0095FF';
    ctx.fill();
    ctx.closePath();
  }
  drawNieun() {
    this.width = 150;
    this.height = 100;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 50, this.y);
    ctx.lineTo(this.x + 50, this.y + 50);
    ctx.lineTo(this.x + 150, this.y + 50);
    ctx.lineTo(this.x + 150, this.y + 100);
    ctx.lineTo(this.x, this.y + 100);
    ctx.fillStyle = '#0095FF';
    ctx.fill();
    ctx.closePath();
  }
  drawVowel() {
    this.width = 150;
    this.height = 100;
    ctx.beginPath();
    ctx.moveTo(this.x + 50, this.y);
    ctx.lineTo(this.x + 100, this.y);
    ctx.lineTo(this.x + 100, this.y + 50);
    ctx.lineTo(this.x + 150, this.y + 50);
    ctx.lineTo(this.x + 150, this.y + 100);
    ctx.lineTo(this.x, this.y + 100);
    ctx.lineTo(this.x, this.y + 50);
    ctx.lineTo(this.x + 50, this.y + 50);
    ctx.fillStyle = '#0095FF';
    ctx.fill();
    ctx.closePath();
  }
}

function lineDraw() {
  for (var c = 0; c < lineColCount; c++) {
    for (var r = 0; r < lineRowCount; r++) {
      var lineX = c * lineWidth;
      var lineY = r * lineHeight;
      ctx.beginPath();
      ctx.rect(lineX, lineY, lineWidth, lineHeight);
      ctx.strokeStyle = '#999';
      ctx.stroke();
      ctx.closePath();
    }
  }
}
var block = new Block();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lineDraw();

  if (timeControl % 5 == 0) {
    if (leftPressd && block.x > 0) {
      block.x -= 50;
    }
    if (rightPressd && block.x < canvas.width - block.width) {
      block.x += 50;
    }
  }
  timeControl++;
  if (timeControl == 30) {
    timeControl = 0;
    if (block.y < canvas.height - block.height) {
      block.y += 50;
    }
  }
  requestAnimationFrame(draw);
}
draw();
