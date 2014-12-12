var Point = function(x, y) {
    
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
};



var a = [[3, 1, 0], [2, 1, 2], [1, 3, 1]];
var b = [[2, 1, 3]];

console.log(multiplyMatrix(a, b));
