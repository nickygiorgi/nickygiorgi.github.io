class Picture {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }
  
  randomPoint() {
	  return new Point(randomNumber(0, this.width), randomNumber(0, this.height));
  }
}
