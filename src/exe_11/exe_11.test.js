const { expect } = require('@jest/globals');
require('@testing-library/jest-dom');
const querySelectorAll = require('./exe_11');

test("Should return the direct parent of the elements that match the selector", () => {
  document.body.innerHTML =
    '<section>' +
      '<div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>' +
      '<div id="2" class="note"></div>' +
      '<div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>' +
      '<div id="4" class="note"></div>' +
      '<div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>' +
    '</section>';
  const parents = querySelectorAll("div.note < input.is-complete[checked]");
  expect(parents.length).toBe(3);
  for(let i = 0; i<parents.length; i++){
    expect(parents[i]).toHaveAttribute('id', `${2*i + 1}`);
    expect(parents[i]).toHaveClass('note');
    expect(parents[i]).toContainHTML('<input type="checkbox" class="is-complete" checked="">');
  }
});

test("Should return the direct parent of the elements that match the selector", () => {
  document.body.innerHTML =
    '<section>'+
      '<div>'+
        '<div id="1" class="container">'+
          '<h1 class="mainTitle">Title 1</h1>'+
        '</div>'+
        '<div id="2" class="container">'+
          '<h1 class="mainTitle">Title 2</h1>'+
        '</div>'+
      '</div>'+
    '</section>';
  const parents = querySelectorAll("div.container < h1.mainTitle");
  expect(parents.length).toBe(2);
  for(let i = 0; i<parents.length; i++){
    expect(parents[i]).toHaveAttribute('id', `${i + 1}`);
    expect(parents[i]).toHaveClass('container');
    expect(parents[i]).toContainHTML(`<h1 class="mainTitle">Title ${i+1}</h1>`);
  }
});

test("Should return the direct parent of the elements that match the selector", () => {
  document.body.innerHTML =
  '<div>'+
    '<div id="1" class="item">'+
      '<img class="productImage" src="example.com/img" alt="***">'+
      '<h2 class="productName">item name</h2>'+
      '<p class="productDescription">item description</p>'+
    '</div>'+
    '<div id="2" class="item">'+
      '<img class="productImage" src="example.com/img" alt="***">'+
      '<h2 class="productName">item name</h2>'+
      '<p class="productDescription">item description</p>'+
    '</div>'+
    '<div id="3" class="item">'+
      '<img class="productImage" src="example.com/img" alt="***">'+
      '<h2 class="productName">item name</h2>'+
      '<p class="productDescription">item description</p>'+
    '</div>'+
    '<div id="4" class="item">'+
      '<img class="productImage" src="example.com/img" alt="***">'+
      '<h2 class="productName">item name</h2>'+
      '<p class="productDescription">item description</p>'+
    '</div>'+
  '</div>';
  const parents = querySelectorAll("div.item < p.productDescription");
  expect(parents.length).toBe(4);
  for(let i = 0; i<parents.length; i++){
    expect(parents[i]).toHaveAttribute('id', `${i + 1}`);
    expect(parents[i]).toHaveClass('item');
    expect(parents[i]).toContainHTML('<p class="productDescription">item description</p>');
  }
});

test("It should only select direct parents that matches the selector", () => {
  document.body.innerHTML =
  '<section>'+
    '<div id="1" class="note">'+
      '<div id="out" class="outter">'+
        '<div class="inner">One</div>'+
      '</div>'+
    '</div>'+
    '<div id="2" class="note">'+
      '<div id="out" class="outter">'+
        '<div class="inner">Two</div>'+
      '</div>'+
    '</div>'+
  '</section>';
  const parents = querySelectorAll("div.note < div.inner");
  expect(parents.length).toBe(0);
});

test("It should work for any standard CSS selector", () => {
  document.body.innerHTML =
  '<section>'+
    '<div id="1" class="note">'+
      '<div class="outter">'+
        '<div class="inner">Test</div>'+
      '</div>'+
    '</div>'+
    '<div id="2" class="note">'+
      '<div class="outter">'+
        '<div class="inner">Test</div>'+
      '</div>'+
    '</div>'+
  '</section>';
  const parents = querySelectorAll(".outter < .inner");
  expect(parents.length).toBe(2);
  for(let i = 0; i<parents.length; i++){
    expect(parents[i]).toHaveClass('outter');
    expect(parents[i]).toContainHTML('<div class="outter"><div class="inner">Test</div></div>');
  }
});

test("It should work for any standard CSS selector", () => {
  document.body.innerHTML =
  '<section>'+
    '<div id="one" class="note">'+
      '<div class="outter">'+
        '<div class="inner">Test</div>'+
      '</div>'+
    '</div>'+
    '<div id="two" class="note">'+
      '<div class="outter">'+
        '<div class="inner">Test</div>'+
      '</div>'+
    '</div>'+
  '</section>';
  const parents = querySelectorAll("#one < .outter");
  expect(parents.length).toBe(1);
  for(let i = 0; i<parents.length; i++){
    expect(parents[i]).toHaveAttribute('id', 'one');
    expect(parents[i]).toHaveClass('note');
    expect(parents[i]).toContainHTML('<div class="outter"><div class="inner">Test</div></div>');
  }
});

test("It should work for any standard CSS selector", () => {
  document.body.innerHTML =
  '<section>'+
    '<div id="1" class="someClass" category="electronics">'+
      '<div class="cellphones">'+
        '<div class="inner">Test</div>'+
      '</div>'+
    '</div>'+
    '<div id="2" class="someClass" category="electronics">'+
      '<div class="cellphones">'+
        '<div class="inner">Test</div>'+
      '</div>'+
    '</div>'+
    '<div id="3" class="someClass" category="electronics">'+
      '<div class="headphones">'+
        '<div class="inner">Test</div>'+
      '</div>'+
    '</div>'+
  '</section>';
  const parents = querySelectorAll("[category='electronics'] < .cellphones");
  expect(parents.length).toBe(2);
  for(let i = 0; i<parents.length; i++){
    expect(parents[i]).toHaveAttribute('id', `${i + 1}`);
    expect(parents[i]).toHaveClass('someClass');
    expect(parents[i]).toContainHTML('<div class="cellphones"><div class="inner">Test</div></div>');
  }
});

test("For query: '#one < #two > #three' should return <div id='one' class='parent'></div>", () => {
  document.body.innerHTML =
  '<section>'+
    '<div id="one" class="parent">'+
      '<div id="two">'+
        '<div id="three">'+
          '<div id="four">Hello world</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</section>';
  const parents = querySelectorAll("#one < #two > #three");
  expect(parents.length).toBe(1);
  for(let i = 0; i<parents.length; i++){
    expect(parents[i]).toHaveAttribute('id', "one");
    expect(parents[i]).toHaveClass('parent');
    expect(parents[i]).toContainHTML('<div id="two"><div id="three"><div id="four">Hello world</div></div></div>');
  }
});

