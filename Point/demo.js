var QuadTree = require ('./lib/QuadTree')
var myTree = new QuadTree ();

myTree.insert (myTree.root, [10, 289], 'Hello worlde');
myTree.insert (myTree.root, [10, 182], 'Helluwysgude');
myTree.insert (myTree.root, [19, 22], 'Helluwysgude');
myTree.insert (myTree.root, [8917, 1892], 'Helluwysgude');
myTree.insert (myTree.root, [901, 18927], 'Helluwysgude');

console.log (myTree.find (myTree.root, [901, 18927]));
console.log (myTree.find (myTree.root, [10, 299]));