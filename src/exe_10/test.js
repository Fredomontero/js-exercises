const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
const openPar = /\(/g;
let result = bTree.match(/\(/g).length === bTree.match(/\)/g).length;
console.log(result);
