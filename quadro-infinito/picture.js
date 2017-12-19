class Picture {
  constructor(canvas) {
    this.canvas = canvas;
	var picture = this;
	setInterval(function(){ picture.drawRandomLine(); }, 1000);
  }
  
  randomPoint() {
	return new Point(randomNumber(0, this.canvas.width), randomNumber(0, this.canvas.height));
  }
  
  drawRandomLine() {
	var randomStart = this.randomPoint();
	var randomEnd = this.randomPoint();
	var context = this.canvas.getContext("2d");
	context.strokeStyle = randomHexadecimalColour();
	context.beginPath();
	context.moveTo(randomStart.x, randomStart.y);
	context.lineTo(randomEnd.x, randomEnd.y);
	context.stroke();
  }
}
