"use strict";

var gallery = {
  "currentImg": 0,
  "imgFiles": [
    "./images/DragNDrop/bulba.png",
    "./images/DragNDrop/charmander.png",
    "./images/DragNDrop/mankey.png",
    "./images/DragNDrop/squirtle.png",
    "./images/DragNDrop/umbreon.png",
    "./images/DragNDrop/wobbuffet.png",
  ]
};


function createDummyElements() {
  var semanticElements = [
    "article", "aside", "details", "figcaption", "figure",
    "footer", "header", "hgroup", "menu", "nav", "section"
  ];
  for (var i = 0; i < semanticElements.length; i++) {
    document.createElement(semanticElements[i]);
  }
}

function spawning() {
  var myImage = document.createElement("img")
  
}

createDummyElements();

U.ready(main);

function main() {
  spawning();
}
