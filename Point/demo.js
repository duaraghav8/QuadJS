var QuadTree = require ('./lib/QuadTree');
var myTree = new QuadTree ();
var locations = [
	[35, 40, 'Downtown'],
	[60, 75, 'Kirkland'],
	[80, 65, 'Mustafa'],
	[5, 45, '6th Avenue'],
	[85, 15, 'Cafe Headquarters'],
	[50, 10, 'Shit Street'],
	[90, 5, 'Cute Street'],
	[25, 35, 'dafuck Street']
];

locations.forEach (function (location) {
	myTree.insert (myTree.root, location [0], location [1], location [2]);
});

console.log (myTree.find (myTree.root, 90, 5));