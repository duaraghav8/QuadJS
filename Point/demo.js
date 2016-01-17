var QuadTree = require ('./lib/QuadTree')
var myTree = new QuadTree ();

myTree.insert (myTree.root, [10, 289], 'Potter');
myTree.insert (myTree.root, [10, 182], 'Malfoy');
myTree.insert (myTree.root, [19, 22], 'Snape');
myTree.insert (myTree.root, [8917, 1892], 'Lockhart');
myTree.insert (myTree.root, [901, 18927], 'Dobby');

console.log (myTree.find (myTree.root, [901, 18927]));
console.log (myTree.find (myTree.root, [10, 299]));
