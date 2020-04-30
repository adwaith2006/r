

var raindrops = [];

function setup() {
  createCanvas(600, 300);
  for (var i = 0; i < 190; i++) {
    raindrops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < raindrops.length; i++) {
    raindrops[i].fall();
    raindrops[i].display();
  }
}
