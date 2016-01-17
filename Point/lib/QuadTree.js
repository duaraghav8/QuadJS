var Node = (function (key, value) {
	this.key = key;
	this.value = value;
	this.NE = null, this.NW = null, this.SE = null, this.SW = null;
});

var QuadTree = (function () {
	this.root = new Node ([-Infinity, -Infinity], null);
});

QuadTree.prototype.insert = function (root, key, value) {
	/*NOTE: If 2 X-axis Keys are equal, the key to be inserted is sent to the west of the current one.
			If 2 Y-axis Keys are equal, the key to be inserted is sent to the south of the current one.
	*/

	if (key [0] > root.key [1]) {
		if (key [1] > root.key [1]) {
			if (root.NE == null) {
				root.NE = new Node (key, value);
			}
			else {
				this.insert (root.NE, key, value);
			}
		}
		else {
			if (root.SE == null) {
				root.SE = new Node (key, value);
			}
			else {
				this.insert (root.SE, key, value);
			}
		}
	}
	else {
		if (key [1] > root.key [1]) {
			if (root.NW == null) {
				root.NW = new Node (key, value);
			}
			else {
				this.insert (root.NW, key, value);
			}
		}
		else {
			if (root.SW == null) {
				root.SW = new Node (key, value);
			}
			else {
				this.insert (root.SW, key, value);
			}
		}
	}
}

QuadTree.prototype.find = function (root, key) {
	if (root.key [0] == key [0] && root.key [1] == key [1]) {
		return (root.value);
	}
	else {
		if (key [0] > root.key [0]) {
			if (key [1] > root.key [1]) {
				if (root.NE == null) {
					return (null);
				}
				else {
					return (this.find (root.NE, key));
				}
			}
			else {
				if (root.SE == null) {
					return (null);
				}
				else {
					return (this.find (root.SE, key));
				}
			}
		}
		else {
			if (key [1] > root.key [1]) {
				if (root.NW == null) {
					return (null);
				}
				else {
					return (this.find (root.NW, key));
				}
			}
			else {
				if (root.SW == null) {
					return (null);
				}
				else {
					return (this.find (root.SW, key));
				}
			}
		}
	}
}

module.exports = QuadTree;