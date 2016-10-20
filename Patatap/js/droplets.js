function onKeyDown(event) {

var intervalID = window.setInterval(theLoop, .01);
function theLoop(){
    for (i = 0; i < 1; i++) {
            var maxPoint = new Point(view.size.width, view.size.height);
            var randomPoint = Point.random();
            var point = maxPoint * randomPoint;
        
        new Path.Circle(point, 10).fillColor = "blue";
    }
}


}