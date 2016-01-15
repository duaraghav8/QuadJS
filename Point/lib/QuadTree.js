var Node = (function (x, y, value) {
	this.x = x;
	this.y = y;
	this.value = value;
	this.NW = null, this.NE = null, this.SW = null, this.SE = null;
});

var QuadTree = (function () {
	this.root = null;
});

QuadTree.prototype.insert = function (root, x, y, value) {
	console.log (root);
	if (root == null) {
		root = new Node (x, y, value);
		//console.log ('done');
	}
	else {
		if (x > root.x) {
			if (y > root.y) {
				this.insert (root.NE, x, y, value);
			}
			else {
				this.insert (root.SE, x, y, value);
			}
		}
		else {
			if (y > root.y) {
				this.insert (root.NW, x, y, value);
			}
			else {
				this.insert (root.SW, x, y, value);
			}
		}
	}
};

QuadTree.prototype.find = function (root, x, y) {
	if (root.x == x && root.y == y) {
		return (root.value);
	}
	else {
		if (x > root.x) {
			if (y > root.y) {
				this.find (root.NE, x, y);
			}
			else {
				this.find (root.SE, x, y);
			}
		}
		else {
			if (y > root.y) {
				this.find (root.NW, x, y);
			}
			else {
				this.find (root.SW, x, y);
			}
		}
	}
};

QuadTree.prototype.nearestNeighbour = function (root, x, y) {
	//logic for Nearest Neighbour
}

module.exports = QuadTree;