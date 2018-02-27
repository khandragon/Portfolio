"use strict";


var gallery = {
    "imgFiles": [
    "bulba.png",
    "charmander.png",
    "mankey.png",
    "squirtle.png",
    "umbreon.png",
    "wobbuffet.png",
    "gengar.png",
    "eevee.png"
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
  var imgArray= [];
  for (var i = 0; i < gallery.imgFiles.length; i++) {
    var myImage = document.createElement("img")
    myImage.setAttribute("src", "./images/DragNDrop/"+gallery.imgFiles[i]);
    myImage.setAttribute("alt", gallery.imgFiles[i].split(".")[0]);
    myImage.setAttribute("id", gallery.imgFiles[i].split(".")[0]);
    myImage.setAttribute("width", "10%");
    myImage.setAttribute("height", "15%");
    imgArray.push(myImage);
  }
  return imgArray;
}

function selected(e) {
    var e = e || window.event;
    var selectedObj = e.target.tagName
}






gallery.imageElements = spawning();

createDummyElements();

U.ready(main);

function main() {
  var imgSection = U.$("imageSpawn");
  for (var i = 0; i < gallery.imageElements.length; i++) {
    imgSection.appendChild(gallery.imageElements[i]);
  }
  U.addHandler(imgSection, "mousedown",selected);
  U.addHandler(imgSection, "dblclick",flip);
}
