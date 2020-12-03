const validateTrre = (tree) => {
  let regex = /[^A-Za-z0-9(),]/;
  if(regex.test(tree)){
    throw 'Invalid characters in the tree representation';
  }else{
    console.log("All characters are valid");
  }
};

const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
console.log(validateTrre(bTree));

// module.exports = validateTrre;