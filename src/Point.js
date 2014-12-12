var Point = function(x, y) {
    //Homogenous coordinates
    var p = [[x, y, 1]];
    
    function multiplyMatrix(a, b) {
	var c = [];
	var acum = 0;
	//Checking if the numbers of columns of 'a' is equal to the number of rows of 'b'
	if (a.length === b[0].length) {
	    for(var i = 0; i < b.length; i++) {
		c[i] = [];
		for(var j = 0; j < a[0].length; j++) {
		    acum = 0;
		    for(var k = 0; k < a.length; k++) {
			acum += a[k][j] * b[i][k];
		    }
		    c[i][j] = acum;
		}
	    }
	    return c;
	}
	else {
	    return null;
	}
    }

    this.getCoordinates = function() {
	return {
	    x: p[0][0],
	    y: p[0][1]
	};
    };

    this.getX = function() {
	return p[0][0];
    };

    this.getY = function() {
	return p[0][1];
    };

    this.setX = function(x) {
	p[0][0] = x;
    };

    this.setY = function(y) {
	p[0][1] = y;
    };

    this.setCoordinates = function(x, y) {
	p[0][0] = x;
	p[0][1] = y;
    };
    
    this.translate = function(dx, dy) {
	var t = [[1, 0, 0], [0, 1, 0], [dx, dy, 1]];

	p = multiplyMatrix(t, p);
    };

    this.scale = function(sx, sy) {
	var s = [[sx, 0, 0], [0, sy, 0], [0, 0, 1]];

	p = multiplyMatrix(s, p);
    };

    this.rotate = function(angle) {
	var r = [[Math.cos(angle), Math.sin(angle), 0], [-Math.sin(angle), Math.cos(angle), 0], [0, 0, 1]];

	p = multiplyMatrix(r, p);
    };
};

