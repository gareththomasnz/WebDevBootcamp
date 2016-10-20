//var sound = new Wad({
//	source: './sounds/bubbles.mp3'
//});

var circles = [];

function onKeyDown(event) {

	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 200);
	newCircle.fillColor = "orange";
	circles.push(newCircle);
	//sound.play();
}

//var animateCircle = new Path.Circle(new Point(300, 100), 100);
//animateCircle.fillColor = "yellow"

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(0.9);
	}
	//animateCircle.fillColor.hue += 1;
	//animateCircle.scale(.9);
}