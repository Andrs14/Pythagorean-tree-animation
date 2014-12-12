var Figure = function(ctx) {
    var points = [];

    function createPath() {
	ctx.beginPath();
	points.forEach(function(value, index) {
	    if (index === 0) {
		ctx.moveTo(value.getX(), value.getY());
	    }
	    else {
		ctx.lineTo(value.getX(), value.getY());
	    }
	});
	
    }
    
    this.addPoint = function(x, y) {
	points[points.length] = new Point(x, y);
    };

    this.translate = function(dx, dy) {
	points.forEach(function(value) {
	    value.translate(dx, dy);
	});
    };

    this.scale = function(sx, sy) {
	points.forEach(function(value) {
	    value.scale(sx, sy);
	});
    };

    this.rotate = function(angle) {
	points.forEach(function(value) {
	    value.rotate(angle);
	});
    };

    this.stroke = function() {
	createPath();
	ctx.stroke();
    };

    this.fill = function() {
	createPath();
	ctx.fill();
    };
};
