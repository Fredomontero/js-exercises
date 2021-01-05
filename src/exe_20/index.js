let n = 0;
let level = '<div class="triangle top parent"></div>' +
'<div class="triangle left parent"></div>' +
'<div class="triangle middle"></div>' +
'<div class="triangle right parent"></div>';

const cleanRoot = () => {
  let root = document.getElementsByClassName("root")[0];
  root.innerHTML = "";
}

const changenumber = () => {
  n = document.getElementById("select_id").value;
  if(n > 0) generateSierpinskiTriangle(n);
  else cleanRoot();
}

const generateSierpinskiTriangle = (n) => {
  cleanRoot()

  const generateTriangles = (current) => {
    let divs = [...document.querySelectorAll(".parent:empty")];
    divs.map(div => div.innerHTML = level);
    if(current++ < n) generateTriangles(current);
  };

  generateTriangles(1);

};

module.exports = generateSierpinskiTriangle;